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
        sendResetPasswordMobile: string;
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
     * @summary: Add Email to Profile
     * @description: Add a new email address to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addEmail/).
     */
    addEmail({ body, platform, requestHeaders }?: UserApplicationValidator.AddEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailOTPSuccess>;
    /**
     * @param {UserApplicationValidator.AddMobileNumberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
     * @name addMobileNumber
     * @summary: Add Mobile Number to Profile
     * @description: Add a new mobile number to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addMobileNumber/).
     */
    addMobileNumber({ body, platform, requestHeaders }?: UserApplicationValidator.AddMobileNumberParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyMobileOTPSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteEmail
     * @summary: Delete Email From Profile
     * @description: Delete email from profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteEmail/).
     */
    deleteEmail({ active, primary, verified, email, platform, requestHeaders }?: UserApplicationValidator.DeleteEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteMobileNumberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteMobileNumber
     * @summary: Delete Mobile Number From Profile
     * @description: Delete mobile number from profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteMobileNumber/).
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, requestHeaders, }?: UserApplicationValidator.DeleteMobileNumberParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteUserParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.DeleteUserSuccess>} - Success response
     * @name deleteUser
     * @summary: Verify OTP and Delete User
     * @description: Verify OTP sent to mobile/email and delete the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteUser/).
     */
    deleteUser({ body, requestHeaders }?: UserApplicationValidator.DeleteUserParam, { responseHeaders }?: object): Promise<UserApplicationModel.DeleteUserSuccess>;
    /**
     * @param {UserApplicationValidator.ForgotPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name forgotPassword
     * @summary: Reset Password via Code and login
     * @description: Reset a password using the code sent on email or sms the login. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/forgotPassword/).
     */
    forgotPassword({ body, requestHeaders }?: UserApplicationValidator.ForgotPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.GetListOfActiveSessionsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SessionListSuccess>} - Success response
     * @name getListOfActiveSessions
     * @summary: Get List OF Active Sessions
     * @description: Retrieve all active sessions of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getListOfActiveSessions/).
     */
    getListOfActiveSessions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.SessionListSuccess>;
    /**
     * @param {UserApplicationValidator.GetLoggedInUserParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserObjectSchema>} - Success response
     * @name getLoggedInUser
     * @summary: Get Logged in User
     * @description: Retrieve information about the currently logged-in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getLoggedInUser/).
     */
    getLoggedInUser({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.UserObjectSchema>;
    /**
     * @param {UserApplicationValidator.GetPlatformConfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get Platform Configuration
     * @description: Retrieve platform sales channel authentication configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getPlatformConfig/).
     */
    getPlatformConfig({ name, requestHeaders }?: UserApplicationValidator.GetPlatformConfigParam, { responseHeaders }?: object): Promise<UserApplicationModel.PlatformSchema>;
    /**
     * @param {UserApplicationValidator.GetUserAttributesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserAttributes>} - Success response
     * @name getUserAttributes
     * @summary: Get User Attributes
     * @description: Get the list of user attributes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getUserAttributes/).
     */
    getUserAttributes({ slug, requestHeaders }?: UserApplicationValidator.GetUserAttributesParam, { responseHeaders }?: object): Promise<UserApplicationModel.UserAttributes>;
    /**
     * @param {UserApplicationValidator.HasPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.HasPasswordSuccess>} - Success response
     * @name hasPassword
     * @summary: Check Password Existence
     * @description: Check if user has set an account password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/hasPassword/).
     */
    hasPassword({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.HasPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithAppleIOSParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithAppleIOS
     * @summary: iOS Login with Apple
     * @description: Enable ios users to log in to the system using their apple id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithAppleIOS/).
     */
    loginWithAppleIOS({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithAppleIOSParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithEmailAndPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithEmailAndPassword
     * @summary: Email and Password Login
     * @description: Allow login using an email and password combination. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithEmailAndPassword/).
     */
    loginWithEmailAndPassword({ body, requestHeaders }?: UserApplicationValidator.LoginWithEmailAndPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithFacebookParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithFacebook
     * @summary: Login with Facebook
     * @description: Enable users to log in to the system using their facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithFacebook/).
     */
    loginWithFacebook({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithFacebookParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogle
     * @summary: Login with Google
     * @description: Enable website users to log in to the system using their google accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogle/).
     */
    loginWithGoogle({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithGoogleParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleAndroidParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleAndroid
     * @summary: Android Login with Google
     * @description: Enable android users to log in to the system using their facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleAndroid/).
     */
    loginWithGoogleAndroid({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithGoogleAndroidParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleIOSParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleIOS
     * @summary: iOS Login with Google
     * @description: Enable ios users to log in to the system using their facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleIOS/).
     */
    loginWithGoogleIOS({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithGoogleIOSParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendOtp>} - Success response
     * @name loginWithOTP
     * @summary: Login with Mobile OTP
     * @description: Allow users to log in using a one-time password sent to their mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithOTP/).
     */
    loginWithOTP({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendOtp>;
    /**
     * @param {UserApplicationValidator.LoginWithTokenParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithToken
     * @summary: Login with Token
     * @description: Login user using a token for authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithToken/).
     */
    loginWithToken({ body, requestHeaders }?: UserApplicationValidator.LoginWithTokenParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.LogoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LogoutSuccess>} - Success response
     * @name logout
     * @summary: Logout Current User
     * @description: Logout currently logged-in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/logout/).
     */
    logout({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.LogoutSuccess>;
    /**
     * @param {UserApplicationValidator.RegisterWithFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.RegisterFormSuccess>} - Success response
     * @name registerWithForm
     * @summary: Register User with Form
     * @description: Enable new users to register using a form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/registerWithForm/).
     */
    registerWithForm({ body, platform, requestHeaders }?: UserApplicationValidator.RegisterWithFormParam, { responseHeaders }?: object): Promise<UserApplicationModel.RegisterFormSuccess>;
    /**
     * @param {UserApplicationValidator.ResetForgotPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetForgotPasswordSuccess>} -
     *   Success response
     * @name resetForgotPassword
     * @summary: Reset Password via Code
     * @description: Reset a password using the code sent on email or sms. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/resetForgotPassword/).
     */
    resetForgotPassword({ body, requestHeaders }?: UserApplicationValidator.ResetForgotPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetForgotPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendForgotOTPOnEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendForgotOTPOnEmail
     * @summary: Send Email OTP for Forgot Password
     * @description: Send a one-time password to the user's email for verification when resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnEmail/).
     */
    sendForgotOTPOnEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendForgotOTPOnEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendForgotOTPOnMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendOtpSuccess>} - Success response
     * @name sendForgotOTPOnMobile
     * @summary: Send mobile OTP for forgot-password
     * @description: Send a one-time password to the user's mobile for verification when resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnMobile/).
     */
    sendForgotOTPOnMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendForgotOTPOnMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendOTPOnEmail
     * @summary: Send OTP on Email
     * @description: Send a one-time password to the user's email for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnEmail/).
     */
    sendOTPOnEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendOTPOnEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendOtpSuccess>} - Success response
     * @name sendOTPOnMobile
     * @summary: Send OTP on Mobile
     * @description: Send a one-time password to the user's mobile for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnMobile/).
     */
    sendOTPOnMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendOTPOnMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordEmail
     * @summary: Reset Password via Email
     * @description: Send a password reset link to the user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordEmail/).
     */
    sendResetPasswordEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendResetPasswordEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name sendResetPasswordMobile
     * @summary: Reset Password via Mobile
     * @description: Send a password reset link to the user's mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordMobile/).
     */
    sendResetPasswordMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendResetPasswordMobileParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {UserApplicationValidator.SendResetTokenParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetToken
     * @summary: Validate Password Reset Code
     * @description: Validate password reset link code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetToken/).
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
     * @summary: Send Verification Link to Email
     * @description: Send a verification link to a newly added email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToEmail/).
     */
    sendVerificationLinkToEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendVerificationLinkToEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SendVerificationLinkToMobileParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToMobile
     * @summary: Send Verification Link to Mobile
     * @description: Send a verification link to a newly added mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToMobile/).
     */
    sendVerificationLinkToMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendVerificationLinkToMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SetEmailAsPrimaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setEmailAsPrimary
     * @summary: Set Email as Primary
     * @description: Set an email address as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setEmailAsPrimary/).
     */
    setEmailAsPrimary({ body, requestHeaders }?: UserApplicationValidator.SetEmailAsPrimaryParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.SetMobileNumberAsPrimaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setMobileNumberAsPrimary
     * @summary: Set Mobile as Primary
     * @description: Set a mobile number as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setMobileNumberAsPrimary/).
     */
    setMobileNumberAsPrimary({ body, requestHeaders }?: UserApplicationValidator.SetMobileNumberAsPrimaryParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.UpdatePasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name updatePassword
     * @summary: Update password
     * @description: Allow user to change their password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updatePassword/).
     */
    updatePassword({ body, requestHeaders }?: UserApplicationValidator.UpdatePasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.UpdateProfileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ProfileEditSuccess>} - Success response
     * @name updateProfile
     * @summary: Edit User Profile Details
     * @description: Allow users to modify and update their profile details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateProfile/).
     */
    updateProfile({ body, platform, requestHeaders }?: UserApplicationValidator.UpdateProfileParam, { responseHeaders }?: object): Promise<UserApplicationModel.ProfileEditSuccess>;
    /**
     * @param {UserApplicationValidator.UpdateUserAttributesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserAttributes>} - Success response
     * @name updateUserAttributes
     * @summary: Update User Attributes
     * @description: Update user attributes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateUserAttributes/).
     */
    updateUserAttributes({ body, requestHeaders }?: UserApplicationValidator.UpdateUserAttributesParam, { responseHeaders }?: object): Promise<UserApplicationModel.UserAttributes>;
    /**
     * @param {UserApplicationValidator.UserExistsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserExistsDetails>} - Success response
     * @name userExists
     * @summary: Chcek User Existence
     * @description: Check whether user is already registered or not to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/userExists/).
     */
    userExists({ q, requestHeaders }?: UserApplicationValidator.UserExistsParam, { responseHeaders }?: object): Promise<UserApplicationModel.UserExistsDetails>;
    /**
     * @param {UserApplicationValidator.VerifyEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyEmail
     * @summary: Verify Email with Code
     * @description: Verify user email with a code sent within a link sent to their email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmail/).
     */
    verifyEmail({ body, requestHeaders }?: UserApplicationValidator.VerifyEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailForgotOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
     * @name verifyEmailForgotOTP
     * @summary: Verify Email OTP for Forgot Password
     * @description: Verify one-time password sent to user's email for resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailForgotOTP/).
     */
    verifyEmailForgotOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyEmailForgotOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyForgotOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyEmailOTP
     * @summary: Verify Email OTP
     * @description: Verify one-time password sent to user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailOTP/).
     */
    verifyEmailOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyEmailOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyMobile
     * @summary: Verify Mobile with Code
     * @description: Verify user mobile with a code sent within a link sent to their mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobile/).
     */
    verifyMobile({ body, requestHeaders }?: UserApplicationValidator.VerifyMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileForgotOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
     * @name verifyMobileForgotOTP
     * @summary: Verify Mobile OTP for Forgot Password
     * @description: Verify one-time password sent to user's mobile for resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileForgotOTP/).
     */
    verifyMobileForgotOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyMobileForgotOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyForgotOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify mobile OTP
     * @description: Verify one-time password sent to user's mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyOtpSuccess>;
}
import UserApplicationValidator = require("./UserApplicationValidator");
import UserApplicationModel = require("./UserApplicationModel");
