export = ConfigurationApplicationModel;
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
 * @property {BuyboxFeature} [buybox]
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
 * @property {string} [pincode] - 6-digit PIN code of the city, e.g. 400001
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
 * @property {string} [pincode] - 6-digit PIN code of the opted store location
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
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering store
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number} [__v] - Version key for tracking ordering stores. Default
 *   value is zero.
 */
declare class ConfigurationApplicationModel {
}
declare namespace ConfigurationApplicationModel {
    export { ApplicationAboutResponse, ApplicationInfo, CompanyInfo, OwnerInfo, SupportedLanguage, LanguageResponse, AppStaffResponse, AppStaffListResponse, OrderingStoreSelectRequest, OrderingStoreSelect, AppStaff, AppTokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, InternationalShipping, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, BuyboxFeature, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, TokenSchema, NotFound, InvalidPayloadRequest, UnhandledError, SuccessMessageResponse, CompanyAboutAddress, UserEmail, UserPhoneNumber, Page, ApplicationInformation, InformationAddress, InformationPhone, InformationSupportPhone, InformationSupportEmail, InformationLoc, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, DefaultCurrency, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores };
}
/** @returns {ApplicationAboutResponse} */
declare function ApplicationAboutResponse(): ApplicationAboutResponse;
type ApplicationAboutResponse = {
    application_info?: ApplicationInfo;
};
/** @returns {ApplicationInfo} */
declare function ApplicationInfo(): ApplicationInfo;
type ApplicationInfo = {
    company_info?: CompanyInfo;
    owner_info?: OwnerInfo;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of application information
     */
    _id?: string;
    domain?: Domain;
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    /**
     * - It contains details information about the
     * sales channel
     */
    description?: string;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    meta?: ApplicationMeta[];
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    secret?: string;
    /**
     * - ISO 8601 timestamp of sales channel
     * information creation
     */
    created_at?: string;
    banner?: SecureUrl;
    logo?: SecureUrl;
    /**
     * - Indicates whether sales channel is active
     * or not active
     */
    is_active?: boolean;
    mode?: string;
    tokens?: TokenSchema[];
    domains?: Domain[];
    favicon?: SecureUrl;
    mobile_logo?: SecureUrl;
    slug?: string;
};
/** @returns {CompanyInfo} */
declare function CompanyInfo(): CompanyInfo;
type CompanyInfo = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of company information
     */
    _id?: string;
    /**
     * - Company UID
     */
    uid?: number;
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
    addresses?: CompanyAboutAddress[];
    notification_emails?: string[];
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
    phone_numbers?: UserPhoneNumber[];
    /**
     * - First name of the owner
     */
    first_name?: string;
    /**
     * - Last name of the owner
     */
    last_name?: string;
    /**
     * - Hosted URL of profile pic
     */
    profile_pic?: string;
};
/** @returns {SupportedLanguage} */
declare function SupportedLanguage(): SupportedLanguage;
type SupportedLanguage = {
    /**
     * - Name of the supported language, e.g. हिन्दी
     */
    name?: string;
    /**
     * - Unique code of supported language, e.g. hi-IN
     */
    code?: string;
};
/** @returns {LanguageResponse} */
declare function LanguageResponse(): LanguageResponse;
type LanguageResponse = {
    items?: SupportedLanguage[];
};
/** @returns {AppStaffResponse} */
declare function AppStaffResponse(): AppStaffResponse;
type AppStaffResponse = {
    staff_users?: AppStaff[];
};
/** @returns {AppStaffListResponse} */
declare function AppStaffListResponse(): AppStaffListResponse;
type AppStaffListResponse = {
    page?: Page;
    items?: AppStaff[];
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
/** @returns {AppStaff} */
declare function AppStaff(): AppStaff;
type AppStaff = {
    /**
     * - The unique identifier for the sales channel staff member
     */
    _id?: string;
    /**
     * - This is a boolean value. `true` to
     * retrieve the staff members eligible for getting incentives on orders.
     */
    order_incent?: boolean;
    stores?: number[];
    /**
     * - The unique identifier (24-digit Mongo
     * Object ID) of the current sales channel
     */
    application?: string;
    /**
     * - Tittle for the staff member like owner, staff.
     */
    title?: string;
    /**
     * - Mongo ID of the staff. Helps in retrieving the
     * details of a particular staff member.
     */
    user?: string;
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
     * - Profile image hosted url of the staff member
     */
    profile_pic_url?: string;
};
/** @returns {AppTokenResponse} */
declare function AppTokenResponse(): AppTokenResponse;
type AppTokenResponse = {
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
    buybox?: BuyboxFeature;
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
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
    listing_page?: ListingPageFeature;
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
/** @returns {ListingPageFeature} */
declare function ListingPageFeature(): ListingPageFeature;
type ListingPageFeature = {
    sort_on?: string;
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
/** @returns {BuyboxFeature} */
declare function BuyboxFeature(): BuyboxFeature;
type BuyboxFeature = {
    /**
     * - Allow users to see seller/stores name on
     * PDP (product detail page).
     */
    show_name?: boolean;
    /**
     * - Allow selection of sellers/stores on
     * PDP (product detail page).
     */
    enable_selection?: boolean;
    /**
     * - Toggle buybox listing
     * between sellers and stores. True indicates seller listing, while False
     * indicates store listing.
     */
    is_seller_buybox_enabled?: boolean;
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
/** @returns {Domain} */
declare function Domain(): Domain;
type Domain = {
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
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel domain
     */
    _id?: string;
    name?: string;
    /**
     * - Domain is hosting domain or not.
     */
    is_predefined?: boolean;
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
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Response message for not found
     */
    message?: string;
};
/** @returns {InvalidPayloadRequest} */
declare function InvalidPayloadRequest(): InvalidPayloadRequest;
type InvalidPayloadRequest = {
    /**
     * - Error message when request body payload is improper
     */
    message?: string;
};
/** @returns {UnhandledError} */
declare function UnhandledError(): UnhandledError;
type UnhandledError = {
    message?: string;
};
/** @returns {SuccessMessageResponse} */
declare function SuccessMessageResponse(): SuccessMessageResponse;
type SuccessMessageResponse = {
    /**
     * - Success message shown to the user (in a string format)
     */
    message?: string;
};
/** @returns {CompanyAboutAddress} */
declare function CompanyAboutAddress(): CompanyAboutAddress;
type CompanyAboutAddress = {
    /**
     * - 6-digit PIN code of the city, e.g. 400001
     */
    pincode?: string;
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
     * - State name, e.g. Maharashtra
     */
    state?: string;
    /**
     * - Country name, e.g. India
     */
    country?: string;
    /**
     * - Indicates different office types like
     * office, registered, and home.
     */
    address_type?: string;
};
/** @returns {UserEmail} */
declare function UserEmail(): UserEmail;
type UserEmail = {
    /**
     * - Current email is active or not active
     */
    active?: boolean;
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
    /**
     * - Email address of the user
     */
    email?: string;
};
/** @returns {UserPhoneNumber} */
declare function UserPhoneNumber(): UserPhoneNumber;
type UserPhoneNumber = {
    /**
     * - Current phone number is active or not active
     */
    active?: boolean;
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
    /**
     * - Country code, e.g. +91
     */
    country_code?: number;
    /**
     * - Phone number of the user
     */
    phone?: string;
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
    _id?: string;
    created_at?: string;
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
    pincode?: string;
    /**
     * - Country of the opted store, e.g. India
     */
    country?: string;
    /**
     * - City of the opted store, e.g. Mumbai
     */
    city?: string;
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
    pincode?: string;
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
