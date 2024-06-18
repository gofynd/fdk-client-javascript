const Joi = require("joi");

/**
 * @typedef ApplicationAboutResponse
 * @property {ApplicationInfo} [application_info]
 */

/**
 * @typedef ApplicationInfo
 * @property {CompanyInfo} [company_info]
 * @property {OwnerInfo} [owner_info]
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of application information
 * @property {Domain} [domain]
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {string} [description] - It contains details information about the
 *   sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {string} [secret] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel
 *   information creation
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {boolean} [is_active] - Indicates whether sales channel is active
 *   or not active
 * @property {string} [mode]
 * @property {TokenSchema[]} [tokens]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} [slug]
 */

/**
 * @typedef CompanyInfo
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of company information
 * @property {number} [uid] - Company UID
 * @property {string} [created_on] - ISO 8601 timestamp of company information creation
 * @property {boolean} [is_active] - Indicates company is active or not active
 * @property {string} [name] - Name of the company, Reliance Retail Limited
 * @property {CompanyAboutAddress[]} [addresses]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef OwnerInfo
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of owner info
 * @property {UserEmail[]} [emails]
 * @property {UserPhoneNumber[]} [phone_numbers]
 * @property {string} [first_name] - First name of the owner
 * @property {string} [last_name] - Last name of the owner
 * @property {string} [profile_pic] - Hosted URL of profile pic
 */

/**
 * @typedef SupportedLanguage
 * @property {string} [name] - Name of the supported language, e.g. हिन्दी
 * @property {string} [code] - Unique code of supported language, e.g. hi-IN
 */

/**
 * @typedef LanguageResponse
 * @property {SupportedLanguage[]} [items]
 */

/**
 * @typedef AppStaffResponse
 * @property {AppStaff[]} [staff_users]
 */

/**
 * @typedef AppStaffListResponse
 * @property {Page} [page]
 * @property {AppStaff[]} [items]
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
 * @typedef AppStaff
 * @property {string} [_id] - The unique identifier for the sales channel staff member
 * @property {boolean} [order_incent] - This is a boolean value. `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {number[]} [stores]
 * @property {string} [application] - The unique identifier (24-digit Mongo
 *   Object ID) of the current sales channel
 * @property {string} [title] - Tittle for the staff member like owner, staff.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 * @property {string} [employee_code] - Employee code of sales channel staff
 *   member. It has unique value.
 * @property {string} [first_name] - First name the staff member
 * @property {string} [last_name] - Last name the staff member
 * @property {string} [profile_pic_url] - Profile image hosted url of the staff member
 */

/**
 * @typedef AppTokenResponse
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
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 * @property {ListingPageFeature} [listing_page]
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
 * @typedef ListingPageFeature
 * @property {string} [sort_on]
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
 * @typedef Domain
 * @property {boolean} [verified] - Domain is verified or not. TXT and A records
 *   should propagate correctly.
 * @property {boolean} [is_primary] - Domain is primary or not. Primary domain
 *   is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel domain
 * @property {string} [name]
 * @property {boolean} [is_predefined] - Domain is hosting domain or not.
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
 */

/**
 * @typedef TokenSchema
 * @property {string} [token]
 * @property {Object} [created_by]
 * @property {string} [created_at] - ISO 8601 timestamp of when token created
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found
 */

/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message] - Error message when request body payload is improper
 */

/**
 * @typedef UnhandledError
 * @property {string} [message]
 */

/**
 * @typedef SuccessMessageResponse
 * @property {string} [message] - Success message shown to the user (in a string format)
 */

/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode] - 6-digit PIN code of the city, e.g. 400001
 * @property {string} [address1] - Primary address line of the company
 * @property {string} [address2] - Secondary address line of the company
 * @property {string} [city] - City name, e.g. Mumbai
 * @property {string} [state] - State name, e.g. Maharashtra
 * @property {string} [country] - Country name, e.g. India
 * @property {string} [address_type] - Indicates different office types like
 *   office, registered, and home.
 */

/**
 * @typedef UserEmail
 * @property {boolean} [active] - Current email is active or not active
 * @property {boolean} [primary] - Indicates current email is primay email or
 *   not primary email of user
 * @property {boolean} [verified] - Indicates current email is verified email or
 *   not verified email
 * @property {string} [email] - Email address of the user
 */

/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active] - Current phone number is active or not active
 * @property {boolean} [primary] - Indicates current phone number is primay or
 *   not primary of user
 * @property {boolean} [verified] - Indicates current phone number is verified
 *   or not verified
 * @property {number} [country_code] - Country code, e.g. +91
 * @property {string} [phone] - Phone number of the user
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
 * @typedef DefaultCurrency
 * @property {string} [ref] - The unique identifier (24-digit Mongo Object ID)
 *   of the default currency
 * @property {string} [code] - 3-character code of the default currency, e.g.
 *   INR, EUR, USD
 */

/**
 * @typedef AppCurrencyResponse
 * @property {string} [application] - Alphanumeric ID allotted to an application
 *   (sales channel website) created within a business account
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
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

class ConfigurationApplicationModel {
  /** @returns {ApplicationAboutResponse} */
  static ApplicationAboutResponse() {
    return Joi.object({
      application_info: ConfigurationApplicationModel.ApplicationInfo(),
    });
  }

  /** @returns {ApplicationInfo} */
  static ApplicationInfo() {
    return Joi.object({
      company_info: ConfigurationApplicationModel.CompanyInfo(),
      owner_info: ConfigurationApplicationModel.OwnerInfo(),
      _id: Joi.string().allow(""),
      domain: ConfigurationApplicationModel.Domain(),
      website: ConfigurationApplicationModel.ApplicationWebsite(),
      cors: ConfigurationApplicationModel.ApplicationCors(),
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationApplicationModel.ApplicationMeta()),
      token: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      banner: ConfigurationApplicationModel.SecureUrl(),
      logo: ConfigurationApplicationModel.SecureUrl(),
      is_active: Joi.boolean(),
      mode: Joi.string().allow(""),
      tokens: Joi.array().items(ConfigurationApplicationModel.TokenSchema()),
      domains: Joi.array().items(ConfigurationApplicationModel.Domain()),
      favicon: ConfigurationApplicationModel.SecureUrl(),
      mobile_logo: ConfigurationApplicationModel.SecureUrl(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyInfo} */
  static CompanyInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      uid: Joi.number(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      addresses: Joi.array().items(
        ConfigurationApplicationModel.CompanyAboutAddress()
      ),
      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {OwnerInfo} */
  static OwnerInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      emails: Joi.array().items(ConfigurationApplicationModel.UserEmail()),
      phone_numbers: Joi.array().items(
        ConfigurationApplicationModel.UserPhoneNumber()
      ),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      profile_pic: Joi.string().allow(""),
    });
  }

  /** @returns {SupportedLanguage} */
  static SupportedLanguage() {
    return Joi.object({
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
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

  /** @returns {AppStaffResponse} */
  static AppStaffResponse() {
    return Joi.object({
      staff_users: Joi.array().items(ConfigurationApplicationModel.AppStaff()),
    });
  }

  /** @returns {AppStaffListResponse} */
  static AppStaffListResponse() {
    return Joi.object({
      page: ConfigurationApplicationModel.Page(),
      items: Joi.array().items(ConfigurationApplicationModel.AppStaff()),
    });
  }

  /** @returns {OrderingStoreSelectRequest} */
  static OrderingStoreSelectRequest() {
    return Joi.object({
      ordering_store: ConfigurationApplicationModel.OrderingStoreSelect().required(),
    });
  }

  /** @returns {OrderingStoreSelect} */
  static OrderingStoreSelect() {
    return Joi.object({
      uid: Joi.number().required(),
    });
  }

  /** @returns {AppStaff} */
  static AppStaff() {
    return Joi.object({
      _id: Joi.string().allow(""),
      order_incent: Joi.boolean(),
      stores: Joi.array().items(Joi.number()),
      application: Joi.string().allow(""),
      title: Joi.string().allow(""),
      user: Joi.string().allow(""),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      profile_pic_url: Joi.string().allow(""),
    });
  }

  /** @returns {AppTokenResponse} */
  static AppTokenResponse() {
    return Joi.object({
      tokens: ConfigurationApplicationModel.Tokens(),
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
      firebase: ConfigurationApplicationModel.Firebase(),
      moengage: ConfigurationApplicationModel.Moengage(),
      segment: ConfigurationApplicationModel.Segment(),
      gtm: ConfigurationApplicationModel.Gtm(),
      freshchat: ConfigurationApplicationModel.Freshchat(),
      safetynet: ConfigurationApplicationModel.Safetynet(),
      fynd_rewards: ConfigurationApplicationModel.FyndRewards(),
      google_map: ConfigurationApplicationModel.GoogleMap(),
    });
  }

  /** @returns {Firebase} */
  static Firebase() {
    return Joi.object({
      credentials: ConfigurationApplicationModel.Credentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Credentials} */
  static Credentials() {
    return Joi.object({
      ios: ConfigurationApplicationModel.Ios(),
      android: ConfigurationApplicationModel.Android(),
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

  /** @returns {RewardPointsConfig} */
  static RewardPointsConfig() {
    return Joi.object({
      credit: ConfigurationApplicationModel.Credit(),
      debit: ConfigurationApplicationModel.Debit(),
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
      params: Joi.any(),
      query: Joi.any(),
    });
  }

  /** @returns {LandingPageFeature} */
  static LandingPageFeature() {
    return Joi.object({
      launch_page: ConfigurationApplicationModel.LaunchPage(),
      continue_as_guest: Joi.boolean(),
      login_btn_text: Joi.string().allow(""),
      show_domain_textbox: Joi.boolean(),
      show_register_btn: Joi.boolean(),
    });
  }

  /** @returns {RegistrationPageFeature} */
  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  /** @returns {AppFeature} */
  static AppFeature() {
    return Joi.object({
      product_detail: ConfigurationApplicationModel.ProductDetailFeature(),
      landing_page: ConfigurationApplicationModel.LandingPageFeature(),
      registration_page: ConfigurationApplicationModel.RegistrationPageFeature(),
      home_page: ConfigurationApplicationModel.HomePageFeature(),
      common: ConfigurationApplicationModel.CommonFeature(),
      cart: ConfigurationApplicationModel.CartFeature(),
      qr: ConfigurationApplicationModel.QrFeature(),
      pcr: ConfigurationApplicationModel.PcrFeature(),
      order: ConfigurationApplicationModel.OrderFeature(),
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
      communication_optin_dialog: ConfigurationApplicationModel.CommunicationOptinDialogFeature(),
      deployment_store_selection: ConfigurationApplicationModel.DeploymentStoreSelectionFeature(),
      listing_price: ConfigurationApplicationModel.ListingPriceFeature(),
      currency: ConfigurationApplicationModel.CurrencyFeature(),
      revenue_engine: ConfigurationApplicationModel.RevenueEngineFeature(),
      feedback: ConfigurationApplicationModel.FeedbackFeature(),
      compare_products: ConfigurationApplicationModel.CompareProductsFeature(),
      reward_points: ConfigurationApplicationModel.RewardPointsConfig(),
      listing_page: ConfigurationApplicationModel.ListingPageFeature(),
      international_shipping: ConfigurationApplicationModel.InternationalShipping(),
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

  /** @returns {ListingPageFeature} */
  static ListingPageFeature() {
    return Joi.object({
      sort_on: Joi.string().allow(""),
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

  /** @returns {AppFeatureResponse} */
  static AppFeatureResponse() {
    return Joi.object({
      feature: ConfigurationApplicationModel.AppFeature(),
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

  /** @returns {Domain} */
  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      is_predefined: Joi.boolean(),
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
      website: ConfigurationApplicationModel.ApplicationWebsite(),
      cors: ConfigurationApplicationModel.ApplicationCors(),
      auth: ConfigurationApplicationModel.ApplicationAuth(),
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
        ConfigurationApplicationModel.ApplicationRedirections()
      ),
      meta: Joi.array().items(ConfigurationApplicationModel.ApplicationMeta()),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      banner: ConfigurationApplicationModel.SecureUrl(),
      logo: ConfigurationApplicationModel.SecureUrl(),
      favicon: ConfigurationApplicationModel.SecureUrl(),
      domains: Joi.array().items(ConfigurationApplicationModel.Domain()),
      app_type: Joi.string().allow(""),
      mobile_logo: ConfigurationApplicationModel.SecureUrl(),
      domain: ConfigurationApplicationModel.Domain(),
      slug: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      tokens: Joi.array().items(ConfigurationApplicationModel.TokenSchema()),
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

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidPayloadRequest} */
  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {UnhandledError} */
  static UnhandledError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SuccessMessageResponse} */
  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyAboutAddress} */
  static CompanyAboutAddress() {
    return Joi.object({
      pincode: Joi.number(),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
    });
  }

  /** @returns {UserEmail} */
  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {UserPhoneNumber} */
  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
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
    });
  }

  /** @returns {ApplicationInformation} */
  static ApplicationInformation() {
    return Joi.object({
      address: ConfigurationApplicationModel.InformationAddress(),
      support: ConfigurationApplicationModel.InformationSupport(),
      social_links: ConfigurationApplicationModel.SocialLinks(),
      links: Joi.array().items(ConfigurationApplicationModel.Links()),
      copyright_text: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      business_highlights: Joi.array().items(
        ConfigurationApplicationModel.BusinessHighlights()
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
      loc: ConfigurationApplicationModel.InformationLoc(),
      address_line: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(
        ConfigurationApplicationModel.InformationPhone()
      ),
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
        ConfigurationApplicationModel.InformationSupportPhone()
      ),
      email: Joi.array().items(
        ConfigurationApplicationModel.InformationSupportEmail()
      ),
      timing: Joi.string().allow(""),
    });
  }

  /** @returns {SocialLinks} */
  static SocialLinks() {
    return Joi.object({
      facebook: ConfigurationApplicationModel.FacebookLink(),
      instagram: ConfigurationApplicationModel.InstagramLink(),
      twitter: ConfigurationApplicationModel.TwitterLink(),
      pinterest: ConfigurationApplicationModel.PinterestLink(),
      google_plus: ConfigurationApplicationModel.GooglePlusLink(),
      youtube: ConfigurationApplicationModel.YoutubeLink(),
      linked_in: ConfigurationApplicationModel.LinkedInLink(),
      vimeo: ConfigurationApplicationModel.VimeoLink(),
      blog_link: ConfigurationApplicationModel.BlogLink(),
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
      logo: ConfigurationApplicationModel.SecureUrl(),
      mobile_logo: ConfigurationApplicationModel.SecureUrl(),
      favicon: ConfigurationApplicationModel.SecureUrl(),
      banner: ConfigurationApplicationModel.SecureUrl(),
      domain: ConfigurationApplicationModel.Domain(),
      domains: Joi.array().items(ConfigurationApplicationModel.Domain()),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {CurrenciesResponse} */
  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationApplicationModel.Currency()),
    });
  }

  /** @returns {DefaultCurrency} */
  static DefaultCurrency() {
    return Joi.object({
      ref: Joi.string().allow(""),
      code: Joi.string().allow(""),
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
      _id: Joi.string().allow(""),
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
      lat_long: ConfigurationApplicationModel.StoreLatLong(),
      address2: Joi.string().allow(""),
      pincode: Joi.number(),
      country: Joi.string().allow(""),
      city: Joi.string().allow(""),
    });
  }

  /** @returns {OrderingStore} */
  static OrderingStore() {
    return Joi.object({
      address: ConfigurationApplicationModel.OptedStoreAddress(),
      _id: Joi.string().allow(""),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      pincode: Joi.number(),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {OrderingStores} */
  static OrderingStores() {
    return Joi.object({
      page: ConfigurationApplicationModel.Page(),
      items: Joi.array().items(ConfigurationApplicationModel.OrderingStore()),
      deployed_stores: Joi.array().items(Joi.number()),
      all_stores: Joi.boolean(),
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }
}
module.exports = ConfigurationApplicationModel;
