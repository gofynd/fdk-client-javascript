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
     * @summary: Add email to profile
     * @description: Use this API to add a new email address to a profile - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addEmail/).
     */
    addEmail({ body, platform, requestHeaders }?: UserApplicationValidator.AddEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailOTPSuccess>;
    /**
     * @param {UserApplicationValidator.AddMobileNumberParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
     * @name addMobileNumber
     * @summary: Add mobile number to profile
     * @description: Use this API to add a new mobile number to a profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addMobileNumber/).
     */
    addMobileNumber({ body, platform, requestHeaders }?: UserApplicationValidator.AddMobileNumberParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyMobileOTPSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteEmail
     * @summary: Delete email from profile
     * @description: Use this API to delete an email address from a profile - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteEmail/).
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
     * @summary: Forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/forgotPassword/).
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
     * @summary: Get logged in user
     * @description: Use this API  to get the details of a logged in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getLoggedInUser/).
     */
    getLoggedInUser({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.UserObjectSchema>;
    /**
     * @param {UserApplicationValidator.GetPlatformConfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getPlatformConfig/).
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
     * @summary: Check password
     * @description: Use this API to check if user has created a password for login. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/hasPassword/).
     */
    hasPassword({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserApplicationModel.HasPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithAppleIOSParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithAppleIOS
     * @summary: Login or Register using Apple on iOS
     * @description: Use this API to login or register in iOS app using Apple Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithAppleIOS/).
     */
    loginWithAppleIOS({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithAppleIOSParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithEmailAndPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithEmailAndPassword
     * @summary: Login or Register with password
     * @description: Use this API to login or register using an email address and password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithEmailAndPassword/).
     */
    loginWithEmailAndPassword({ body, requestHeaders }?: UserApplicationValidator.LoginWithEmailAndPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithFacebookParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithFacebook
     * @summary: Login or Register using Facebook
     * @description: Use this API to login or register using Facebook credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithFacebook/).
     */
    loginWithFacebook({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithFacebookParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogle
     * @summary: Login or Register using Google
     * @description: Use this API to login or register using Google Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogle/).
     */
    loginWithGoogle({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithGoogleParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleAndroidParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleAndroid
     * @summary: Login or Register using Google on Android
     * @description: Use this API to login or register in Android app using Google Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleAndroid/).
     */
    loginWithGoogleAndroid({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithGoogleAndroidParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleIOSParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleIOS
     * @summary: Login or Register using Google on iOS
     * @description: Use this API to login or register in iOS app using Google Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleIOS/).
     */
    loginWithGoogleIOS({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithGoogleIOSParam, { responseHeaders }?: object): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendOtpResponse>} - Success response
     * @name loginWithOTP
     * @summary: Login or Register with OTP
     * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithOTP/).
     */
    loginWithOTP({ body, platform, requestHeaders }?: UserApplicationValidator.LoginWithOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendOtpResponse>;
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
     * @summary: Registration using a form
     * @description: Use this API to perform user registration by sending form data in the request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/registerWithForm/).
     */
    registerWithForm({ body, platform, requestHeaders }?: UserApplicationValidator.RegisterWithFormParam, { responseHeaders }?: object): Promise<UserApplicationModel.RegisterFormSuccess>;
    /**
     * @param {UserApplicationValidator.ResetForgotPasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetForgotPasswordSuccess>} -
     *   Success response
     * @name resetForgotPassword
     * @summary: Reset forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/resetForgotPassword/).
     */
    resetForgotPassword({ body, requestHeaders }?: UserApplicationValidator.ResetForgotPasswordParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetForgotPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendForgotOTPOnEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendForgotOTPOnEmail
     * @summary: Send Forgot OTP on email
     * @description: Use this API to send an Forgot OTP to an email ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnEmail/).
     */
    sendForgotOTPOnEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendForgotOTPOnEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendForgotOTPOnMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
     * @name sendForgotOTPOnMobile
     * @summary: Send Forgot OTP on mobile
     * @description: Use this API to send an Forgot OTP to a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendForgotOTPOnMobile/).
     */
    sendForgotOTPOnMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendForgotOTPOnMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.OtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendOTPOnEmail
     * @summary: Send OTP on email
     * @description: Use this API to send an OTP to an email ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnEmail/).
     */
    sendOTPOnEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendOTPOnEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
     * @name sendOTPOnMobile
     * @summary: Send OTP on mobile
     * @description: Use this API to send an OTP to a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnMobile/).
     */
    sendOTPOnMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendOTPOnMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.OtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordEmailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordEmail
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordEmail/).
     */
    sendResetPasswordEmail({ body, platform, requestHeaders }?: UserApplicationValidator.SendResetPasswordEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordMobile
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordMobile/).
     */
    sendResetPasswordMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendResetPasswordMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.ResetPasswordSuccess>;
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
     * @summary: Send verification link to email
     * @description: Use this API to send verification link to an email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToEmail/).
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
     * @summary: Send verification link to mobile
     * @description: Use this API to send a verification link to a mobile number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToMobile/).
     */
    sendVerificationLinkToMobile({ body, platform, requestHeaders }?: UserApplicationValidator.SendVerificationLinkToMobileParam, { responseHeaders }?: object): Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SetEmailAsPrimaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setEmailAsPrimary
     * @summary: Set email as primary
     * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setEmailAsPrimary/).
     */
    setEmailAsPrimary({ body, requestHeaders }?: UserApplicationValidator.SetEmailAsPrimaryParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.SetMobileNumberAsPrimaryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setMobileNumberAsPrimary
     * @summary: Set mobile as primary
     * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setMobileNumberAsPrimary/).
     */
    setMobileNumberAsPrimary({ body, requestHeaders }?: UserApplicationValidator.SetMobileNumberAsPrimaryParam, { responseHeaders }?: object): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.UpdatePasswordParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name updatePassword
     * @summary: Update user password
     * @description: Use this API to update the password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updatePassword/).
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
    updateProfile({ body, platform, requestHeaders }?: UserApplicationValidator.UpdateProfileParam, { responseHeaders }?: object): Promise<UserApplicationModel.ProfileEditSuccess>;
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
     * @summary: Verify email
     * @description: Use this API to send a verification code to verify an email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmail/).
     */
    verifyEmail({ body, requestHeaders }?: UserApplicationValidator.VerifyEmailParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailForgotOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyForgotOtpSuccess>} - Success response
     * @name verifyEmailForgotOTP
     * @summary: Verify Forgot OTP on email
     * @description: Use this API to verify the Forgot OTP received on an email ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailForgotOTP/).
     */
    verifyEmailForgotOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyEmailForgotOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyForgotOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyEmailOTP
     * @summary: Verify OTP on email
     * @description: Use this API to verify the OTP received on an email ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailOTP/).
     */
    verifyEmailOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyEmailOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyMobile
     * @summary: Verify mobile
     * @description: Use this API to send a verification code to verify a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobile/).
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
    verifyMobileForgotOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyMobileForgotOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyForgotOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileOTPParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify OTP on mobile
     * @description: Use this API to verify the OTP received on a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, platform, requestHeaders }?: UserApplicationValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<UserApplicationModel.VerifyOtpSuccess>;
}
import UserApplicationValidator = require("./UserApplicationValidator");
import UserApplicationModel = require("./UserApplicationModel");
