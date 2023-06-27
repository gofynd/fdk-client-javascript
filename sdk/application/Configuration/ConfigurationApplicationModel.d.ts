export = ConfigurationApplicationModel;
/**
 * @typedef Android
 * @property {string} [api_key] - Firebase secret credential API key for Android
 * @property {string} [application_id] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application] - Alphanumeric ID allotted to an application
 *   (sales channel website) created within a business account
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
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
 * @typedef ApplicationAboutResponse
 * @property {ApplicationInfo} [application_info]
 * @property {CompanyInfo} [company_info]
 * @property {OwnerInfo} [owner_info]
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
 * @property {SecureUrl} banner
 * @property {string} description - It gives a detailed information about the
 *   sales channel. It is required.
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} favicon
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {string} name - Name of the sales channel. It is required.
 * @property {string} [slug]
 */
/**
 * @typedef ApplicationInfo
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of application information
 * @property {SecureUrl} [banner]
 * @property {ApplicationCors} [cors]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel
 *   information creation
 * @property {string} [description] - It contains details information about the
 *   sales channel
 * @property {Domain} [domain]
 * @property {boolean} [is_active] - Indicates whether sales channel is active
 *   or not active
 * @property {SecureUrl} [logo]
 * @property {ApplicationMeta} [meta]
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [secret] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationWebsite} [website]
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
 * @typedef ApplicationVersionRequest
 * @property {string} [id]
 * @property {string} name
 * @property {string} [namespace]
 * @property {string} [token]
 * @property {string} version
 */
/**
 * @typedef ApplicationWebsite
 * @property {string} [basepath] - Base path for the current sales channel website
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 */
/**
 * @typedef AppStaff
 * @property {string} [_id] - The unique identifier for the sales channel staff member
 * @property {string} [application] - The unique identifier (24-digit Mongo
 *   Object ID) of the current sales channel
 * @property {string} [employee_code] - Employee code of sales channel staff
 *   member. It has unique value.
 * @property {string} [first_name] - First name the staff member
 * @property {string} [last_name] - Last name the staff member
 * @property {boolean} [order_incent] - This is a boolean value. `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {string} [profile_pic_url] - Profile image hosted url of the staff member
 * @property {number[]} [stores]
 * @property {string} [title] - Tittle for the staff member like owner, staff.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 */
/**
 * @typedef AppStaffListResponse
 * @property {AppStaff[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppStaffResponse
 * @property {AppStaff[]} [staff_users]
 */
/**
 * @typedef AppTokenResponse
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
 * @typedef AppVersionRequest
 * @property {ApplicationVersionRequest} application
 * @property {Device} device
 * @property {string} [locale]
 * @property {string} [timezone]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef BlogLink
 * @property {string} [icon] - Hosted URL of icon image shown on the website
 * @property {string} [link] - Web URL of brand's blog page
 * @property {string} [title] - Name of the brand's blog page
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
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility] - Shows whether WhatsApp communication is enabled
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
 * @typedef CompanyInfo
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of company information
 * @property {CompanyAboutAddress[]} [addresses]
 * @property {string} [created_on] - ISO 8601 timestamp of company information creation
 * @property {boolean} [is_active] - Indicates company is active or not active
 * @property {string} [name] - Name of the company, Reliance Retail Limited
 * @property {string[]} [notification_emails]
 * @property {number} [uid] - Company UID
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled] - Shows whether product comparison feature is
 *   enabled on PDP
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
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled] - Shows whether selection of store (for
 *   deploying the application) is permitted
 * @property {string} [type] - Permitted values are 'hard' and 'soft'. For hard
 *   type delivery, store selection is compulsory. For soft type, delivery store
 *   selection is optional.
 */
/**
 * @typedef Device
 * @property {number} [build]
 * @property {string} [model]
 * @property {OS} os
 */
/**
 * @typedef Domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel domain
 * @property {boolean} [is_predefined] - Domain is hosting domain or not.
 * @property {boolean} [is_primary] - Domain is primary or not. Primary domain
 *   is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [name]
 * @property {boolean} [verified] - Domain is verified or not. TXT and A records
 *   should propagate correctly.
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
 * @typedef InvalidPayloadRequest
 * @property {string} [message] - Error message when request body payload is improper
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment] - Allow post order reassigment of article
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef InventoryBrandRule
 * @property {number[]} [brands]
 * @property {string} [criteria] - Whether all brands are enabled, or explicitly
 *   few brands in the inventory
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment] - Mode of payment for the inventory of
 *   sales channel. It is required and default value is null.
 * @property {string} [source] - Source of the payment mode for the inventory
 *   payment of sales channel. Default value is FYND.
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
 * @typedef Ios
 * @property {string} [api_key] - Firebase secret credential API key for IOS
 * @property {string} [application_id] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
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
 * @typedef LanguageResponse
 * @property {SupportedLanguage[]} [items]
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
 * @typedef OS
 * @property {string} name
 * @property {string} [version]
 */
/**
 * @typedef OwnerInfo
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of owner info
 * @property {UserEmail[]} [emails]
 * @property {string} [first_name] - First name of the owner
 * @property {string} [last_name] - Last name of the owner
 * @property {UserPhoneNumber[]} [phone_numbers]
 * @property {string} [profile_pic] - Hosted URL of profile pic
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
 * @typedef StorePriorityRule
 * @property {boolean} [enabled] - Shows store priority is enabled or not
 *   enabled for the article assignment.
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message] - Success message shown to the user (in a string format)
 */
/**
 * @typedef SupportedLanguage
 * @property {string} [code] - Unique code of supported language, e.g. hi-IN
 * @property {string} [name] - Name of the supported language, e.g. हिन्दी
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
 * @typedef UpdateDialog
 * @property {number} [interval]
 * @property {string} [type]
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
declare class ConfigurationApplicationModel {
}
declare namespace ConfigurationApplicationModel {
    export { Android, AppCurrencyResponse, AppFeature, AppFeatureRequest, AppFeatureResponse, Application, ApplicationAboutResponse, ApplicationAuth, ApplicationCors, ApplicationDetail, ApplicationInfo, ApplicationInformation, ApplicationMeta, ApplicationRedirections, ApplicationVersionRequest, ApplicationWebsite, AppStaff, AppStaffListResponse, AppStaffResponse, AppTokenResponse, AppVersionRequest, ArticleAssignmentRule, BlogLink, BusinessHighlights, CartFeature, CommonFeature, CommunicationOptinDialogFeature, CompanyAboutAddress, CompanyInfo, CompareProductsFeature, Credentials, Credit, CurrenciesResponse, Currency, CurrencyFeature, Debit, DefaultCurrency, DeploymentStoreSelectionFeature, Device, Domain, FacebookLink, FeedbackFeature, Firebase, Freshchat, FreshchatCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, GooglePlusLink, Gtm, GtmCredentials, HomePageFeature, InformationAddress, InformationPhone, InformationSupport, InstagramLink, InvalidPayloadRequest, InventoryArticleAssignment, InventoryBrandRule, InventoryPaymentConfig, InventoryStoreRule, Ios, LandingPageFeature, LanguageResponse, LaunchPage, LinkedInLink, Links, ListingPriceFeature, Moengage, MoengageCredentials, NotFound, OptedStoreAddress, OrderFeature, OrderingStore, OrderingStores, OrderingStoreSelect, OrderingStoreSelectRequest, OrderingStoresResponse, OS, OwnerInfo, Page, PcrFeature, PinterestLink, ProductDetailFeature, QrFeature, RegistrationPageFeature, RevenueEngineFeature, RewardPointsConfig, Safetynet, SafetynetCredentials, SecureUrl, Segment, SegmentCredentials, SocialLinks, StoreCriteriaRule, StoreLatLong, StorePriorityRule, SuccessMessageResponse, SupportedLanguage, Tokens, TwitterLink, UnhandledError, UpdateDialog, UserEmail, UserPhoneNumber, VimeoLink, YoutubeLink };
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
/** @returns {ApplicationAboutResponse} */
declare function ApplicationAboutResponse(): ApplicationAboutResponse;
type ApplicationAboutResponse = {
    application_info?: ApplicationInfo;
    company_info?: CompanyInfo;
    owner_info?: OwnerInfo;
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
    banner: SecureUrl;
    /**
     * - It gives a detailed information about the
     * sales channel. It is required.
     */
    description: string;
    domain?: Domain;
    domains?: Domain[];
    favicon: SecureUrl;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    /**
     * - Name of the sales channel. It is required.
     */
    name: string;
    slug?: string;
};
/** @returns {ApplicationInfo} */
declare function ApplicationInfo(): ApplicationInfo;
type ApplicationInfo = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of application information
     */
    _id?: string;
    banner?: SecureUrl;
    cors?: ApplicationCors;
    /**
     * - ISO 8601 timestamp of sales channel
     * information creation
     */
    created_at?: string;
    /**
     * - It contains details information about the
     * sales channel
     */
    description?: string;
    domain?: Domain;
    /**
     * - Indicates whether sales channel is active
     * or not active
     */
    is_active?: boolean;
    logo?: SecureUrl;
    meta?: ApplicationMeta;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    secret?: string;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    website?: ApplicationWebsite;
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
/** @returns {ApplicationVersionRequest} */
declare function ApplicationVersionRequest(): ApplicationVersionRequest;
type ApplicationVersionRequest = {
    id?: string;
    name: string;
    namespace?: string;
    token?: string;
    version: string;
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
/** @returns {AppStaff} */
declare function AppStaff(): AppStaff;
type AppStaff = {
    /**
     * - The unique identifier for the sales channel staff member
     */
    _id?: string;
    /**
     * - The unique identifier (24-digit Mongo
     * Object ID) of the current sales channel
     */
    application?: string;
    /**
     * - Employee code of sales channel staff
     * member. It has unique value.
     */
    employee_code?: string;
    /**
     * - First name the staff member
     */
    first_name?: string;
    /**
     * - Last name the staff member
     */
    last_name?: string;
    /**
     * - This is a boolean value. `true` to
     * retrieve the staff members eligible for getting incentives on orders.
     */
    order_incent?: boolean;
    /**
     * - Profile image hosted url of the staff member
     */
    profile_pic_url?: string;
    stores?: number[];
    /**
     * - Tittle for the staff member like owner, staff.
     */
    title?: string;
    /**
     * - Mongo ID of the staff. Helps in retrieving the
     * details of a particular staff member.
     */
    user?: string;
};
/** @returns {AppStaffListResponse} */
declare function AppStaffListResponse(): AppStaffListResponse;
type AppStaffListResponse = {
    items?: AppStaff[];
    page?: Page;
};
/** @returns {AppStaffResponse} */
declare function AppStaffResponse(): AppStaffResponse;
type AppStaffResponse = {
    staff_users?: AppStaff[];
};
/** @returns {AppTokenResponse} */
declare function AppTokenResponse(): AppTokenResponse;
type AppTokenResponse = {
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
/** @returns {AppVersionRequest} */
declare function AppVersionRequest(): AppVersionRequest;
type AppVersionRequest = {
    application: ApplicationVersionRequest;
    device: Device;
    locale?: string;
    timezone?: string;
};
/** @returns {ArticleAssignmentRule} */
declare function ArticleAssignmentRule(): ArticleAssignmentRule;
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
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
/** @returns {CommunicationOptinDialogFeature} */
declare function CommunicationOptinDialogFeature(): CommunicationOptinDialogFeature;
type CommunicationOptinDialogFeature = {
    /**
     * - Shows whether WhatsApp communication is enabled
     */
    visibility?: boolean;
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
/** @returns {CompanyInfo} */
declare function CompanyInfo(): CompanyInfo;
type CompanyInfo = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of company information
     */
    _id?: string;
    addresses?: CompanyAboutAddress[];
    /**
     * - ISO 8601 timestamp of company information creation
     */
    created_on?: string;
    /**
     * - Indicates company is active or not active
     */
    is_active?: boolean;
    /**
     * - Name of the company, Reliance Retail Limited
     */
    name?: string;
    notification_emails?: string[];
    /**
     * - Company UID
     */
    uid?: number;
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
/** @returns {Device} */
declare function Device(): Device;
type Device = {
    build?: number;
    model?: string;
    os: OS;
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
    name?: string;
    /**
     * - Domain is verified or not. TXT and A records
     * should propagate correctly.
     */
    verified?: boolean;
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
/** @returns {InventoryBrandRule} */
declare function InventoryBrandRule(): InventoryBrandRule;
type InventoryBrandRule = {
    brands?: number[];
    /**
     * - Whether all brands are enabled, or explicitly
     * few brands in the inventory
     */
    criteria?: string;
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
/** @returns {LanguageResponse} */
declare function LanguageResponse(): LanguageResponse;
type LanguageResponse = {
    items?: SupportedLanguage[];
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
/** @returns {OrderingStoreSelect} */
declare function OrderingStoreSelect(): OrderingStoreSelect;
type OrderingStoreSelect = {
    /**
     * - Ordering store unique uid. It is required.
     */
    uid: number;
};
/** @returns {OrderingStoreSelectRequest} */
declare function OrderingStoreSelectRequest(): OrderingStoreSelectRequest;
type OrderingStoreSelectRequest = {
    ordering_store: OrderingStoreSelect;
};
/** @returns {OrderingStoresResponse} */
declare function OrderingStoresResponse(): OrderingStoresResponse;
type OrderingStoresResponse = {
    items?: OrderingStore[];
    page?: Page;
};
/** @returns {OS} */
declare function OS(): OS;
type OS = {
    name: string;
    version?: string;
};
/** @returns {OwnerInfo} */
declare function OwnerInfo(): OwnerInfo;
type OwnerInfo = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner info
     */
    _id?: string;
    emails?: UserEmail[];
    /**
     * - First name of the owner
     */
    first_name?: string;
    /**
     * - Last name of the owner
     */
    last_name?: string;
    phone_numbers?: UserPhoneNumber[];
    /**
     * - Hosted URL of profile pic
     */
    profile_pic?: string;
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
/** @returns {StoreCriteriaRule} */
declare function StoreCriteriaRule(): StoreCriteriaRule;
type StoreCriteriaRule = {
    /**
     * - List of brand UID
     */
    brands?: number[];
    /**
     * - List of company UID
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
/** @returns {SuccessMessageResponse} */
declare function SuccessMessageResponse(): SuccessMessageResponse;
type SuccessMessageResponse = {
    /**
     * - Success message shown to the user (in a string format)
     */
    message?: string;
};
/** @returns {SupportedLanguage} */
declare function SupportedLanguage(): SupportedLanguage;
type SupportedLanguage = {
    /**
     * - Unique code of supported language, e.g. hi-IN
     */
    code?: string;
    /**
     * - Name of the supported language, e.g. हिन्दी
     */
    name?: string;
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
/** @returns {UpdateDialog} */
declare function UpdateDialog(): UpdateDialog;
type UpdateDialog = {
    interval?: number;
    type?: string;
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
