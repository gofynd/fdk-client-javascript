export = User;
declare class User {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        addEmail: string;
        addMobileNumber: string;
        deleteEmail: string;
        deleteMobileNumber: string;
        deleteUser: string;
        forgotPassword: string;
        getListOfActiveSessions: string;
        getLoggedInUser: string;
        getPlatformConfig: string;
        getUserAttributes: string;
        hasPassword: string;
        loginWithAppleIOS: string;
        loginWithEmailAndPassword: string;
        loginWithFacebook: string;
        loginWithGoogle: string;
        loginWithGoogleAndroid: string;
        loginWithGoogleIOS: string;
        loginWithOTP: string;
        loginWithToken: string;
        logout: string;
        registerWithForm: string;
        resetForgotPassword: string;
        sendForgotOTPOnEmail: string;
        sendForgotOTPOnMobile: string;
        sendOTPOnEmail: string;
        sendOTPOnMobile: string;
        sendResetPasswordEmail: string;
        sendResetToken: string;
        sendVerificationLinkToEmail: string;
        sendVerificationLinkToMobile: string;
        setEmailAsPrimary: string;
        setMobileNumberAsPrimary: string;
        updatePassword: string;
        updateProfile: string;
        updateUserAttributes: string;
        userExists: string;
        verifyEmail: string;
        verifyEmailForgotOTP: string;
        verifyEmailOTP: string;
        verifyMobile: string;
        verifyMobileForgotOTP: string;
        verifyMobileOTP: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {UserApplicationValidator.AddEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailOTPSuccess>} - Success response
     * @name addEmail
     * @summary: Add email.
     * @description: Adds a new email address to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addEmail/).
     */
    addEmail({ body, requestHeaders }?: UserApplicationValidator.AddEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailOTPSuccess>;
    /**
     * @param {UserApplicationValidator.AddMobileNumberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
     * @name addMobileNumber
     * @summary: Add mobile.
     * @description: Adds a new mobile number to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addMobileNumber/).
     */
    addMobileNumber({ body, requestHeaders }?: UserApplicationValidator.AddMobileNumberParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyMobileOTPSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteEmail
     * @summary: Delete email.
     * @description: Removes an email address from the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteEmail/).
     */
    deleteEmail({ active, primary, verified, email, platform, requestHeaders }?: UserApplicationValidator.DeleteEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteMobileNumberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteMobileNumber
     * @summary: Delete mobile number from profile
     * @description: Use this API to delete a mobile number from a profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteMobileNumber/).
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, requestHeaders, }?: UserApplicationValidator.DeleteMobileNumberParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteUserParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.DeleteUserSuccess>} - Success response
     * @name deleteUser
     * @summary: verify otp and delete user
     * @description: verify otp and delete user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteUser/).
     */
    deleteUser({ body, requestHeaders }?: UserApplicationValidator.DeleteUserParam, { responseHeaders }?: object): Promise<UserApplicationModel.DeleteUserSuccess>;
    /**
     * @param {UserApplicationValidator.ForgotPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name forgotPassword
     * @summary: Forgot password.
     * @description: Initiates the password recovery process for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/forgotPassword/).
     */
    forgotPassword({ body, requestHeaders }?: UserApplicationValidator.ForgotPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.GetListOfActiveSessionsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SessionListSuccess>} - Success response
     * @name getListOfActiveSessions
     * @summary: Get list of sessions
     * @description: Use this API to retrieve all active sessions of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getListOfActiveSessions/).
     */
    getListOfActiveSessions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.SessionListSuccess>;
    /**
     * @param {UserApplicationValidator.GetLoggedInUserParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserObjectSchema>} - Success response
     * @name getLoggedInUser
     * @summary: Current user.
     * @description: Retrieve information about the currently logged-in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getLoggedInUser/).
     */
    getLoggedInUser({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.UserObjectSchema>;
    /**
     * @param {UserApplicationValidator.GetPlatformConfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Platform config.
     * @description: Retrieve configuration settings related to the user platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getPlatformConfig/).
     */
    getPlatformConfig({ name, requestHeaders }?: UserApplicationValidator.GetPlatformConfigParam, { responseHeaders }?: object): Promise<UserApplicationModel.PlatformSchema>;
    /**
     * @param {UserApplicationValidator.GetUserAttributesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserAttributes>} - Success response
     * @name getUserAttributes
     * @summary: Get user attributes
     * @description: Use this API to get the list of user attributes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getUserAttributes/).
     */
    getUserAttributes({ slug, requestHeaders }?: UserApplicationValidator.GetUserAttributesParam, { responseHeaders }?: object): Promise<UserApplicationModel.UserAttributes>;
    /**
     * @param {UserApplicationValidator.HasPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.HasPasswordSuccess>} - Success response
     * @name hasPassword
     * @summary: Check password.
     * @description: Checks if the user has set a password for the account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/hasPassword/).
     */
    hasPassword({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.HasPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithAppleIOSParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithAppleIOS
     * @summary: Apple iOS login.
     * @description: Enables login through Apple ID specifically for iOS users. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithAppleIOS/).
     */
    loginWithAppleIOS({ body, requestHeaders }?: UserApplicationValidator.LoginWithAppleIOSParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithEmailAndPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithEmailAndPassword
     * @summary: Email/password login.
     * @description: Enables login using an email and password combination. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithEmailAndPassword/).
     */
    loginWithEmailAndPassword({ body, requestHeaders }?: UserApplicationValidator.LoginWithEmailAndPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithFacebookParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithFacebook
     * @summary: Facebook login.
     * @description: Enables login through Facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithFacebook/).
     */
    loginWithFacebook({ body, requestHeaders }?: UserApplicationValidator.LoginWithFacebookParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogle
     * @summary: Google login.
     * @description: Enables login through Google accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogle/).
     */
    loginWithGoogle({ body, requestHeaders }?: UserApplicationValidator.LoginWithGoogleParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleAndroidParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleAndroid
     * @summary: Android Google login.
     * @description: Facilitates Google login specifically for Android users. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleAndroid/).
     */
    loginWithGoogleAndroid({ body, requestHeaders }?: UserApplicationValidator.LoginWithGoogleAndroidParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleIOSParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleIOS
     * @summary: iOS Google login.
     * @description: Facilitates Google login specifically for iOS users. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleIOS/).
     */
    loginWithGoogleIOS({ body, requestHeaders }?: UserApplicationValidator.LoginWithGoogleIOSParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendOtpResponse>} - Success response
     * @name loginWithOTP
     * @summary: OTP login.
     * @description: Allows users to log in using a one-time password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithOTP/).
     */
    loginWithOTP({ body, requestHeaders }?: UserApplicationValidator.LoginWithOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendOtpResponse>;
    /**
     * @param {UserApplicationValidator.LoginWithTokenParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithToken
     * @summary: Login or Register with token
     * @description: Use this API to login or register using a token for authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithToken/).
     */
    loginWithToken({ body, requestHeaders }?: UserApplicationValidator.LoginWithTokenParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.LogoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LogoutSuccess>} - Success response
     * @name logout
     * @summary: Logs out currently logged in user
     * @description: Use this API to check to logout a user from the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/logout/).
     */
    logout({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.LogoutSuccess>;
    /**
     * @param {UserApplicationValidator.RegisterWithFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.RegisterFormSuccess>} - Success response
     * @name registerWithForm
     * @summary: User registration.
     * @description: Enables new users to register using a form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/registerWithForm/).
     */
    registerWithForm({ body, requestHeaders }?: UserApplicationValidator.RegisterWithFormParam, { responseHeaders }?: object): Promise<UserApplicationModel.RegisterFormSuccess>;
    /**
     * @param {UserApplicationValidator.ResetForgotPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetForgotPasswordSuccess>} -
     *   Success response
     * @name resetForgotPassword
     * @summary: Forgot password.
     * @description: Initiates the password recovery process for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/resetForgotPassword/).
     */
    resetForgotPassword({ body, requestHeaders }?: UserApplicationValidator.ResetForgotPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetForgotPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendForgotOTPOnEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendForgotOTPOnEmail
     * @summary: Send Forgot OTP Email
     * @description: Sends a one-time password to the user's forgot email for verification request. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnEmail/).
     */
    sendForgotOTPOnEmail({ body, requestHeaders }?: UserApplicationValidator.SendForgotOTPOnEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendForgotOTPOnMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
     * @name sendForgotOTPOnMobile
     * @summary: Send forgot OTP on mobile
     * @description: Sends a one-time password to the user's forgot mobile for verification request. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnMobile/).
     */
    sendForgotOTPOnMobile({ body, requestHeaders }?: UserApplicationValidator.SendForgotOTPOnMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.OtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendOTPOnEmail
     * @summary: Send email OTP.
     * @description: Sends a one-time password to the user's email for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnEmail/).
     */
    sendOTPOnEmail({ body, requestHeaders }?: UserApplicationValidator.SendOTPOnEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
     * @name sendOTPOnMobile
     * @summary: Send mobile OTP.
     * @description: Sends a one-time password to the user's mobile for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnMobile/).
     */
    sendOTPOnMobile({ body, requestHeaders }?: UserApplicationValidator.SendOTPOnMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.OtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordEmail
     * @summary: Reset password (Email).
     * @description: Sends a password reset link to the user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordEmail/).
     */
    sendResetPasswordEmail({ body, requestHeaders }?: UserApplicationValidator.SendResetPasswordEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetTokenParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetToken
     * @summary: Reset Password using token
     * @description: Use this API to send code to reset password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetToken/).
     */
    sendResetToken({ body, requestHeaders }?: UserApplicationValidator.SendResetTokenParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendVerificationLinkToEmailParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToEmail
     * @summary: Verify new email.
     * @description: Sends a verification link to a newly added email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToEmail/).
     */
    sendVerificationLinkToEmail({ body, requestHeaders }?: UserApplicationValidator.SendVerificationLinkToEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SendVerificationLinkToMobileParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToMobile
     * @summary: Verify new mobile.
     * @description: Sends a verification link to a newly added mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToMobile/).
     */
    sendVerificationLinkToMobile({ body, requestHeaders }?: UserApplicationValidator.SendVerificationLinkToMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SetEmailAsPrimaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setEmailAsPrimary
     * @summary: Set primary email.
     * @description: Sets an email address as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setEmailAsPrimary/).
     */
    setEmailAsPrimary({ body, requestHeaders }?: UserApplicationValidator.SetEmailAsPrimaryParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.SetMobileNumberAsPrimaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setMobileNumberAsPrimary
     * @summary: Set primary mobile.
     * @description: Sets a mobile number as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setMobileNumberAsPrimary/).
     */
    setMobileNumberAsPrimary({ body, requestHeaders }?: UserApplicationValidator.SetMobileNumberAsPrimaryParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.UpdatePasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name updatePassword
     * @summary: Update password.
     * @description: Allows users to update their existing password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updatePassword/).
     */
    updatePassword({ body, requestHeaders }?: UserApplicationValidator.UpdatePasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.UpdateProfileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ProfileEditSuccess>} - Success response
     * @name updateProfile
     * @summary: Edit Profile Details
     * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateProfile/).
     */
    updateProfile({ body, requestHeaders }?: UserApplicationValidator.UpdateProfileParam, { responseHeaders }?: object): Promise<UserApplicationModel.ProfileEditSuccess>;
    /**
     * @param {UserApplicationValidator.UpdateUserAttributesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserAttributes>} - Success response
     * @name updateUserAttributes
     * @summary: Update user attributes
     * @description: Use this API to update user attributes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateUserAttributes/).
     */
    updateUserAttributes({ body, requestHeaders }?: UserApplicationValidator.UpdateUserAttributesParam, { responseHeaders }?: object): Promise<UserApplicationModel.UserAttributes>;
    /**
     * @param {UserApplicationValidator.UserExistsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserExistsResponse>} - Success response
     * @name userExists
     * @summary: Check user is already registered or not
     * @description: Use this API to check whether user is already registered or not to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/userExists/).
     */
    userExists({ q, requestHeaders }?: UserApplicationValidator.UserExistsParam, { responseHeaders }?: object): Promise<UserApplicationModel.UserExistsResponse>;
    /**
     * @param {UserApplicationValidator.VerifyEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyEmail
     * @summary: Verify email.
     * @description: Verifies the user's email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmail/).
     */
    verifyEmail({ body, requestHeaders }?: UserApplicationValidator.VerifyEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailForgotOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
     * @name verifyEmailForgotOTP
     * @summary: Verify Email Forgot OTP
     * @description: Validates the OTP sent to the user's forgot email address request. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailForgotOTP/).
     */
    verifyEmailForgotOTP({ body, requestHeaders }?: UserApplicationValidator.VerifyEmailForgotOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyForgotOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyEmailOTP
     * @summary: Verify Email OTP
     * @description: Validates the OTP sent to the user's email address request. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailOTP/).
     */
    verifyEmailOTP({ body, requestHeaders }?: UserApplicationValidator.VerifyEmailOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyMobile
     * @summary: Verify mobile.
     * @description: Verifies the user's mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobile/).
     */
    verifyMobile({ body, requestHeaders }?: UserApplicationValidator.VerifyMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileForgotOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
     * @name verifyMobileForgotOTP
     * @summary: Verify Forgot OTP on mobile
     * @description: Use this API to verify the Forgot OTP received on a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileForgotOTP/).
     */
    verifyMobileForgotOTP({ body, requestHeaders }?: UserApplicationValidator.VerifyMobileForgotOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyForgotOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify mobile OTP.
     * @description: Validates the OTP sent to the user's mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, requestHeaders }?: UserApplicationValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyOtpSuccess>;
}
import UserApplicationValidator = require("sdk/output/javascript/code/sdk/application/User/UserApplicationValidator");
import UserApplicationModel = require("sdk/output/javascript/code/sdk/application/User/UserApplicationModel");
