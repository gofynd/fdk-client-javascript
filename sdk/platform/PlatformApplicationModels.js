const APIClient = require("./PlatformAPIClient");

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */

/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */

/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [gRecaptchaResponse]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */

/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */

/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */

/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */

/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */

/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */

/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */

/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { Meta } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef Meta
        
        
        @property { boolean } [fyndDefault]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */

/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */

/**
        @typedef Email
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef Mobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { PhoneNumbers } [phoneNumbers]
        
        @property { Emails } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef PhoneNumbers
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */

/**
        @typedef Emails
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { string } appId
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { Array<string> } excludedFields
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } secret
        
        @property { string } configType
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { string } appId
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { string } [cardIsin]
        
        @property { string } [fyndVpa]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { string } [cardNumber]
        
        @property { string } [code]
        
        @property { string } [intentFlow]
        
        @property { boolean } [expired]
        
        @property { string } [merchantCode]
        
        @property { string } [nickname]
        
        @property { string } [cardName]
        
        @property { string } aggregatorName
        
        @property { string } [name]
        
        @property { number } [displayPriority]
        
        @property { number } [timeout]
        
        @property { string } [cardToken]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardReference]
        
        @property { number } [expMonth]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
        @property { number } [expYear]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [displayName]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [addCardEnabled]
        
        @property { string } [aggregatorName]
        
        @property { string } name
        
        @property { number } displayPriority
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { boolean } [anonymousEnable]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { Object } uniqueTransferNo
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } customers
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { Object } moreAttributes
        
        @property { string } transferType
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { Object } bankDetails
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { string } transferType
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { Object } bankDetails
        
        @property { boolean } created
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { string } paymentStatus
        
        @property { boolean } success
        
        @property { string } transferType
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
        @property { boolean } success
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isDefault
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { string } sortOn
        
        @property { Object } query
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { string } [appId]
        
        @property { SearchKeywordResult } result
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { string } [appId]
        
        @property { Object } [result]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef Page
        
        
        @property { boolean } [hasPrevious]
        
        @property { number } [current]
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { string } type
        
        @property { Object } query
        
        @property { Object } [params]
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [appId]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { number } maxQuantity
        
        @property { boolean } [autoSelect]
        
        @property { number } minQuantity
        
        @property { boolean } [allowRemove]
        
        @property { number } productUid
        
        @property { boolean } [autoAddToCart]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } slug
        
        @property { string } [createdOn]
        
        @property { string } choice
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [id]
        
        @property { string } slug
        
        @property { string } [createdOn]
        
        @property { string } choice
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [minMarked]
        
        @property { number } [maxEffective]
        
        @property { string } [currency]
        
        @property { number } [minEffective]
        
        @property { number } [maxMarked]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { Array<string> } [sizes]
        
        @property { Object } [price]
        
        @property { Object } [attributes]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [shortDescription]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [images]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { number } [quantity]
        
        @property { Object } [identifier]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { Array<Size> } [sizes]
        
        @property { Price } [price]
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
        @property { boolean } [autoSelect]
        
        @property { number } [productUid]
        
        @property { boolean } [autoAddToCart]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { number } [companyId]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [choice]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [tag]
        
        @property { Guide } [guide]
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { string } [image]
        
        @property { boolean } [active]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { string } [tag]
        
        @property { Object } [guide]
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [active]
        
        @property { string } [title]
        
        @property { Object } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { Object } [createdBy]
        
        @property { string } [name]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
         
    */

/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */

/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { Array<Object> } [units]
        
        @property { string } [key]
        
        @property { Array<string> } [filterTypes]
        
         
    */

/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
        @property { Object } [detail]
        
        @property { Object } [similar]
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { string } defaultKey
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [sort]
        
        @property { Object } [map]
        
        @property { string } [value]
        
        @property { string } [condition]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { number } priority
        
        @property { string } type
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
        @property { boolean } allowSingle
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { ProductSize } size
        
        @property { string } displayType
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [title]
        
        @property { string } [logo]
        
        @property { ProductSize } [size]
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { string } appId
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } appId
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } appId
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [configId]
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { string } [kind]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selectedMin]
        
        @property { string } [queryFormat]
        
        @property { number } [selectedMax]
        
        @property { number } [max]
        
        @property { string } display
        
        @property { string } [currencyCode]
        
        @property { number } [count]
        
        @property { boolean } isSelected
        
        @property { number } [min]
        
        @property { string } [displayFormat]
        
        @property { string } value
        
        @property { string } [currencySymbol]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } aspectRatio
        
        @property { string } url
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { string } type
        
        @property { Schedule } [schedule]
        
        @property { CollectionBanner } banners
        
        @property { Object } [localeLanguage]
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
        @property { SeoDetail } [seo]
        
        @property { Array<string> } [tags]
        
        @property { CollectionBadge } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { string } [description]
        
        @property { UserInfo } [modifiedBy]
        
        @property { UserInfo } [createdBy]
        
        @property { boolean } [allowSort]
        
        @property { boolean } [published]
        
        @property { string } name
        
        @property { string } [sortOn]
        
        @property { Object } [meta]
        
        @property { CollectionImage } logo
        
        @property { boolean } [allowFacets]
        
        @property { string } slug
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { string } [type]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { BannerImage } [logo]
        
        @property { Object } [meta]
        
        @property { string } [name]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Media1
        
        
        @property { string } url
        
        @property { string } [type]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { Array<string> } [tag]
        
        @property { string } [type]
        
        @property { Object } [schedule]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { boolean } [allowSort]
        
        @property { string } [uid]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { boolean } [allowFacets]
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { string } [type]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { Media1 } [logo]
        
        @property { Object } [meta]
        
        @property { string } [name]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageSize
        
        @property { number } pageNo
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef Price1
        
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { Array<string> } [highlights]
        
        @property { string } [type]
        
        @property { Object } [promoMeta]
        
        @property { string } [discount]
        
        @property { Object } [teaserTag]
        
        @property { number } [ratingCount]
        
        @property { Object } [attributes]
        
        @property { string } [shortDescription]
        
        @property { string } [description]
        
        @property { Array<string> } [similars]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { boolean } [hasVariant]
        
        @property { number } [rating]
        
        @property { string } [itemType]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [name]
        
        @property { boolean } [sellable]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [color]
        
        @property { string } [imageNature]
        
        @property { string } [productOnlineDate]
        
        @property { string } slug
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [outOfStockCount]
        
        @property { number } [sellableCount]
        
        @property { number } [count]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [totalArticles]
        
        @property { number } [availableSizes]
        
        @property { number } [availableArticles]
        
        @property { string } [name]
        
        @property { number } [articleFreshness]
        
        @property { number } [totalSizes]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */

/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { boolean } [enabled]
        
        @property { string } optLevel
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { number } createdOn
        
        @property { Array<number> } storeIds
        
        @property { string } optLevel
        
        @property { number } modifiedOn
        
        @property { string } platform
        
        @property { boolean } enabled
        
        @property { number } companyId
        
        @property { Object } [modifiedBy]
        
        @property { Object } [createdBy]
        
        @property { Array<number> } brandIds
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [businessType]
        
        @property { string } [companyType]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { number } [totalArticle]
        
        @property { string } [brandName]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { number } [store]
        
        @property { string } [company]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { string } [modifiedOn]
        
        @property { string } [displayName]
        
        @property { Object } [timing]
        
        @property { string } [storeCode]
        
        @property { string } [storeType]
        
        @property { Array<Object> } [documents]
        
        @property { number } [companyId]
        
        @property { string } [name]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */

/**
        @typedef BasePage
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
         
    */

/**
        @typedef MultipleCommon
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { BasePage } [page]
        
        @property { MultipleCommon } [items]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef BasePage1
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { string } [nextPageId]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { number } [priorityOrder]
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { string } [itemType]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [slug]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } [tag]
        
        @property { Array<string> } [departments]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } [isArchived]
        
        @property { string } [modifiedOn]
        
        @property { boolean } isPhysical
        
        @property { string } [description]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { string } [name]
        
        @property { Array<string> } [categories]
        
        @property { Object } [createdBy]
        
        @property { string } slug
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef TemplatesResponse
        
        
        @property { BasePage } [page]
        
        @property { ProductTemplate } [items]
        
         
    */

/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef InventoryValidationResponse
        
        
        @property { string } [message]
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef HSNData
        
        
        @property { Array<string> } [countryOfOrigin]
        
        @property { Array<string> } [hsnCode]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */

/**
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } portrait
        
        @property { string } landscape
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } l1
        
        @property { number } department
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { Media2 } [media]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { string } [slug]
        
        @property { number } level
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Category
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
        @property { boolean } isActive
        
        @property { string } [modifiedOn]
        
        @property { string } [id]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { Media2 } [media]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { string } [slug]
        
        @property { string } [createdOn]
        
        @property { number } level
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { boolean } [isCustomOrder]
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { number } [time]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<string> } [highlights]
        
        @property { string } currency
        
        @property { number } companyId
        
        @property { string } [traderType]
        
        @property { number } brandUid
        
        @property { TeaserTag } [teaserTag]
        
        @property { Array<Media1> } [media]
        
        @property { string } categorySlug
        
        @property { boolean } [isActive]
        
        @property { CustomOrder } [customOrder]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [description]
        
        @property { string } itemCode
        
        @property { string } [shortDescription]
        
        @property { ProductPublish } [productPublish]
        
        @property { string } [changeRequestId]
        
        @property { Trader } [trader]
        
        @property { number } [uid]
        
        @property { string } itemType
        
        @property { Array<number> } departments
        
        @property { string } countryOfOrigin
        
        @property { string } [requester]
        
        @property { boolean } [isSet]
        
        @property { string } name
        
        @property { OrderQuantity } [moq]
        
        @property { boolean } [multiSize]
        
        @property { Array<string> } [productGroupTag]
        
        @property { Object } [variants]
        
        @property { boolean } [isDependent]
        
        @property { string } [sizeGuide]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { number } [noOfBoxes]
        
        @property { string } hsnCode
        
        @property { string } templateTag
        
        @property { string } slug
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef PageData
        
        
        @property { boolean } [hasPrevious]
        
        @property { string } [current]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { number } [size]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [metaNature]
        
        @property { string } [primaryMaterial]
        
        @property { string } [productFit]
        
        @property { string } [sleeveLength]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [pattern]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [stage]
        
        @property { UserCommon } [createdBy]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [verifiedOn]
        
        @property { string } [essential]
        
        @property { string } [createdOn]
        
        @property { string } [primaryColor]
        
        @property { string } [neckType]
        
        @property { Array<string> } [gender]
        
        @property { string } [color]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [material]
        
        @property { string } [imageNature]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
        @property { number } [aspectRatioF]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [highlights]
        
        @property { string } [currency]
        
        @property { number } [companyId]
        
        @property { Array<string> } [media]
        
        @property { string } [categorySlug]
        
        @property { Array<string> } [allSizes]
        
        @property { boolean } [isActive]
        
        @property { Array<Object> } [sizes]
        
        @property { Attributes } [attributes]
        
        @property { string } [description]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [images]
        
        @property { ProductPublished } [productPublish]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { Array<number> } [departments]
        
        @property { string } [itemType]
        
        @property { string } [countryOfOrigin]
        
        @property { boolean } [isSet]
        
        @property { string } [name]
        
        @property { boolean } [multiSize]
        
        @property { boolean } [isDependent]
        
        @property { string } [sizeGuide]
        
        @property { string } [hsnCode]
        
        @property { string } [templateTag]
        
        @property { Brand } [brand]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { number } [succeed]
        
        @property { number } [cancelled]
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } [modifiedOn]
        
        @property { string } [filePath]
        
        @property { number } [failed]
        
        @property { Array<Object> } [failedRecords]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } companyId
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } total
        
        @property { string } [stage]
        
        @property { string } [customTemplateTag]
        
        @property { string } [templateTag]
        
        @property { string } [trackingUrl]
        
        @property { string } createdOn
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [fullName]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { number } [succeed]
        
        @property { number } [cancelled]
        
        @property { ProductTemplate } [template]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [modifiedOn]
        
        @property { string } [filePath]
        
        @property { number } [failed]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [stage]
        
        @property { number } [companyId]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [total]
        
        @property { UserDetail } [modifiedBy]
        
        @property { string } [templateTag]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { number } companyId
        
        @property { Array<Object> } data
        
        @property { string } batchId
        
        @property { string } templateTag
        
         
    */

/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { number } [companyId]
        
        @property { Object } user
        
        @property { string } url
        
         
    */

/**
        @typedef Items
        
        
        @property { number } [succeed]
        
        @property { number } [cancelled]
        
        @property { string } [id]
        
        @property { string } [filePath]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [failed]
        
        @property { Array<string> } [failedRecords]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [stage]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [total]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { string } [trackingUrl]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */

/**
        @typedef GTIN
        
        
        @property { string } gtinType
        
        @property { string } gtinValue
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */

/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */

/**
        @typedef InventorySet
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } sizeDistribution
        
         
    */

/**
        @typedef InvSize
        
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<GTIN> } identifiers
        
        @property { number } [priceTransfer]
        
        @property { InventorySet } [set]
        
        @property { string } storeCode
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { number } quantity
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { string } size
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { number } [brandUid]
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { Array<InvSize> } sizes
        
        @property { number } companyId
        
        @property { ItemQuery } item
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { number } [total]
        
        @property { string } [size]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { string } [startDate]
        
        @property { string } [endDate]
        
        @property { number } [total]
        
        @property { string } [stage]
        
        @property { string } [templateTag]
        
        @property { string } [customTemplateTag]
        
         
    */

/**
        @typedef Size1
        
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } sellerIdentifier
        
        @property { number } [priceTransfer]
        
        @property { InventorySet } [set]
        
        @property { string } storeCode
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { number } quantity
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { string } [size]
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { Array<Size1> } sizes
        
        @property { number } companyId
        
        @property { Object } [user]
        
        @property { string } batchId
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } [completedOn]
        
        @property { Object } [requestParams]
        
        @property { string } [url]
        
        @property { string } [status]
        
        @property { number } sellerId
        
        @property { string } [triggerOn]
        
        @property { string } taskId
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */

/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [state]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { string } number
        
        @property { number } countryCode
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */

/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } type
        
        @property { string } [url]
        
        @property { string } legalName
        
        @property { string } value
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [name]
        
        @property { string } [modifiedOn]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [createdOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [verifiedOn]
        
        @property { string } companyType
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [businessInfo]
        
        @property { Object } [warnings]
        
        @property { string } [stage]
        
        @property { ContactDetails } [contactDetails]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { Array<Document> } [documents]
        
        @property { boolean } [franchiseEnabled]
        
        @property { number } uid
        
        @property { string } businessType
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { string } city
        
        @property { string } country
        
        @property { number } pincode
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } address1
        
        @property { string } state
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } name
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
        @property { number } [uid]
        
        @property { CompanyAddress } address
        
        @property { string } businessType
        
        @property { Document } document
        
        @property { string } [businessInfo]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { Array<string> } [notificationEmails]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [store]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { string } [stage]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [slugKey]
        
        @property { string } name
        
        @property { string } [verifiedOn]
        
        @property { Object } [localeLanguage]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [description]
        
        @property { Object } [customJson]
        
        @property { string } [modifiedOn]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [logo]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } name
        
        @property { number } [companyId]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [brandTier]
        
        @property { string } [description]
        
        @property { string } logo
        
        @property { Object } [localeLanguage]
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
        @property { number } company
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [state]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
        @property { boolean } open
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { string } [name]
        
        @property { PhoneNumber } mobileNo
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } name
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Object } [customJson]
        
        @property { number } company
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } code
        
        @property { Object } [warnings]
        
        @property { Array<string> } [notificationEmails]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [stage]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [name]
        
        @property { string } [verifiedOn]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [businessType]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { string } name
        
        @property { Object } [customJson]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } displayName
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [stage]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { string } [storeType]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { GetCompanySerializer } [company]
        
        @property { GetAddressSerializer } address
        
        @property { string } phoneNumber
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } code
        
         
    */

/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */

/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */

/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */

/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
        @property { CopyFileTask } task
        
         
    */

/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */

/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */

/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signedUrl
        
        @property { number } expiry
        
         
    */

/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */

/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */

/**
        @typedef Item
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef BrowseResponse
        
        
        @property { Array<Item> } items
        
        @property { Page } page
        
         
    */

class User {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets list of customers
    * @description: Used to get application customers list
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getCustomers({ q, pageSize, pageNo } = {}) {
    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Search users
    * @description: Search users
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  searchUsers({ q } = {}) {
    const queryObj = {};
    queryObj["q"] = q;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get platform config
    * @description: Used to get platform config
    * @param {Object} arg - arg object.
    
    **/
  getPlatformConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update platform config
   * @description: Used to update platform config
   * @param {Object} arg - arg object.
   * @param {PlatformSchema} arg.body
   **/
  updatePlatformConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
      body
    );
  }
}

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get All Brand Payment Gateway Config Secret
    * @description: Get All Brand Payment Gateway Config Secret
    * @param {Object} arg - arg object.
    
    **/
  getBrandPaymentGatewayConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {boolean} arg.refresh - 
    * @param {string} arg.requestType - 
    
    **/
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const queryObj = {};
    queryObj["refresh"] = refresh;
    queryObj["request_type"] = requestType;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      queryObj,
      undefined
    );
  }
}

class Catalog {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Delete a Search Keywords
    * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
    
    **/
  deleteSearchKeywords({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update Search Keyword
   * @description: Update Search Keyword by its id. On successful request, returns the updated collection
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateSearchKeyword} arg.body
   **/
  updateSearchKeywords({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a Search Keywords Details
    * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getSearchKeywords({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Custom Search Keywords
   * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
   * @param {Object} arg - arg object.
   * @param {CreateSearchKeyword} arg.body
   **/
  createCustomKeyword({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all Search Custom Keyword Listing
    * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
    * @param {Object} arg - arg object.
    
    **/
  getAllSearchKeyword({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Autocomplete Keywords
    * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
    
    **/
  deleteAutocompleteKeyword({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create & Update Autocomplete Keyword
   * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateAutocompleteKeyword} arg.body
   **/
  updateAutocompleteKeyword({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a Autocomplete Keywords Details
    * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getAutocompleteKeywordDetail({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Custom Autocomplete Keywords
   * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
   * @param {Object} arg - arg object.
   * @param {CreateAutocompleteKeyword} arg.body
   **/
  createCustomAutocompleteRule({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all Autocomplete Keyword Listing
    * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
    * @param {Object} arg - arg object.
    
    **/
  getAutocompleteConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get configuration meta  details for catalog for admin panel
    * @description: configuration meta  details for catalog.
    * @param {Object} arg - arg object.
    
    **/
  getCatalogConfiguration({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add configuration for products & listings
   * @description: Add configuration for products & listing.
   * @param {Object} arg - arg object.
   * @param {AppConfiguration} arg.body
   **/
  createConfigurationProductListing({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get configured details for catalog
    * @description: configured details for catalog.
    * @param {Object} arg - arg object.
    
    **/
  getConfigurations({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add configuration for categories and brands
   * @description: Add configuration for categories & brands.
   * @param {Object} arg - arg object.
   * @param {string} arg.type - type can be brands, categories etc.
   * @param {AppConfiguration} arg.body
   **/
  createConfigurationByType({ type, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get configured details for catalog
    * @description: configured details for catalog.
    * @param {Object} arg - arg object.
    * @param {string} arg.type - type can be brands, categories etc.
    
    **/
  getConfigurationByType({ type } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get query filters to configure a collection
    * @description: Get query filters to configure a collection
    * @param {Object} arg - arg object.
    
    **/
  getQueryFilters({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/query-options/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Collection
   * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
   * @param {Object} arg - arg object.
   * @param {CreateCollection} arg.body
   **/
  createCollection({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
    * @param {Object} arg - arg object.
    
    **/
  getAllCollections({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetail({ slug } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${slug}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Update a collection
    * @description: Update a collection by it's id. On successful request, returns the updated collection
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    
    **/
  updateCollection({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Collection
    * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    
    **/
  deleteCollection({ id } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add items to a collection
   * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @param {CollectionItemRequest} arg.body
   **/
  addCollectionItems({ id, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get the items for a collection
    * @description: Get items from a collection specified by its `id`.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain next_page_id param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItems({ id, sortOn, pageId, pageSize } = {}) {
    const queryObj = {};
    queryObj["sort_on"] = sortOn;
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Analytics data of catalog and inventory.
    * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
    * @param {Object} arg - arg object.
    * @param {string} [arg.brand] - Brand slug
    
    **/
  getCatalogInsights({ brand } = {}) {
    const queryObj = {};
    queryObj["brand"] = brand;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/analytics/insights/`,
      queryObj,
      undefined
    );
  }
}

class Assets {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  appCopyFiles({ body, sync } = {}) {
    const queryObj = {};
    queryObj["sync"] = sync;

    return APIClient.execute(
      this.config,
      "post",
      `/service/application/assets/v1.0/uploads/company/${this.config.companyId}/application/${this.applicationId}/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  appBrowse({ namespace } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/application/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }
}

module.exports = {
  User,
  Payment,
  Catalog,
  Assets,
};
