const Joi = require("joi");

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
 * @property {InformationPhone} [phone]
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
 * @typedef StoreLatLong
 * @property {number[]} [coordinates]
 * @property {string} [type] - Coordinates type of the opted store
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

class ConfigurationApplicationModel {
  /** @returns {Android} */
  static Android() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {AppCurrencyResponse} */
  static AppCurrencyResponse() {
    return Joi.object({
      application: Joi.string().allow(""),
      default_currency: ConfigurationApplicationModel.DefaultCurrency(),
      supported_currency: Joi.array().items(
        ConfigurationApplicationModel.Currency()
      ),
    });
  }

  /** @returns {AppFeature} */
  static AppFeature() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      cart: ConfigurationApplicationModel.CartFeature(),
      common: ConfigurationApplicationModel.CommonFeature(),
      created_at: Joi.string().allow(""),
      home_page: ConfigurationApplicationModel.HomePageFeature(),
      landing_page: ConfigurationApplicationModel.LandingPageFeature(),
      order: ConfigurationApplicationModel.OrderFeature(),
      pcr: ConfigurationApplicationModel.PcrFeature(),
      product_detail: ConfigurationApplicationModel.ProductDetailFeature(),
      qr: ConfigurationApplicationModel.QrFeature(),
      registration_page: ConfigurationApplicationModel.RegistrationPageFeature(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {AppFeatureResponse} */
  static AppFeatureResponse() {
    return Joi.object({
      feature: ConfigurationApplicationModel.AppFeature(),
    });
  }

  /** @returns {Application} */
  static Application() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_type: Joi.string().allow(""),
      auth: ConfigurationApplicationModel.ApplicationAuth(),
      banner: ConfigurationApplicationModel.SecureUrl(),
      cache_ttl: Joi.number(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      cors: ConfigurationApplicationModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: ConfigurationApplicationModel.Domain(),
      domains: Joi.array().items(ConfigurationApplicationModel.Domain()),
      favicon: ConfigurationApplicationModel.SecureUrl(),
      is_active: Joi.boolean(),
      is_internal: Joi.boolean(),
      logo: ConfigurationApplicationModel.SecureUrl(),
      meta: Joi.array().items(ConfigurationApplicationModel.ApplicationMeta()),
      mobile_logo: ConfigurationApplicationModel.SecureUrl(),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      redirections: Joi.array().items(
        ConfigurationApplicationModel.ApplicationRedirections()
      ),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      website: ConfigurationApplicationModel.ApplicationWebsite(),
    });
  }

  /** @returns {ApplicationAboutResponse} */
  static ApplicationAboutResponse() {
    return Joi.object({
      application_info: ConfigurationApplicationModel.ApplicationInfo(),
      company_info: ConfigurationApplicationModel.CompanyInfo(),
      owner_info: ConfigurationApplicationModel.OwnerInfo(),
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
      banner: ConfigurationApplicationModel.SecureUrl(),
      description: Joi.string().allow(""),
      domain: ConfigurationApplicationModel.Domain(),
      domains: Joi.array().items(ConfigurationApplicationModel.Domain()),
      favicon: ConfigurationApplicationModel.SecureUrl(),
      logo: ConfigurationApplicationModel.SecureUrl(),
      mobile_logo: ConfigurationApplicationModel.SecureUrl(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationInfo} */
  static ApplicationInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      banner: ConfigurationApplicationModel.SecureUrl(),
      cors: ConfigurationApplicationModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: ConfigurationApplicationModel.Domain(),
      is_active: Joi.boolean(),
      logo: ConfigurationApplicationModel.SecureUrl(),
      meta: ConfigurationApplicationModel.ApplicationMeta(),
      name: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      token: Joi.string().allow(""),
      website: ConfigurationApplicationModel.ApplicationWebsite(),
    });
  }

  /** @returns {ApplicationInformation} */
  static ApplicationInformation() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      address: ConfigurationApplicationModel.InformationAddress(),
      application: Joi.string().allow(""),
      business_highlights: ConfigurationApplicationModel.BusinessHighlights(),
      copyright_text: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      links: ConfigurationApplicationModel.Links(),
      social_links: ConfigurationApplicationModel.SocialLinks(),
      support: ConfigurationApplicationModel.InformationSupport(),
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

  /** @returns {ApplicationWebsite} */
  static ApplicationWebsite() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {AppStaff} */
  static AppStaff() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      order_incent: Joi.boolean(),
      profile_pic_url: Joi.string().allow(""),
      stores: Joi.array().items(Joi.number()),
      title: Joi.string().allow(""),
      user: Joi.string().allow(""),
    });
  }

  /** @returns {AppStaffListResponse} */
  static AppStaffListResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationApplicationModel.AppStaff()),
      page: ConfigurationApplicationModel.Page(),
    });
  }

  /** @returns {AppStaffResponse} */
  static AppStaffResponse() {
    return Joi.object({
      staff_users: Joi.array().items(ConfigurationApplicationModel.AppStaff()),
    });
  }

  /** @returns {AppTokenResponse} */
  static AppTokenResponse() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      tokens: ConfigurationApplicationModel.Tokens(),
      updated_at: Joi.string().allow(""),
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

  /** @returns {BusinessHighlights} */
  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      sub_title: Joi.string().allow(""),
      title: Joi.string().allow(""),
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

  /** @returns {CommonFeature} */
  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: ConfigurationApplicationModel.CommunicationOptinDialogFeature(),
      compare_products: ConfigurationApplicationModel.CompareProductsFeature(),
      currency: ConfigurationApplicationModel.CurrencyFeature(),
      deployment_store_selection: ConfigurationApplicationModel.DeploymentStoreSelectionFeature(),
      feedback: ConfigurationApplicationModel.FeedbackFeature(),
      listing_price: ConfigurationApplicationModel.ListingPriceFeature(),
      revenue_engine: ConfigurationApplicationModel.RevenueEngineFeature(),
      reward_points: ConfigurationApplicationModel.RewardPointsConfig(),
    });
  }

  /** @returns {CommunicationOptinDialogFeature} */
  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  /** @returns {CompanyAboutAddress} */
  static CompanyAboutAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyInfo} */
  static CompanyInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addresses: Joi.array().items(
        ConfigurationApplicationModel.CompanyAboutAddress()
      ),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }

  /** @returns {CompareProductsFeature} */
  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Credentials} */
  static Credentials() {
    return Joi.object({
      android: ConfigurationApplicationModel.Android(),
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      gcm_sender_id: Joi.string().allow(""),
      ios: ConfigurationApplicationModel.Ios(),
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
      items: Joi.array().items(ConfigurationApplicationModel.Currency()),
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

  /** @returns {Firebase} */
  static Firebase() {
    return Joi.object({
      credentials: ConfigurationApplicationModel.Credentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Freshchat} */
  static Freshchat() {
    return Joi.object({
      credentials: ConfigurationApplicationModel.FreshchatCredentials(),
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
      credentials: ConfigurationApplicationModel.FyndRewardsCredentials(),
    });
  }

  /** @returns {FyndRewardsCredentials} */
  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string().allow(""),
    });
  }

  /** @returns {GoogleMap} */
  static GoogleMap() {
    return Joi.object({
      credentials: ConfigurationApplicationModel.GoogleMapCredentials(),
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
      credentials: ConfigurationApplicationModel.GtmCredentials(),
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
      phone: ConfigurationApplicationModel.InformationPhone(),
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

  /** @returns {Ios} */
  static Ios() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {LandingPageFeature} */
  static LandingPageFeature() {
    return Joi.object({
      continue_as_guest: Joi.boolean(),
      launch_page: ConfigurationApplicationModel.LaunchPage(),
      login_btn_text: Joi.string().allow(""),
      show_domain_textbox: Joi.boolean(),
      show_register_btn: Joi.boolean(),
    });
  }

  /** @returns {LanguageResponse} */
  static LanguageResponse() {
    return Joi.object({
      items: Joi.array().items(
        ConfigurationApplicationModel.SupportedLanguage()
      ),
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

  /** @returns {Moengage} */
  static Moengage() {
    return Joi.object({
      credentials: ConfigurationApplicationModel.MoengageCredentials(),
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

  /** @returns {OptedStoreAddress} */
  static OptedStoreAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      lat_long: ConfigurationApplicationModel.StoreLatLong(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
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
      address: ConfigurationApplicationModel.OptedStoreAddress(),
      code: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pincode: Joi.number(),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
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
      items: Joi.array().items(ConfigurationApplicationModel.OrderingStore()),
      page: ConfigurationApplicationModel.Page(),
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
      ordering_store: ConfigurationApplicationModel.OrderingStoreSelect().required(),
    });
  }

  /** @returns {OwnerInfo} */
  static OwnerInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      emails: Joi.array().items(ConfigurationApplicationModel.UserEmail()),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(
        ConfigurationApplicationModel.UserPhoneNumber()
      ),
      profile_pic: Joi.string().allow(""),
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
      credit: ConfigurationApplicationModel.Credit(),
      debit: ConfigurationApplicationModel.Debit(),
    });
  }

  /** @returns {Safetynet} */
  static Safetynet() {
    return Joi.object({
      credentials: ConfigurationApplicationModel.SafetynetCredentials(),
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
      credentials: ConfigurationApplicationModel.SegmentCredentials(),
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
      blog_link: ConfigurationApplicationModel.BlogLink(),
      facebook: ConfigurationApplicationModel.FacebookLink(),
      google_plus: ConfigurationApplicationModel.GooglePlusLink(),
      instagram: ConfigurationApplicationModel.InstagramLink(),
      linked_in: ConfigurationApplicationModel.LinkedInLink(),
      pinterest: ConfigurationApplicationModel.PinterestLink(),
      twitter: ConfigurationApplicationModel.TwitterLink(),
      vimeo: ConfigurationApplicationModel.VimeoLink(),
      youtube: ConfigurationApplicationModel.YoutubeLink(),
    });
  }

  /** @returns {StoreLatLong} */
  static StoreLatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {SuccessMessageResponse} */
  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SupportedLanguage} */
  static SupportedLanguage() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Tokens} */
  static Tokens() {
    return Joi.object({
      firebase: ConfigurationApplicationModel.Firebase(),
      freshchat: ConfigurationApplicationModel.Freshchat(),
      fynd_rewards: ConfigurationApplicationModel.FyndRewards(),
      google_map: ConfigurationApplicationModel.GoogleMap(),
      gtm: ConfigurationApplicationModel.Gtm(),
      moengage: ConfigurationApplicationModel.Moengage(),
      safetynet: ConfigurationApplicationModel.Safetynet(),
      segment: ConfigurationApplicationModel.Segment(),
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

  /** @returns {UnhandledError} */
  static UnhandledError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {UserEmail} */
  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }

  /** @returns {UserPhoneNumber} */
  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
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
module.exports = ConfigurationApplicationModel;
