export = ConfigurationPlatformModel;
/**
 * @typedef ApplicationInventory
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel inventory
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
 * @typedef AppInventoryConfig
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
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id] - Current company ID for current company
 *   stores only. Don't send in case cross-selling (franchise) is enabled.
 * @property {number} brands - Brand UID
 * @property {string} [search_text] - Search store by its name or store code
 */
/**
 * @typedef StoreByBrandsResponse
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
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo[]} [brands]
 */
/**
 * @typedef ValidationFailedResponse
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
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {ApplicationInventory} [configuration]
 * @property {AppDomain} [domain]
 */
/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active] - Indicates the availability of the mobile build
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for mobile application configuration
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
 * @typedef MobileAppConfigRequest
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
 * @property {string} [_id] - 24-digit Mongo Object ID
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the currency configuration supported by the application
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
 * @property {string} [ref] - The unique identifier (24-digit Mongo Object ID)
 *   of the default currency
 * @property {string} [code] - 3-character code of the default currency, e.g.
 *   INR, EUR, USD
 */
/**
 * @typedef DomainAdd
 * @property {string} [name] - Full domain name, e.g. uniket.hostx0.de
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
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
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */
/**
 * @typedef Domain
 * @property {string} [name] - Full domain name, e.g. newton.com
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel domain
 * @property {boolean} [verified] - Domain is verified or not. TXT and A records
 *   should propagate correctly.
 * @property {boolean} [is_primary] - Domain is primary or not. Primary domain
 *   is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {boolean} [is_predefined] - Domain is hosting domain or not.
 * @property {string} [message]
 */
/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [name] - Full domain name, e.g. zenz.com
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
 * @property {boolean} [verified] - Domain is verified or not (indicates if A
 *   records and TXT records are correct)
 * @property {boolean} [is_primary] - Domain is primary or not (indicates if the
 *   domain has been made the main URL of the sales channel)
 * @property {boolean} [is_shortlink] - Indicates if the domain is a short link
 *   domain (short URL e.g. bit.ly)
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action] - Shows domain is made primary domain for the
 *   sales channel or shorlink is created for the sales channel domain
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url] - URL of the domain, e.g. uniket.hostx0.de
 */
/**
 * @typedef DomainStatus
 * @property {string} [display] - Shows TXT record and A records for the domain
 * @property {boolean} [status] - Shows whether TXT record or A records for the
 *   domain are correctly propagating via DNS servers
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected] - Check if domain is live and mapped to
 *   appropriate IP of Fynd Servers
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url] - Domain url
 * @property {boolean} [custom] - Get suggestions for custom domains or Fynd domains
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
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains] - Domain URL
 */
/**
 * @typedef SuccessMessageResponse
 * @property {boolean} [success] - Shows whether domain was deleted successfully
 * @property {string} [message] - Success message shown to the user (in a string format)
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description] - Basic description about the opted integration
 * @property {string} [description_html] - Basic HTML description about the
 *   opted integration
 * @property {string} [constants]
 * @property {string[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the opted integration
 * @property {string} [name] - Nmae of the opted integration, e.g. SAP RBL Integration
 * @property {string} [slug] - Slug of the opted integration, e.g. ginesys
 * @property {boolean} [hidden]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon] - Hosted URL of the icon image
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of the user who created the integration
 * @property {string} [created_at] - ISO 8601 timestamp of integration creation
 * @property {string} [modified_at] - ISO 8601 timestamp of integration updation
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {string} [secret] - Randomly generated fixed-length string for
 *   opted integration. It is auto-generated. It would never change once it is generated.
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */
/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script] - Browser script for the company validator
 */
/**
 * @typedef JsonSchema
 * @property {string} [display] - Display text of the validator JSON schema. It
 *   will show in the UI.
 * @property {string} [key] - Key related to the display text of the validator JSON schema
 * @property {string} [type] - Indicates the type of form field, e.g. Text, Dropdown.
 * @property {string} [tooltip] - Tooltip text for the UI of the validator JSON
 *   schema. It will show in the UI.
 */
/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script] - Browser script for the store validator
 */
/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script] - Browser script for the inventory validator
 */
/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script] - Browser script for the order validator
 */
/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the integration meta
 * @property {string} [name] - Nmae of integration meta, e.g. price_level
 * @property {string} [value] - Value related to integration meta name, e.g. store
 */
/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description] - Basic description about the integration
 * @property {string} [description_html] - Basic HTML description about the integration
 * @property {Object} [constants]
 * @property {string[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the integration
 * @property {string} [name] - Name of the integration, e.g. SAP RBL Integration
 * @property {string} [slug] - Name of the integration, e.g. SAP RBL Integration
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon] - Hosted URL of the icon image
 * @property {boolean} [hidden]
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of the user who created the integration
 * @property {string} [created_at] - ISO 8601 timestamp of integration creation
 * @property {string} [modified_at] - ISO 8601 timestamp of integration updation
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {string} [secret] - Randomly generated fixed-length string for
 *   opted integration. It is auto-generated. It would never change once it is generated.
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted] - Shows this integration is opted or not opted
 *   for the current company
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the integration config
 * @property {string} [integration] - Integration id. Shows which integration
 *   you are enabling.
 * @property {string} [level] - Shows for what level the integration is set up.
 *   It can be company level or store level.
 * @property {number} [uid] - It can be store uid or company uid. Depends on the
 *   level of integration.
 * @property {number} [company_id] - Unique id of company.
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {string} [created_at] - ISO 8601 timestamp of integration config creation
 * @property {string} [modified_at] - ISO 8601 timestamp of integration config updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {Object} [data] - Schema data of the integration stored in key-value pairs
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted] - Allow user to opt same store in other integration
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */
/**
 * @typedef OtherEntity
 * @property {boolean} [opted] - Allow other entity opted in integration
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id] - The unique identifier of the other entity for
 *   opted store integration
 * @property {string} [integration] - Integration ID. Shows which integration
 *   you are enabling.
 * @property {string} [level] - Indicates integration level. It can be company
 *   level or store level.
 * @property {number} [uid] - It can be store uid or company uid. Depends on the
 *   level of integration.
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {string} [created_at] - ISO 8601 timestamp of other entity creation
 *   for opted store integration
 * @property {string} [modified_at] - ISO 8601 timestamp of other entity
 *   updation for opted store integration
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value] - It can be inventory level or order level
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
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
 * @typedef InventoryConfig
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled] - Allow other businesses (companies)
 *   to consume the current sales channel's inventory and sell products
 * @property {boolean} [out_of_stock] - Indicates whether out of stock products
 *   are allowed to show up on the website.
 * @property {boolean} [only_verified_products] - Show only verified products
 *   (the ones whose data have been verified by the admin)
 */
/**
 * @typedef AppInventory
 * @property {InventoryConfig} [inventory]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */
/**
 * @typedef AppDomain
 * @property {string} [name] - Domain URL of current sales channel, e.g. zenz.com
 */
/**
 * @typedef CompaniesResponse
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
 * @typedef StoresResponse
 * @property {AppInventoryStores[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id] - The unique identifier of the store (24-digit Mongo
 *   Object ID) in the sales channel inventory
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
 * @typedef FilterOrderingStoreRequest
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering stores
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number} [__v]
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OrderingStoreSelectRequest
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the other seller's sales channel
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
 * @typedef OptedApplicationResponse
 * @property {string} [name] - Name of the other seller's sales channel
 * @property {string} [description] - Basic details about the other seller's sales channel
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the other seller's sales channel
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
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the token
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for the sales channel features
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
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */
/**
 * @typedef Currency
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the current sales channel supported currency
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
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
 * @typedef InvalidPayloadRequest
 * @property {string} [message] - Error message when request body payload is improper
 * @property {boolean} [success] - Flag for required not successfull.
 */
/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria] - Whether all brands are enabled, or explicitly
 *   few brands in the inventory
 * @property {number[]} [brands]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies] - List of company UID
 * @property {number[]} [brands] - List of brand UID
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
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment] - Mode of payment for the inventory of
 *   sales channel. It is required and default value is null.
 * @property {string} [source] - Source of the payment mode for the inventory
 *   payment of sales channel. Default value is FYND.
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled] - Shows store priority is enabled or not
 *   enabled for the article assignment.
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment] - Allow post order reassigment of article
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links[]} [links]
 * @property {string} [copyright_text] - Copyright statement usually seen at the
 *   site's footer
 * @property {string} [_id] - Unique identifier (24-digit Mongo Object ID) of
 *   the application information
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
 * @property {string} [_id] - Unique identifier (24-digit Mongo Object ID) of
 *   the related business
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for the sales channel details
 * @property {string} [slug]
 * @property {number} [company_id]
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the currency configuration supported by the application
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
 * @property {number} [pincode] - 6-digit PIN code of the opted store location
 * @property {string} [country] - Country of the opted store, e.g. India
 * @property {string} [city] - City of the opted store, e.g. Mumbai
 * @property {string} [sector] - Sector for the opted store.
 * @property {string} [country_code] - Country code of the selected country
 * @property {string} [state_code] - Selected state code
 */
/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering store
 * @property {number} [uid] - Ordering store UID
 * @property {string} [name] - Store name of the ordering store
 * @property {string} [display_name] - Display name of the ordering store
 * @property {string} [store_type] - Store type of the ordering store, e.g.
 *   high_street, mall, warehouse
 * @property {string} [store_code] - Store code of the ordering store, e.g. MUM-102
 * @property {number} [pincode] - 6-digit PIN Code of the ordering store, e.g. 400001
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering store
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number} [__v] - Version key for tracking ordering stores. Default
 *   value is zero.
 */
/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */
declare class ConfigurationPlatformModel {
}
declare namespace ConfigurationPlatformModel {
    export { ApplicationInventory, PiiMasking, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, InternationalDeliveryCharges, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, ValidationFailedResponse, NotFound, CommunicationConfig, CommsConfig, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, DomainAdd, DomainAddRequest, Domain, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, SuccessMessageResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, InventoryConfig, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OrderingStoreSelectRequest, OrderingStoreSelect, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, ListingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, InternationalShipping, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, ApplicationById, TokenSchemaID, TokenSchema, InvalidPayloadRequest, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, Page, ApplicationInformation, InformationAddress, InformationPhone, InformationLoc, InformationSupport, InformationSupportPhone, InformationSupportEmail, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse };
}
/** @returns {ApplicationInventory} */
declare function ApplicationInventory(): ApplicationInventory;
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    pii_masking?: PiiMasking;
    tags?: string[];
    __v?: number;
    /**
     * - Indicates the business type for sales channel
     * e.g. retail or wholesale
     */
    business?: string;
    /**
     * - Shows communication(comms) is enabled
     * or not for sales channel inventory
     */
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    platforms?: string[];
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel inventory
     */
    _id?: string;
    loyalty_points?: LoyaltyPointsConfig;
    /**
     * - Current sales channel ID
     */
    app?: string;
    /**
     * - ISO 8601 timestamp of sales channel
     * inventory creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of sales channel
     * inventory updation
     */
    modified_at?: string;
    /**
     * - User ID of the person who made the latest
     * changes in the sales channel inventory
     */
    modified_by?: string;
};
/** @returns {PiiMasking} */
declare function PiiMasking(): PiiMasking;
type PiiMasking = {
    enabled?: boolean;
};
/** @returns {AppInventoryConfig} */
declare function AppInventoryConfig(): AppInventoryConfig;
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    /**
     * - Indicates whether out of stock products
     * are allowed to show up on the website
     */
    out_of_stock?: boolean;
    /**
     * - Show only verified products
     * (the ones whose data has been verified by the admin)
     */
    only_verified_products?: boolean;
    /**
     * - Allow other businesses (companies)
     * to consume the current sales channel's inventory and sell products
     */
    franchise_enabled?: boolean;
    /**
     * - List of excluded brands category
     */
    exclude_category?: any[];
    image?: string[];
    /**
     * - List of selling locations whose
     * inventory is available to the sales channel for displaying on the website
     */
    company_store?: any[];
    company_id?: number;
};
/** @returns {InventoryBrand} */
declare function InventoryBrand(): InventoryBrand;
type InventoryBrand = {
    /**
     * - All brands or specific (explicit) brands to
     * be shown on the website
     */
    criteria?: string;
    /**
     * - List of brands
     */
    brands?: number[];
};
/** @returns {InventoryStore} */
declare function InventoryStore(): InventoryStore;
type InventoryStore = {
    /**
     * - All stores or specific (explicit) stores to
     * be shown on the website
     */
    criteria?: string;
    /**
     * - List of stores
     */
    stores?: any[];
    /**
     * - Rules to show which brands or companies
     * products should be listed on sales channel.
     */
    rules?: AppStoreRules[];
};
/** @returns {AppStoreRules} */
declare function AppStoreRules(): AppStoreRules;
type AppStoreRules = {
    /**
     * - List of companies whose inventory is
     * available to the sales channel for displaying on the website
     */
    companies?: number[];
    /**
     * - List of brands whose products will be shown
     * on the website
     */
    brands?: number[];
};
/** @returns {InventoryCategory} */
declare function InventoryCategory(): InventoryCategory;
type InventoryCategory = {
    criteria?: string;
    /**
     * - List of categories whose products will be
     * shown on the website
     */
    categories?: any[];
};
/** @returns {InventoryPrice} */
declare function InventoryPrice(): InventoryPrice;
type InventoryPrice = {
    /**
     * - Minimum inventory price
     */
    min?: number;
    /**
     * - Maximum inventory price
     */
    max?: number;
};
/** @returns {InventoryDiscount} */
declare function InventoryDiscount(): InventoryDiscount;
type InventoryDiscount = {
    /**
     * - Minimum inventory discount
     */
    min?: number;
    /**
     * - Maximum inventory discount
     */
    max?: number;
};
/** @returns {AuthenticationConfig} */
declare function AuthenticationConfig(): AuthenticationConfig;
type AuthenticationConfig = {
    /**
     * - Shows sales channel inventory authentication
     * is required or not
     */
    required?: boolean;
    /**
     * - Shows inventory authentication provider
     */
    provider?: string;
};
/** @returns {ArticleAssignmentConfig} */
declare function ArticleAssignmentConfig(): ArticleAssignmentConfig;
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    /**
     * - Allow post order reassigment of article
     */
    post_order_reassignment?: boolean;
    enforced_stores?: number[];
};
/** @returns {ArticleAssignmentRules} */
declare function ArticleAssignmentRules(): ArticleAssignmentRules;
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
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
/** @returns {AppCartConfig} */
declare function AppCartConfig(): AppCartConfig;
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    international_delivery_charges?: InternationalDeliveryCharges;
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
    /**
     * - Allow creation of bulk coupons
     */
    bulk_coupons?: boolean;
    /**
     * - Allow coupon apply and credits
     * together. Default value is false.
     */
    revenue_engine_coupon?: boolean;
    pan_card?: PanCardConfig;
};
/** @returns {InternationalDeliveryCharges} */
declare function InternationalDeliveryCharges(): InternationalDeliveryCharges;
type InternationalDeliveryCharges = {
    /**
     * - Allow international delivery charges
     */
    enabled?: boolean;
    charges?: Charges[];
};
/** @returns {DeliveryCharges} */
declare function DeliveryCharges(): DeliveryCharges;
type DeliveryCharges = {
    /**
     * - Allow delivery charges
     */
    enabled?: boolean;
    /**
     * - Holds values for delivery charges.
     */
    charges?: Charges[];
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
    /**
     * - The order value below which an extra
     * delivery fee will be applicable
     */
    threshold?: number;
    /**
     * - Delivery amount to be charged when order value
     * is below the defined threshold value
     */
    charges?: number;
};
/** @returns {AppPaymentConfig} */
declare function AppPaymentConfig(): AppPaymentConfig;
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Mode of payment for sales channel
     * payment, e.g. 'ECOMM'.
     */
    mode_of_payment?: string;
    /**
     * - Source of the payment mode, e.g. 'ECOMM'.
     * Default value is FYND.
     */
    source?: string;
    /**
     * - Allow payment option within sales channel
     */
    enabled?: boolean;
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
     * - Allow cash on delivery for anonymous user
     */
    anonymous_cod?: boolean;
    user_cod_limit?: number;
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
/** @returns {Methods} */
declare function Methods(): Methods;
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
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
     * - Shows whether payment mode is restricted to a
     * specific option, e.g. 'HDFC Netbanking'
     */
    enabled?: boolean;
    /**
     * - Shows default payment method, e.g. COD
     */
    default_options?: string;
    /**
     * - Payment method chosen from default
     * options, e.g. COD
     */
    payment_identifier?: string;
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
/** @returns {AppLogisticsConfig} */
declare function AppLogisticsConfig(): AppLogisticsConfig;
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
/** @returns {LoyaltyPointsConfig} */
declare function LoyaltyPointsConfig(): LoyaltyPointsConfig;
type LoyaltyPointsConfig = {
    /**
     * - Shows loyalty points is enabled or not enabled
     */
    enabled?: boolean;
    /**
     * - Allow auto apply of loyalty points
     */
    auto_apply?: boolean;
};
/** @returns {AppInventoryPartialUpdate} */
declare function AppInventoryPartialUpdate(): AppInventoryPartialUpdate;
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPointsConfig;
    /**
     * - Shows communication (comms) is enabled
     * or not for sales channel partial inventory update
     */
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
};
/** @returns {BrandCompanyInfo} */
declare function BrandCompanyInfo(): BrandCompanyInfo;
type BrandCompanyInfo = {
    /**
     * - Name of the company dealing with the brand
     */
    company_name?: string;
    /**
     * - Numeric ID allotted to a business account
     */
    company_id?: number;
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
/** @returns {StoreByBrandsRequest} */
declare function StoreByBrandsRequest(): StoreByBrandsRequest;
type StoreByBrandsRequest = {
    /**
     * - Current company ID for current company
     * stores only. Don't send in case cross-selling (franchise) is enabled.
     */
    company_id?: number;
    /**
     * - Brand UID
     */
    brands: number;
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
/** @returns {BrandStoreInfo} */
declare function BrandStoreInfo(): BrandStoreInfo;
type BrandStoreInfo = {
    /**
     * - Name of the selling location (store)
     */
    store_name?: string;
    /**
     * - The unique identifier of the selling location (store)
     */
    store_id?: number;
    /**
     * - Store type of the brand like warehouse,
     * high_street, mall
     */
    store_type?: string;
    /**
     * - Store code of the brand. It is unique for
     * every brand store.
     */
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
/** @returns {CompanyBrandInfo} */
declare function CompanyBrandInfo(): CompanyBrandInfo;
type CompanyBrandInfo = {
    /**
     * - Brand name, e.g. Raymonds
     */
    name?: string;
    /**
     * - Brand UID for identifying the brand
     */
    value?: number;
    /**
     * - Hosted URL of the brand's logo
     */
    brand_logo_url?: string;
    /**
     * - Hosted URL of the brand's banner image
     */
    brand_banner_url?: string;
    /**
     * - Hosted URL of the brand's
     * portrait banner
     */
    brand_banner_portrait_url?: string;
};
/** @returns {BrandsByCompanyResponse} */
declare function BrandsByCompanyResponse(): BrandsByCompanyResponse;
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo[];
};
/** @returns {ValidationFailedResponse} */
declare function ValidationFailedResponse(): ValidationFailedResponse;
type ValidationFailedResponse = {
    /**
     * - Response message for failed validation
     */
    message?: string;
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Response message for not found
     */
    message?: string;
    /**
     * - Flag for required not successfull.
     */
    success?: boolean;
};
/** @returns {CommunicationConfig} */
declare function CommunicationConfig(): CommunicationConfig;
type CommunicationConfig = {
    email?: CommsConfig;
    sms?: CommsConfig;
    voice?: CommsConfig;
};
/** @returns {CommsConfig} */
declare function CommsConfig(): CommsConfig;
type CommsConfig = {
    /**
     * - Check current communication channel is enabled
     */
    enabled?: boolean;
};
/** @returns {PanCardConfig} */
declare function PanCardConfig(): PanCardConfig;
type PanCardConfig = {
    /**
     * - If pan card accepting is enabled on cart
     */
    enabled?: boolean;
    /**
     * - On which COD order amount pan
     * card number is expected from customer for order
     */
    cod_threshold_amount?: number;
    /**
     * - On which online payment order
     * amount pan card number is expected from customer for order
     */
    online_threshold_amount?: number;
};
/** @returns {CreateApplicationRequest} */
declare function CreateApplicationRequest(): CreateApplicationRequest;
type CreateApplicationRequest = {
    app?: App;
    configuration?: ApplicationInventory;
    domain?: AppDomain;
};
/** @returns {CreateAppResponse} */
declare function CreateAppResponse(): CreateAppResponse;
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
/** @returns {ApplicationsResponse} */
declare function ApplicationsResponse(): ApplicationsResponse;
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
/** @returns {MobileAppConfiguration} */
declare function MobileAppConfiguration(): MobileAppConfiguration;
type MobileAppConfiguration = {
    /**
     * - Indicates the availability of the mobile build
     */
    is_active?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for mobile application configuration
     */
    _id?: string;
    /**
     * - Name of the mobile app
     */
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    /**
     * - Application ID of the current sales channel
     */
    application?: string;
    /**
     * - Device platform for which the mobile app
     * was built, e.g. android, ios.
     */
    platform_type?: string;
    /**
     * - ISO 8601 timestamp of application
     * configuration creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of last known
     * modifications to the app build
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - Shows bundle identifier if device
     * platform is iOS, and directory of the app if device platform is Android
     */
    package_name?: string;
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
/** @returns {MobileAppConfigRequest} */
declare function MobileAppConfigRequest(): MobileAppConfigRequest;
type MobileAppConfigRequest = {
    /**
     * - Name of the mobile app
     */
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    /**
     * - Shows update in mobile app config is active or not
     */
    is_active?: boolean;
};
/** @returns {BuildVersionHistory} */
declare function BuildVersionHistory(): BuildVersionHistory;
type BuildVersionHistory = {
    versions?: BuildVersion[];
    /**
     * - Latest version number of
     * the mobile build, in dot-decimal notation
     */
    latest_available_version_name?: string;
};
/** @returns {BuildVersion} */
declare function BuildVersion(): BuildVersion;
type BuildVersion = {
    /**
     * - 24-digit Mongo Object ID
     */
    _id?: string;
    /**
     * - Application ID of the sales channel
     */
    application?: string;
    /**
     * - Device platform for which the mobile app
     * was built, e.g. android, ios.
     */
    platform_type?: string;
    /**
     * - Current progress of the mobile build,
     * e.g. pending, cancelled, failed, success
     */
    build_status?: string;
    /**
     * - Version number of the mobile build, in
     * dot-decimal notation
     */
    version_name?: string;
    /**
     * - A positive integer used as an internal
     * version number
     */
    version_code?: number;
    download_url?: LandingImage;
    /**
     * - ISO 8601 timestamp of app creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of last known
     * modifications to the app build
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
};
/** @returns {AppSupportedCurrency} */
declare function AppSupportedCurrency(): AppSupportedCurrency;
type AppSupportedCurrency = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the currency configuration supported by the application
     */
    _id?: string;
    supported_currency?: string[];
    /**
     * - Alphanumeric ID allotted to an application
     * (sales channel website) created within a business account.
     */
    application?: string;
    default_currency?: DefaultCurrency;
    /**
     * - ISO 8601 timestamp when currency was added
     * in the list of currencies supported by the sales channel
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp when currency was
     * updated in the list of currencies supported by the sales channel
     */
    modified_at?: string;
};
/** @returns {DefaultCurrency} */
declare function DefaultCurrency(): DefaultCurrency;
type DefaultCurrency = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the default currency
     */
    ref?: string;
    /**
     * - 3-character code of the default currency, e.g.
     * INR, EUR, USD
     */
    code?: string;
};
/** @returns {DomainAdd} */
declare function DomainAdd(): DomainAdd;
type DomainAdd = {
    /**
     * - Full domain name, e.g. uniket.hostx0.de
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain
     */
    _id?: string;
    /**
     * - Domain is verified or not (indicates if A
     * records and TXT records are correct)
     */
    verified?: boolean;
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
    txt_records?: string[];
};
/** @returns {DomainAddRequest} */
declare function DomainAddRequest(): DomainAddRequest;
type DomainAddRequest = {
    domain?: DomainAdd;
};
/** @returns {Domain} */
declare function Domain(): Domain;
type Domain = {
    /**
     * - Full domain name, e.g. newton.com
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel domain
     */
    _id?: string;
    /**
     * - Domain is verified or not. TXT and A records
     * should propagate correctly.
     */
    verified?: boolean;
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
     * - Domain is hosting domain or not.
     */
    is_predefined?: boolean;
    message?: string;
};
/** @returns {DomainsResponse} */
declare function DomainsResponse(): DomainsResponse;
type DomainsResponse = {
    domains?: Domain[];
};
/** @returns {UpdateDomain} */
declare function UpdateDomain(): UpdateDomain;
type UpdateDomain = {
    /**
     * - Full domain name, e.g. zenz.com
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain
     */
    _id?: string;
    /**
     * - Domain is verified or not (indicates if A
     * records and TXT records are correct)
     */
    verified?: boolean;
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
};
/** @returns {UpdateDomainTypeRequest} */
declare function UpdateDomainTypeRequest(): UpdateDomainTypeRequest;
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    /**
     * - Shows domain is made primary domain for the
     * sales channel or shorlink is created for the sales channel domain
     */
    action?: string;
};
/** @returns {DomainStatusRequest} */
declare function DomainStatusRequest(): DomainStatusRequest;
type DomainStatusRequest = {
    /**
     * - URL of the domain, e.g. uniket.hostx0.de
     */
    domain_url?: string;
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
/** @returns {DomainSuggestionsRequest} */
declare function DomainSuggestionsRequest(): DomainSuggestionsRequest;
type DomainSuggestionsRequest = {
    /**
     * - Domain url
     */
    domain_url?: string;
    /**
     * - Get suggestions for custom domains or Fynd domains
     */
    custom?: boolean;
};
/** @returns {DomainSuggestion} */
declare function DomainSuggestion(): DomainSuggestion;
type DomainSuggestion = {
    /**
     * - URL of the custom domain
     */
    name: string;
    /**
     * - Shows whether TLD domain is supported or not
     */
    unsupported?: boolean;
    /**
     * - Shows whether the custom domain of your
     * choice is available or not available
     */
    is_available: boolean;
    /**
     * - Cost of purchasing a custom domain. Not present
     * for Fynd domains.
     */
    price?: number;
    /**
     * - Custom domain currency. Not present for Fynd domains.
     */
    currency?: string;
};
/** @returns {DomainSuggestionsResponse} */
declare function DomainSuggestionsResponse(): DomainSuggestionsResponse;
type DomainSuggestionsResponse = {
    /**
     * - Domain URL
     */
    domains?: DomainSuggestion[];
};
/** @returns {SuccessMessageResponse} */
declare function SuccessMessageResponse(): SuccessMessageResponse;
type SuccessMessageResponse = {
    /**
     * - Shows whether domain was deleted successfully
     */
    success?: boolean;
    /**
     * - Success message shown to the user (in a string format)
     */
    message?: string;
};
/** @returns {GetIntegrationsOptInsResponse} */
declare function GetIntegrationsOptInsResponse(): GetIntegrationsOptInsResponse;
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
/** @returns {IntegrationOptIn} */
declare function IntegrationOptIn(): IntegrationOptIn;
type IntegrationOptIn = {
    validators?: Validators;
    /**
     * - Basic description about the opted integration
     */
    description?: string;
    /**
     * - Basic HTML description about the
     * opted integration
     */
    description_html?: string;
    constants?: string;
    companies?: string[];
    support?: string[];
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the opted integration
     */
    _id?: string;
    /**
     * - Nmae of the opted integration, e.g. SAP RBL Integration
     */
    name?: string;
    /**
     * - Slug of the opted integration, e.g. ginesys
     */
    slug?: string;
    hidden?: boolean;
    meta?: IntegrationMeta[];
    /**
     * - Hosted URL of the icon image
     */
    icon?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the user who created the integration
     */
    owner?: string;
    /**
     * - ISO 8601 timestamp of integration creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of integration updation
     */
    modified_at?: string;
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - Randomly generated fixed-length string for
     * opted integration. It is auto-generated. It would never change once it is generated.
     */
    secret?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
};
/** @returns {Validators} */
declare function Validators(): Validators;
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
/** @returns {CompanyValidator} */
declare function CompanyValidator(): CompanyValidator;
type CompanyValidator = {
    json_schema?: JsonSchema[];
    /**
     * - Browser script for the company validator
     */
    browser_script?: string;
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
     * - Indicates the type of form field, e.g. Text, Dropdown.
     */
    type?: string;
    /**
     * - Tooltip text for the UI of the validator JSON
     * schema. It will show in the UI.
     */
    tooltip?: string;
};
/** @returns {StoreValidator} */
declare function StoreValidator(): StoreValidator;
type StoreValidator = {
    json_schema?: JsonSchema[];
    /**
     * - Browser script for the store validator
     */
    browser_script?: string;
};
/** @returns {InventoryValidator} */
declare function InventoryValidator(): InventoryValidator;
type InventoryValidator = {
    json_schema?: JsonSchema[];
    /**
     * - Browser script for the inventory validator
     */
    browser_script?: string;
};
/** @returns {OrderValidator} */
declare function OrderValidator(): OrderValidator;
type OrderValidator = {
    json_schema?: JsonSchema[];
    /**
     * - Browser script for the order validator
     */
    browser_script?: string;
};
/** @returns {IntegrationMeta} */
declare function IntegrationMeta(): IntegrationMeta;
type IntegrationMeta = {
    is_public?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the integration meta
     */
    _id?: string;
    /**
     * - Nmae of integration meta, e.g. price_level
     */
    name?: string;
    /**
     * - Value related to integration meta name, e.g. store
     */
    value?: string;
};
/** @returns {Integration} */
declare function Integration(): Integration;
type Integration = {
    validators?: Validators;
    /**
     * - Basic description about the integration
     */
    description?: string;
    /**
     * - Basic HTML description about the integration
     */
    description_html?: string;
    constants?: any;
    companies?: string[];
    support?: string[];
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the integration
     */
    _id?: string;
    /**
     * - Name of the integration, e.g. SAP RBL Integration
     */
    name?: string;
    /**
     * - Name of the integration, e.g. SAP RBL Integration
     */
    slug?: string;
    meta?: IntegrationMeta[];
    /**
     * - Hosted URL of the icon image
     */
    icon?: string;
    hidden?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the user who created the integration
     */
    owner?: string;
    /**
     * - ISO 8601 timestamp of integration creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of integration updation
     */
    modified_at?: string;
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - Randomly generated fixed-length string for
     * opted integration. It is auto-generated. It would never change once it is generated.
     */
    secret?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
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
     * - Shows this integration is opted or not opted
     * for the current company
     */
    opted?: boolean;
    permissions?: any[];
    last_patch?: LastPatch[];
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the integration config
     */
    _id?: string;
    /**
     * - Integration id. Shows which integration
     * you are enabling.
     */
    integration?: string;
    /**
     * - Shows for what level the integration is set up.
     * It can be company level or store level.
     */
    level?: string;
    /**
     * - It can be store uid or company uid. Depends on the
     * level of integration.
     */
    uid?: number;
    /**
     * - Unique id of company.
     */
    company_id?: number;
    meta?: IntegrationMeta[];
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - ISO 8601 timestamp of integration config creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of integration config updation
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - Schema data of the integration stored in key-value pairs
     */
    data?: any;
    success?: boolean;
    message?: string;
};
/** @returns {UpdateIntegrationLevelRequest} */
declare function UpdateIntegrationLevelRequest(): UpdateIntegrationLevelRequest;
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
/** @returns {OptedStoreIntegration} */
declare function OptedStoreIntegration(): OptedStoreIntegration;
type OptedStoreIntegration = {
    /**
     * - Allow user to opt same store in other integration
     */
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
/** @returns {OtherEntity} */
declare function OtherEntity(): OtherEntity;
type OtherEntity = {
    /**
     * - Allow other entity opted in integration
     */
    opted?: boolean;
    permissions?: string[];
    last_patch?: LastPatch[];
    /**
     * - The unique identifier of the other entity for
     * opted store integration
     */
    _id?: string;
    /**
     * - Integration ID. Shows which integration
     * you are enabling.
     */
    integration?: string;
    /**
     * - Indicates integration level. It can be company
     * level or store level.
     */
    level?: string;
    /**
     * - It can be store uid or company uid. Depends on the
     * level of integration.
     */
    uid?: number;
    data?: OtherEntityData;
    meta?: any[];
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - ISO 8601 timestamp of other entity creation
     * for opted store integration
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of other entity
     * updation for opted store integration
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
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
/** @returns {OtherEntityData} */
declare function OtherEntityData(): OtherEntityData;
type OtherEntityData = {
    article_identifier?: string;
};
/** @returns {App} */
declare function App(): App;
type App = {
    /**
     * - Numeric ID allotted to a business account
     * on Fynd Platform.
     */
    company_id?: string;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store
     */
    channel_type?: string;
    auth?: ApplicationAuth;
    /**
     * - User-friendly name for sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - Detailed description about the sales channel
     */
    desc?: string;
};
/** @returns {InventoryConfig} */
declare function InventoryConfig(): InventoryConfig;
type InventoryConfig = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: string[];
    /**
     * - Allow other businesses (companies)
     * to consume the current sales channel's inventory and sell products
     */
    franchise_enabled?: boolean;
    /**
     * - Indicates whether out of stock products
     * are allowed to show up on the website.
     */
    out_of_stock?: boolean;
    /**
     * - Show only verified products
     * (the ones whose data have been verified by the admin)
     */
    only_verified_products?: boolean;
};
/** @returns {AppInventory} */
declare function AppInventory(): AppInventory;
type AppInventory = {
    inventory?: InventoryConfig;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
};
/** @returns {AppDomain} */
declare function AppDomain(): AppDomain;
type AppDomain = {
    /**
     * - Domain URL of current sales channel, e.g. zenz.com
     */
    name?: string;
};
/** @returns {CompaniesResponse} */
declare function CompaniesResponse(): CompaniesResponse;
type CompaniesResponse = {
    items?: AppInventoryCompanies[];
    page?: Page;
};
/** @returns {AppInventoryCompanies} */
declare function AppInventoryCompanies(): AppInventoryCompanies;
type AppInventoryCompanies = {
    /**
     * - UID of the company, e.g. 108
     */
    uid?: number;
    /**
     * - Name of the company, e.g. Newton Traders
     */
    name?: string;
    /**
     * - Indicates the type of the company, e.g.
     * franchisee, distributor, etc.
     */
    company_type?: string;
};
/** @returns {StoresResponse} */
declare function StoresResponse(): StoresResponse;
type StoresResponse = {
    items?: AppInventoryStores[];
    page?: Page;
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
     * - ISO 8601 timestamp of last known updation
     * to the stores in sales channel inventory
     */
    modified_on?: string;
    /**
     * - Sales channel inventory store UID
     */
    uid?: number;
    /**
     * - Name of the store in the sales channel inventory,
     * e.g. Reebok Mumbai
     */
    name?: string;
    /**
     * - Display name of the sales channel
     * inventory store (can be different than the actual store name), e.g. Reebok MUM
     */
    display_name?: string;
    /**
     * - Store type of the sales channel inventory
     * store, such as mall, warehouse, high_street
     */
    store_type?: string;
    /**
     * - Store code of the enabled inventory store,
     * e.g. HS-c9bac. It is unique for every store.
     */
    store_code?: string;
    /**
     * - Company ID of the selling location (store)
     * added to the sales channel's inventory
     */
    company_id?: number;
    address?: any;
    integration_type?: any;
};
/** @returns {FilterOrderingStoreRequest} */
declare function FilterOrderingStoreRequest(): FilterOrderingStoreRequest;
type FilterOrderingStoreRequest = {
    /**
     * - Allow all stores from the ordering stores
     */
    all_stores?: boolean;
    deployed_stores?: number[];
    /**
     * - Store code or name of the ordering store
     */
    q?: string;
};
/** @returns {DeploymentMeta} */
declare function DeploymentMeta(): DeploymentMeta;
type DeploymentMeta = {
    deployed_stores?: number[];
    /**
     * - Allow all stores from the ordering store
     */
    all_stores?: boolean;
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
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the ordering stores
     */
    _id?: string;
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account
     */
    app?: string;
    __v?: number;
};
/** @returns {OrderingStoreConfig} */
declare function OrderingStoreConfig(): OrderingStoreConfig;
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
/** @returns {OrderingStoreSelectRequest} */
declare function OrderingStoreSelectRequest(): OrderingStoreSelectRequest;
type OrderingStoreSelectRequest = {
    ordering_store: OrderingStoreSelect;
};
/** @returns {OrderingStoreSelect} */
declare function OrderingStoreSelect(): OrderingStoreSelect;
type OrderingStoreSelect = {
    /**
     * - Ordering store unique uid. It is required.
     */
    uid: number;
};
/** @returns {OtherSellerCompany} */
declare function OtherSellerCompany(): OtherSellerCompany;
type OtherSellerCompany = {
    /**
     * - Uid of the seller company
     */
    uid?: number;
    /**
     * - Name of the seller company
     */
    name?: string;
};
/** @returns {OtherSellerApplication} */
declare function OtherSellerApplication(): OtherSellerApplication;
type OtherSellerApplication = {
    /**
     * - Name of the other seller's sales channel
     */
    name?: string;
    /**
     * - Basic details about the other seller's sales channel
     */
    description?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the other seller's sales channel
     */
    _id?: string;
    /**
     * - Domain URL of the other seller's sales channel
     */
    domain?: string;
    company?: OtherSellerCompany;
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
/** @returns {OptedApplicationResponse} */
declare function OptedApplicationResponse(): OptedApplicationResponse;
type OptedApplicationResponse = {
    /**
     * - Name of the other seller's sales channel
     */
    name?: string;
    /**
     * - Basic details about the other seller's sales channel
     */
    description?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the other seller's sales channel
     */
    _id?: string;
    /**
     * - Domain URL of the other seller's sales channel
     */
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
/** @returns {OptedCompany} */
declare function OptedCompany(): OptedCompany;
type OptedCompany = {
    /**
     * - Company UID opted by the other seller's sales
     * channel in its inventory. It has unique value for the company.
     */
    uid?: number;
    /**
     * - Name of the company opted by the other seller's
     * sales channel in its inventory
     */
    name?: string;
    /**
     * - The unique identifier of the opted inventory company
     */
    id?: number;
};
/** @returns {OptedInventory} */
declare function OptedInventory(): OptedInventory;
type OptedInventory = {
    opt_type?: OptType;
    items?: any[];
};
/** @returns {OptType} */
declare function OptType(): OptType;
type OptType = {
    /**
     * - Opted type of inventory store. It can be store or company.
     */
    key?: string;
    /**
     * - Display text of opted type for inventory store
     */
    display?: string;
};
/** @returns {OptedStore} */
declare function OptedStore(): OptedStore;
type OptedStore = {
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
     * - The unique identifier of the opted inventory store
     */
    _id?: string;
    /**
     * - ISO 8601 timestamp of opted inventory store creation
     */
    modified_on?: string;
    /**
     * - UID of opted inventory store
     */
    uid?: number;
    address?: OptedStoreAddress;
    /**
     * - Display name of the opted inventory store
     */
    display_name?: string;
    /**
     * - Store type of the opted inventory store
     * like warehouse, high_street, mall.
     */
    store_type?: string;
    /**
     * - Company ID of the opted inventory store
     */
    company_id?: number;
};
/** @returns {OptOutInventory} */
declare function OptOutInventory(): OptOutInventory;
type OptOutInventory = {
    /**
     * - List of selling locations (stores) opted out
     * from the inventory of other seller's application
     */
    store: number[];
    /**
     * - List of companies opted out from the inventory
     * of other seller's application
     */
    company: number[];
};
/** @returns {TokenResponse} */
declare function TokenResponse(): TokenResponse;
type TokenResponse = {
    tokens?: Tokens;
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
    /**
     * - ISO 8601 timestamp of token updation
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
};
/** @returns {Tokens} */
declare function Tokens(): Tokens;
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
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
/** @returns {Credentials} */
declare function Credentials(): Credentials;
type Credentials = {
    ios?: Ios;
    android?: Android;
    /**
     * - Project ID for Firebase integration.
     * Project ID is a unique identifier for a project and is used only within the console.
     */
    project_id?: string;
    /**
     * - Google Cloud Manager's Sender ID for
     * Firebase. It is a unique numerical value which is created when you
     * configure your project in the Google Developers Console/Google Cloud Console.
     */
    gcm_sender_id?: string;
    /**
     * - Alphanumeric ID allotted to the current
     * application created within the current business account
     */
    application_id?: string;
    /**
     * - An API key is a unique string that's used to
     * route requests to your Firebase project when interacting with Firebase.
     */
    api_key?: string;
};
/** @returns {Ios} */
declare function Ios(): Ios;
type Ios = {
    /**
     * - Alphanumeric ID allotted to a sales
     * channel application created within a business account
     */
    application_id?: string;
    /**
     * - Firebase secret credential API key for IOS
     */
    api_key?: string;
};
/** @returns {Android} */
declare function Android(): Android;
type Android = {
    /**
     * - Alphanumeric ID allotted to a sales
     * channel application created within a business account
     */
    application_id?: string;
    /**
     * - Firebase secret credential API key for Android
     */
    api_key?: string;
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
    /**
     * - Public key for integrating with Fynd rewards.
     */
    private_key?: string;
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
/** @returns {RewardPointsConfig} */
declare function RewardPointsConfig(): RewardPointsConfig;
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
/** @returns {Credit} */
declare function Credit(): Credit;
type Credit = {
    /**
     * - Shows whether reward points should be credited
     */
    enabled?: boolean;
};
/** @returns {Debit} */
declare function Debit(): Debit;
type Debit = {
    /**
     * - Shows whether reward points are available for debit
     */
    enabled?: boolean;
    /**
     * - Allow automatic debit of reward points
     */
    auto_apply?: boolean;
    /**
     * - Strategy channel for debiting reward points
     */
    strategy_channel?: string;
};
/** @returns {ProductDetailFeature} */
declare function ProductDetailFeature(): ProductDetailFeature;
type ProductDetailFeature = {
    /**
     * - Configuration to show similar products,
     * other products from same seller, other products in same category, other
     * products in same price range, etc.
     */
    similar?: string[];
    /**
     * - Shows whether the customers can
     * choose the seller on PDP
     */
    seller_selection?: boolean;
    /**
     * - Allow user to update product
     * meta. Default value is true.
     */
    update_product_meta?: boolean;
    /**
     * - Indicates whether customers can
     * request for a product. Default value is false.
     */
    request_product?: boolean;
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
/** @returns {LandingPageFeature} */
declare function LandingPageFeature(): LandingPageFeature;
type LandingPageFeature = {
    launch_page?: LaunchPage;
    /**
     * - Shows whether a guest can checkout
     * from cart without logging in
     */
    continue_as_guest?: boolean;
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
/** @returns {ListingPageFeature} */
declare function ListingPageFeature(): ListingPageFeature;
type ListingPageFeature = {
    sort_on?: string;
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
/** @returns {AppFeature} */
declare function AppFeature(): AppFeature;
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for the sales channel features
     */
    _id?: string;
    /**
     * - Application ID of the sales channel
     */
    app?: string;
    /**
     * - ISO 8601 timestamp showing the date when
     * the features were configured
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of last known
     * modifications to the sales channel feature configuration
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero
     */
    __v?: number;
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
/** @returns {CommonFeature} */
declare function CommonFeature(): CommonFeature;
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    listing_page?: ListingPageFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
    international_shipping?: InternationalShipping;
};
/** @returns {InternationalShipping} */
declare function InternationalShipping(): InternationalShipping;
type InternationalShipping = {
    /**
     * - International shipping is enabled or not.
     */
    enabled?: boolean;
};
/** @returns {CommunicationOptinDialogFeature} */
declare function CommunicationOptinDialogFeature(): CommunicationOptinDialogFeature;
type CommunicationOptinDialogFeature = {
    /**
     * - Shows whether WhatsApp communication is enabled
     */
    visibility?: boolean;
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
/** @returns {ListingPriceFeature} */
declare function ListingPriceFeature(): ListingPriceFeature;
type ListingPriceFeature = {
    /**
     * - Shows which price to display on PLP if one
     * product has multiple prices (for each size), valid values are 'min', 'max',
     * 'range'. Default value is range.
     */
    value?: string;
    /**
     * - Sorting of listing price with min or max value.
     * Default value is min.
     */
    sort?: string;
};
/** @returns {CurrencyFeature} */
declare function CurrencyFeature(): CurrencyFeature;
type CurrencyFeature = {
    /**
     * - 3-letter currency code
     */
    value?: string[];
    /**
     * - If 'explicit', currency formatting shows currency
     * code with price. For explicit or all currency selection.
     */
    type?: string;
    /**
     * - 3-letter code of the default currency
     * used in the application. Default vaule is 'INR'.
     */
    default_currency?: string;
};
/** @returns {RevenueEngineFeature} */
declare function RevenueEngineFeature(): RevenueEngineFeature;
type RevenueEngineFeature = {
    /**
     * - Enable revenue engine. Default value is false.
     */
    enabled?: boolean;
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
/** @returns {CompareProductsFeature} */
declare function CompareProductsFeature(): CompareProductsFeature;
type CompareProductsFeature = {
    /**
     * - Shows whether product comparison feature is
     * enabled on PDP
     */
    enabled?: boolean;
};
/** @returns {CartFeature} */
declare function CartFeature(): CartFeature;
type CartFeature = {
    /**
     * - Shows whether customer is allowed to enter
     * GST on the cart page for claiming input credits
     */
    gst_input?: boolean;
    /**
     * - Shows whether staff selection is
     * enabled on cart page
     */
    staff_selection?: boolean;
    /**
     * - Shows whether the staff is
     * placing order on behalf of customer. Default value is true.
     */
    placing_for_customer?: boolean;
    /**
     * - Allow adding of Google Maps. Default value is true.
     */
    google_map?: boolean;
    /**
     * - Allow coupon apply and credits,
     * together. Default value is false.
     */
    revenue_engine_coupon?: boolean;
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
     * - Shows whether sharing product via QR code is
     * allowed. Default value is false.
     */
    products?: boolean;
    /**
     * - Shows whether sharing collection via QR
     * code is allowed. Default value is false.
     */
    collections?: boolean;
};
/** @returns {PcrFeature} */
declare function PcrFeature(): PcrFeature;
type PcrFeature = {
    /**
     * - Allow staff selection. Default value is false.
     */
    staff_selection?: boolean;
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
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the current sales channel supported currency
     */
    _id?: string;
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
     * - 3-character currency code, e.g. INR, USD, EUR.
     */
    code?: string;
    /**
     * - ISO 8601 timestamp of sales channel support
     * currency creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of sales channel
     * support currency updation
     */
    modified_at?: string;
    /**
     * - Acceptable decimal limits for a given
     * currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
     * value of a currency.
     */
    decimal_digits?: number;
    /**
     * - Unique symbol for identifying the currency, e.g. ₹
     */
    symbol?: string;
    country_name?: string;
    country_code?: string;
};
/** @returns {ApplicationWebsite} */
declare function ApplicationWebsite(): ApplicationWebsite;
type ApplicationWebsite = {
    /**
     * - Shows whether sales channel website URL is
     * enabled or not
     */
    enabled?: boolean;
    /**
     * - Base path for the current sales channel website
     */
    basepath?: string;
};
/** @returns {ApplicationCors} */
declare function ApplicationCors(): ApplicationCors;
type ApplicationCors = {
    domains?: string[];
};
/** @returns {ApplicationAuth} */
declare function ApplicationAuth(): ApplicationAuth;
type ApplicationAuth = {
    /**
     * - Shows sales channel auth is enabled or not enabled.
     */
    enabled?: boolean;
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
/** @returns {SecureUrl} */
declare function SecureUrl(): SecureUrl;
type SecureUrl = {
    /**
     * - Hosted URL of the image
     */
    secure_url?: string;
};
/** @returns {Application} */
declare function Application(): Application;
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    /**
     * - It contains detailed information about the
     * sales channel.
     */
    description?: string;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store
     */
    channel_type?: string;
    /**
     * - An integer value that specifies the number
     * of seconds until the key expires
     */
    cache_ttl?: number;
    /**
     * - Indicates whether a sales channel is
     * internal or not
     */
    is_internal?: boolean;
    /**
     * - Indicates sales channel is active or not active
     */
    is_active?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel
     */
    _id?: string;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner who owns the application
     */
    owner?: string;
    /**
     * - Numeric ID allotted to a business account
     * where the sales channel exists
     */
    company_id?: number;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    /**
     * - ISO 8601 timestamp of sales channel creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of sales channel updation
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    /**
     * - It shows application is live or in development mode.
     */
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
    slug?: string;
    mode?: string;
    status?: string;
    tokens?: TokenSchema[];
    secret?: string;
};
/** @returns {ApplicationById} */
declare function ApplicationById(): ApplicationById;
type ApplicationById = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    /**
     * - It contains detailed information about the
     * sales channel.
     */
    description?: string;
    /**
     * - It indicates different types of channels,
     * such as store, website, and mobile apps, with 'store' being the default value.
     */
    channel_type?: string;
    /**
     * - An integer value that specifies the number
     * of seconds until the key expires
     */
    cache_ttl?: number;
    /**
     * - Indicates whether a sales channel is
     * internal or not
     */
    is_internal?: boolean;
    /**
     * - Indicates sales channel is active or not active
     */
    is_active?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel
     */
    _id?: string;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner who owns the application
     */
    owner?: string;
    /**
     * - Numeric ID allotted to a business account
     * where the sales channel exists
     */
    company_id?: number;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    /**
     * - ISO 8601 timestamp of sales channel creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of sales channel updation
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    /**
     * - It shows application is live or in development mode.
     */
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
    slug?: string;
    mode?: string;
    status?: string;
    tokens?: TokenSchemaID[];
    secret?: string;
};
/** @returns {TokenSchemaID} */
declare function TokenSchemaID(): TokenSchemaID;
type TokenSchemaID = {
    token?: string;
    created_by?: string;
    /**
     * - ISO 8601 timestamp of when token created
     */
    created_at?: string;
};
/** @returns {TokenSchema} */
declare function TokenSchema(): TokenSchema;
type TokenSchema = {
    token?: string;
    created_by?: any;
    /**
     * - ISO 8601 timestamp of when token created
     */
    created_at?: string;
};
/** @returns {InvalidPayloadRequest} */
declare function InvalidPayloadRequest(): InvalidPayloadRequest;
type InvalidPayloadRequest = {
    /**
     * - Error message when request body payload is improper
     */
    message?: string;
    /**
     * - Flag for required not successfull.
     */
    success?: boolean;
};
/** @returns {InventoryBrandRule} */
declare function InventoryBrandRule(): InventoryBrandRule;
type InventoryBrandRule = {
    /**
     * - Whether all brands are enabled, or explicitly
     * few brands in the inventory
     */
    criteria?: string;
    brands?: number[];
};
/** @returns {StoreCriteriaRule} */
declare function StoreCriteriaRule(): StoreCriteriaRule;
type StoreCriteriaRule = {
    /**
     * - List of company UID
     */
    companies?: number[];
    /**
     * - List of brand UID
     */
    brands?: number[];
};
/** @returns {InventoryStoreRule} */
declare function InventoryStoreRule(): InventoryStoreRule;
type InventoryStoreRule = {
    /**
     * - Whether all stores are enabled, or explicitly
     * few stores in the inventory, or use brands and company filter.
     */
    criteria?: string;
    /**
     * - List of rules with company and
     * brands uids. Used when critera is `filter`.
     */
    rules?: StoreCriteriaRule[];
    /**
     * - List of store uids. Used when critera is `explicit`.
     */
    stores?: number[];
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
/** @returns {ArticleAssignmentRule} */
declare function ArticleAssignmentRule(): ArticleAssignmentRule;
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
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
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {ApplicationInformation} */
declare function ApplicationInformation(): ApplicationInformation;
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links[];
    /**
     * - Copyright statement usually seen at the
     * site's footer
     */
    copyright_text?: string;
    /**
     * - Unique identifier (24-digit Mongo Object ID) of
     * the application information
     */
    _id?: string;
    business_highlights?: BusinessHighlights[];
    /**
     * - Alphanumeric ID allotted to a sales
     * channel application created within a business account
     */
    application?: string;
    /**
     * - ISO 8601 timestamp of creation of the
     * application information
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of updation of the
     * application information
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
};
/** @returns {InformationAddress} */
declare function InformationAddress(): InformationAddress;
type InformationAddress = {
    loc?: InformationLoc;
    /**
     * - Contact address of the sales channel
     */
    address_line?: string[];
    phone?: InformationPhone[];
    /**
     * - Name of the city, e.g. Mumbai
     */
    city?: string;
    /**
     * - Name of the country, e.g. India
     */
    country?: string;
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
/** @returns {InformationLoc} */
declare function InformationLoc(): InformationLoc;
type InformationLoc = {
    /**
     * - Country code for contact number, e.g. +91 (for India)
     */
    type?: string;
    /**
     * - 10-digit mobile number
     */
    coordinates?: number[];
};
/** @returns {InformationSupport} */
declare function InformationSupport(): InformationSupport;
type InformationSupport = {
    phone?: InformationSupportPhone[];
    email?: InformationSupportEmail[];
    /**
     * - Working hours of support team, e.g. 9 AM to 9 PM
     */
    timing?: string;
};
/** @returns {InformationSupportPhone} */
declare function InformationSupportPhone(): InformationSupportPhone;
type InformationSupportPhone = {
    /**
     * - Country code for contact number, e.g. +91 (for India)
     */
    code?: string;
    /**
     * - 10-digit mobile number
     */
    number?: string;
    key?: string;
};
/** @returns {InformationSupportEmail} */
declare function InformationSupportEmail(): InformationSupportEmail;
type InformationSupportEmail = {
    /**
     * - Value of email.
     */
    value?: string;
    key?: string;
};
/** @returns {SocialLinks} */
declare function SocialLinks(): SocialLinks;
type SocialLinks = {
    facebook?: FacebookLink;
    instagram?: InstagramLink;
    twitter?: TwitterLink;
    pinterest?: PinterestLink;
    google_plus?: GooglePlusLink;
    youtube?: YoutubeLink;
    linked_in?: LinkedInLink;
    vimeo?: VimeoLink;
    blog_link?: BlogLink;
};
/** @returns {FacebookLink} */
declare function FacebookLink(): FacebookLink;
type FacebookLink = {
    /**
     * - Name of the social media platform, e.g. Facebook
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Facebook page
     */
    link?: string;
};
/** @returns {InstagramLink} */
declare function InstagramLink(): InstagramLink;
type InstagramLink = {
    /**
     * - Name of the social media platform, e.g. Instagram
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Instagram page
     */
    link?: string;
};
/** @returns {TwitterLink} */
declare function TwitterLink(): TwitterLink;
type TwitterLink = {
    /**
     * - Name of the social media platform, e.g. Twitter
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Twitter account
     */
    link?: string;
};
/** @returns {PinterestLink} */
declare function PinterestLink(): PinterestLink;
type PinterestLink = {
    /**
     * - Name of the social media platform, e.g. Pinterest
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Pinterest page
     */
    link?: string;
};
/** @returns {GooglePlusLink} */
declare function GooglePlusLink(): GooglePlusLink;
type GooglePlusLink = {
    /**
     * - Name of the social media platform, e.g. Google+
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Google+ account
     */
    link?: string;
};
/** @returns {YoutubeLink} */
declare function YoutubeLink(): YoutubeLink;
type YoutubeLink = {
    /**
     * - Name of the social media platform, e.g. YouTube
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's YouTube channel
     */
    link?: string;
};
/** @returns {LinkedInLink} */
declare function LinkedInLink(): LinkedInLink;
type LinkedInLink = {
    /**
     * - Name of the social media platform, e.g. LinkedIn
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's LinkedIn channel
     */
    link?: string;
};
/** @returns {VimeoLink} */
declare function VimeoLink(): VimeoLink;
type VimeoLink = {
    /**
     * - Name of the video hosting platform, e.g. Vimeo
     */
    title?: string;
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Vimeo channel
     */
    link?: string;
};
/** @returns {BlogLink} */
declare function BlogLink(): BlogLink;
type BlogLink = {
    /**
     * - Name of the brand's blog page
     */
    title?: string;
    /**
     * - Hosted URL of icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's blog page
     */
    link?: string;
};
/** @returns {Links} */
declare function Links(): Links;
type Links = {
    /**
     * - Name of the related page or link
     */
    title?: string;
    /**
     * - Web URL for redirecting to a related page
     */
    link?: string;
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
     * - Title of the business highlight, e.g. Superfast Delivery
     */
    title?: string;
    /**
     * - Hosted URL of icon image representing the
     * business highlight
     */
    icon?: string;
    /**
     * - Detailed information about the highlight
     */
    sub_title?: string;
};
/** @returns {ApplicationDetail} */
declare function ApplicationDetail(): ApplicationDetail;
type ApplicationDetail = {
    /**
     * - Name of the sales channel. It is required.
     */
    name: string;
    /**
     * - It gives a detailed information about the
     * sales channel. It is required.
     */
    description?: string;
    logo?: SecureUrl;
    mobile_logo?: SecureUrl;
    favicon?: SecureUrl;
    banner?: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for the sales channel details
     */
    _id?: string;
    slug?: string;
    company_id?: number;
};
/** @returns {CurrenciesResponse} */
declare function CurrenciesResponse(): CurrenciesResponse;
type CurrenciesResponse = {
    items?: Currency[];
};
/** @returns {AppCurrencyResponse} */
declare function AppCurrencyResponse(): AppCurrencyResponse;
type AppCurrencyResponse = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the currency configuration supported by the application
     */
    _id?: string;
    /**
     * - Alphanumeric ID allotted to an application
     * (sales channel website) created within a business account
     */
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
    /**
     * - ISO 8601 timestamp when currency was added
     * in the list of currencies supported by the sales channel
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp when currency was
     * updated in the list of currencies supported by the sales channel
     */
    modified_at?: string;
};
/** @returns {StoreLatLong} */
declare function StoreLatLong(): StoreLatLong;
type StoreLatLong = {
    /**
     * - Coordinates type of the opted store
     */
    type?: string;
    coordinates?: number[];
};
/** @returns {OptedStoreAddress} */
declare function OptedStoreAddress(): OptedStoreAddress;
type OptedStoreAddress = {
    /**
     * - State of the opted store, e.g. Maharashtra
     */
    state?: string;
    /**
     * - Address of the opted store
     */
    address1?: string;
    lat_long?: StoreLatLong;
    /**
     * - Address of the opted store
     */
    address2?: string;
    /**
     * - 6-digit PIN code of the opted store location
     */
    pincode?: number;
    /**
     * - Country of the opted store, e.g. India
     */
    country?: string;
    /**
     * - City of the opted store, e.g. Mumbai
     */
    city?: string;
    /**
     * - Sector for the opted store.
     */
    sector?: string;
    /**
     * - Country code of the selected country
     */
    country_code?: string;
    /**
     * - Selected state code
     */
    state_code?: string;
};
/** @returns {OrderingStore} */
declare function OrderingStore(): OrderingStore;
type OrderingStore = {
    address?: OptedStoreAddress;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the ordering store
     */
    _id?: string;
    /**
     * - Ordering store UID
     */
    uid?: number;
    /**
     * - Store name of the ordering store
     */
    name?: string;
    /**
     * - Display name of the ordering store
     */
    display_name?: string;
    /**
     * - Store type of the ordering store, e.g.
     * high_street, mall, warehouse
     */
    store_type?: string;
    /**
     * - Store code of the ordering store, e.g. MUM-102
     */
    store_code?: string;
    /**
     * - 6-digit PIN Code of the ordering store, e.g. 400001
     */
    pincode?: number;
    /**
     * - Code of the ordering store (usually same as Store Code)
     */
    code?: string;
};
/** @returns {OrderingStores} */
declare function OrderingStores(): OrderingStores;
type OrderingStores = {
    page?: Page;
    items?: OrderingStore[];
    deployed_stores?: number[];
    /**
     * - Allow all stores of the ordering stores
     */
    all_stores?: boolean;
    /**
     * - Allow ordering stores for current sales channel
     */
    enabled?: boolean;
    /**
     * - For hard type delivery, store selection is
     * compulsory. For soft type, delivery store selection is optional.
     */
    type?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the ordering store
     */
    _id?: string;
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account
     */
    app?: string;
    /**
     * - Version key for tracking ordering stores. Default
     * value is zero.
     */
    __v?: number;
};
/** @returns {OrderingStoresResponse} */
declare function OrderingStoresResponse(): OrderingStoresResponse;
type OrderingStoresResponse = {
    page?: Page;
    items?: OrderingStore[];
};
