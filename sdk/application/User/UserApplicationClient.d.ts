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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyEmailOTPSuccess>} - Success response
     * @name addEmail
     * @summary: Add Email to Profile
     * @description: Add a new email address to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addEmail/).
     */
    addEmail({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyEmailOTPSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyMobileOTPSuccess>} - Success response
     * @name addMobileNumber
     * @summary: Add Mobile Number to Profile
     * @description: Add a new mobile number to the user's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addMobileNumber/).
     */
    addMobileNumber({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyMobileOTPSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name deleteEmail
     * @summary: Delete Email From Profile
     * @description: Delete email from profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteEmail/).
     */
    deleteEmail({ active, primary, verified, email, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name deleteMobileNumber
     * @summary: Delete Mobile Number From Profile
     * @description: Delete mobile number from profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteMobileNumber/).
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<DeleteUserSuccess>} - Success response
     * @name deleteUser
     * @summary: Verify OTP and Delete User
     * @description: Verify OTP sent to mobile/email and delete the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteUser/).
     */
    deleteUser({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<DeleteUserSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name forgotPassword
     * @summary: Reset Password via Code and login
     * @description: Reset a password using the code sent on email or sms the login. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/forgotPassword/).
     */
    forgotPassword({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SessionListSuccess>} - Success response
     * @name getListOfActiveSessions
     * @summary: Get List OF Active Sessions
     * @description: Retrieve all active sessions of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getListOfActiveSessions/).
     */
    getListOfActiveSessions({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SessionListSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserObjectSchema>} - Success response
     * @name getLoggedInUser
     * @summary: Get Logged in User
     * @description: Retrieve information about the currently logged-in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getLoggedInUser/).
     */
    getLoggedInUser({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<UserObjectSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get Platform Configuration
     * @description: Retrieve platform sales channel authentication configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getPlatformConfig/).
     */
    getPlatformConfig({ name, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PlatformSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserAttributes>} - Success response
     * @name getUserAttributes
     * @summary: Get User Attributes
     * @description: Get the list of user attributes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getUserAttributes/).
     */
    getUserAttributes({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<UserAttributes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<HasPasswordSuccess>} - Success response
     * @name hasPassword
     * @summary: Check Password Existence
     * @description: Check if user has set an account password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/hasPassword/).
     */
    hasPassword({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<HasPasswordSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AuthSuccess>} - Success response
     * @name loginWithAppleIOS
     * @summary: iOS Login with Apple
     * @description: Enable ios users to log in to the system using their apple id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithAppleIOS/).
     */
    loginWithAppleIOS({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AuthSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name loginWithEmailAndPassword
     * @summary: Email and Password Login
     * @description: Allow login using an email and password combination. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithEmailAndPassword/).
     */
    loginWithEmailAndPassword({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AuthSuccess>} - Success response
     * @name loginWithFacebook
     * @summary: Login with Facebook
     * @description: Enable users to log in to the system using their facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithFacebook/).
     */
    loginWithFacebook({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AuthSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AuthSuccess>} - Success response
     * @name loginWithGoogle
     * @summary: Login with Google
     * @description: Enable website users to log in to the system using their google accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogle/).
     */
    loginWithGoogle({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AuthSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AuthSuccess>} - Success response
     * @name loginWithGoogleAndroid
     * @summary: Android Login with Google
     * @description: Enable android users to log in to the system using their facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleAndroid/).
     */
    loginWithGoogleAndroid({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AuthSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AuthSuccess>} - Success response
     * @name loginWithGoogleIOS
     * @summary: iOS Login with Google
     * @description: Enable ios users to log in to the system using their facebook accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleIOS/).
     */
    loginWithGoogleIOS({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AuthSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendOtp>} - Success response
     * @name loginWithOTP
     * @summary: Login with Mobile OTP
     * @description: Allow users to log in using a one-time password sent to their mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithOTP/).
     */
    loginWithOTP({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SendOtp>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name loginWithToken
     * @summary: Login with Token
     * @description: Login user using a token for authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithToken/).
     */
    loginWithToken({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogoutSuccess>} - Success response
     * @name logout
     * @summary: Logout Current User
     * @description: Logout currently logged-in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/logout/).
     */
    logout({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LogoutSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RegisterFormSuccess>} - Success response
     * @name registerWithForm
     * @summary: Register User with Form
     * @description: Enable new users to register using a form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/registerWithForm/).
     */
    registerWithForm({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<RegisterFormSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResetForgotPasswordSuccess>} - Success response
     * @name resetForgotPassword
     * @summary: Reset Password via Code
     * @description: Reset a password using the code sent on email or sms. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/resetForgotPassword/).
     */
    resetForgotPassword({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ResetForgotPasswordSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<EmailOtpSuccess>} - Success response
     * @name sendForgotOTPOnEmail
     * @summary: Send Email OTP for Forgot Password
     * @description: Send a one-time password to the user's email for verification when resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnEmail/).
     */
    sendForgotOTPOnEmail({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<EmailOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendOtpSuccess>} - Success response
     * @name sendForgotOTPOnMobile
     * @summary: Send mobile OTP for forgot-password
     * @description: Send a one-time password to the user's mobile for verification when resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnMobile/).
     */
    sendForgotOTPOnMobile({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SendOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<EmailOtpSuccess>} - Success response
     * @name sendOTPOnEmail
     * @summary: Send OTP on Email
     * @description: Send a one-time password to the user's email for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnEmail/).
     */
    sendOTPOnEmail({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<EmailOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendOtpSuccess>} - Success response
     * @name sendOTPOnMobile
     * @summary: Send OTP on Mobile
     * @description: Send a one-time password to the user's mobile for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnMobile/).
     */
    sendOTPOnMobile({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SendOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordEmail
     * @summary: Reset Password via Email
     * @description: Send a password reset link to the user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordEmail/).
     */
    sendResetPasswordEmail({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ResetPasswordSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name sendResetPasswordMobile
     * @summary: Reset Password via Mobile
     * @description: Send a password reset link to the user's mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordMobile/).
     */
    sendResetPasswordMobile({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<any>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @name sendResetToken
     * @summary: Validate Password Reset Code
     * @description: Validate password reset link code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetToken/).
     */
    sendResetToken({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ResetPasswordSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendEmailVerifyLinkSuccess>} - Success response
     * @name sendVerificationLinkToEmail
     * @summary: Send Verification Link to Email
     * @description: Send a verification link to a newly added email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToEmail/).
     */
    sendVerificationLinkToEmail({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SendEmailVerifyLinkSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SendMobileVerifyLinkSuccess>} - Success response
     * @name sendVerificationLinkToMobile
     * @summary: Send Verification Link to Mobile
     * @description: Send a verification link to a newly added mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToMobile/).
     */
    sendVerificationLinkToMobile({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SendMobileVerifyLinkSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name setEmailAsPrimary
     * @summary: Set Email as Primary
     * @description: Set an email address as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setEmailAsPrimary/).
     */
    setEmailAsPrimary({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LoginSuccess>} - Success response
     * @name setMobileNumberAsPrimary
     * @summary: Set Mobile as Primary
     * @description: Set a mobile number as the primary contact for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setMobileNumberAsPrimary/).
     */
    setMobileNumberAsPrimary({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LoginSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @name updatePassword
     * @summary: Update password
     * @description: Allow user to change their password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updatePassword/).
     */
    updatePassword({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyEmailSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ProfileEditSuccess>} - Success response
     * @name updateProfile
     * @summary: Edit User Profile Details
     * @description: Allow users to modify and update their profile details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateProfile/).
     */
    updateProfile({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ProfileEditSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserAttributes>} - Success response
     * @name updateUserAttributes
     * @summary: Update User Attributes
     * @description: Update user attributes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateUserAttributes/).
     */
    updateUserAttributes({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<UserAttributes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserExistsDetails>} - Success response
     * @name userExists
     * @summary: Chcek User Existence
     * @description: Check whether user is already registered or not to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/userExists/).
     */
    userExists({ q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<UserExistsDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @name verifyEmail
     * @summary: Verify Email with Code
     * @description: Verify user email with a code sent within a link sent to their email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmail/).
     */
    verifyEmail({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyEmailSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyForgotOtpSuccess>} - Success response
     * @name verifyEmailForgotOTP
     * @summary: Verify Email OTP for Forgot Password
     * @description: Verify one-time password sent to user's email for resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailForgotOTP/).
     */
    verifyEmailForgotOTP({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyForgotOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyOtpSuccess>} - Success response
     * @name verifyEmailOTP
     * @summary: Verify Email OTP
     * @description: Verify one-time password sent to user's email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailOTP/).
     */
    verifyEmailOTP({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @name verifyMobile
     * @summary: Verify Mobile with Code
     * @description: Verify user mobile with a code sent within a link sent to their mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobile/).
     */
    verifyMobile({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyEmailSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyForgotOtpSuccess>} - Success response
     * @name verifyMobileForgotOTP
     * @summary: Verify Mobile OTP for Forgot Password
     * @description: Verify one-time password sent to user's mobile for resetting a forgotten password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileForgotOTP/).
     */
    verifyMobileForgotOTP({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyForgotOtpSuccess>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<VerifyOtpSuccess>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify mobile OTP
     * @description: Verify one-time password sent to user's mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, platform, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<VerifyOtpSuccess>;
}
