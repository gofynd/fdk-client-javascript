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
        verifyEmail: string;
        verifyEmailOTP: string;
        verifyMobile: string;
        verifyMobileOTP: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditEmailRequestSchema} arg.body
     * @returns {Promise<VerifyEmailOTPSuccess>} - Success response
     * @summary: Add email to profile
     * @description: Use this API to add a new email address to a profile
     */
    addEmail({ body, platform }?: {
        platform?: string;
        body: EditEmailRequestSchema;
    }): Promise<VerifyEmailOTPSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditMobileRequestSchema} arg.body
     * @returns {Promise<VerifyMobileOTPSuccess>} - Success response
     * @summary: Add mobile number to profile
     * @description: Use this API to add a new mobile number to a profile.
     */
    addMobileNumber({ body, platform }?: {
        platform?: string;
        body: EditMobileRequestSchema;
    }): Promise<VerifyMobileOTPSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {boolean} arg.active - This is a boolean value to check if email
     *   ID is active 1. True - Email ID is active 2.False - Email ID is inactive
     * @param {boolean} arg.primary - This is a boolean value to check if email
     *   ID is primary (main email ID) 1. True - Email ID is primary 2.False -
     *   Email ID is not primary
     * @param {boolean} arg.verified - This is a boolean value to check if email
     *   ID is verified 1. True - Email ID is verified 2.False - Email ID is not
     *   verified yet
     * @param {string} arg.email - The email ID to delete
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Delete email from profile
     * @description: Use this API to delete an email address from a profile
     */
    deleteEmail({ active, primary, verified, email, platform }?: {
        platform?: string;
        active: boolean;
        primary: boolean;
        verified: boolean;
        email: string;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {boolean} arg.active - This is a boolean value to check if mobile
     *   number is active 1.True - Number is active 2. False - Number is inactive
     * @param {boolean} arg.primary - This is a boolean value to check if mobile
     *   number is primary number (main number) 1. True - Number is primary 2.
     *   False - Number is not primary
     * @param {boolean} arg.verified - This is a boolean value to check if
     *   mobile number is verified 1. True - Number is verified 2.False - Number
     *   is not verified yet
     * @param {string} arg.countryCode - Country code of the phone number, e.g. 91
     * @param {string} arg.phone - Phone number
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Delete mobile number from profile
     * @description: Use this API to delete a mobile number from a profile.
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, }?: {
        platform?: string;
        active: boolean;
        primary: boolean;
        verified: boolean;
        countryCode: string;
        phone: string;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DeleteApplicationUserRequestSchema} arg.body
     * @returns {Promise<DeleteUserSuccess>} - Success response
     * @summary: verify otp and delete user
     * @description: verify otp and delete user
     */
    deleteUser({ body }?: {
        body: DeleteApplicationUserRequestSchema;
    }): Promise<DeleteUserSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ForgotPasswordRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS.
     */
    forgotPassword({ body }?: {
        body: ForgotPasswordRequestSchema;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SessionListSuccess>} - Success response
     * @summary: Get list of sessions
     * @description: Use this API to retrieve all active sessions of a user.
     */
    getListOfActiveSessions({}?: any): Promise<SessionListSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<UserObjectSchema>} - Success response
     * @summary: Get logged in user
     * @description: Use this API  to get the details of a logged in user.
     */
    getLoggedInUser({}?: any): Promise<UserObjectSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.name] - Name of the application, e.g. Fynd
     * @returns {Promise<PlatformSchema>} - Success response
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({ name }?: {
        name?: string;
    }): Promise<PlatformSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<HasPasswordSuccess>} - Success response
     * @summary: Check password
     * @description: Use this API to check if user has created a password for login.
     */
    hasPassword({}?: any): Promise<HasPasswordSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {OAuthRequestAppleSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Apple on iOS
     * @description: Use this API to login or register in iOS app using Apple Account credentials.
     */
    loginWithAppleIOS({ body, platform }?: {
        platform?: string;
        body: OAuthRequestAppleSchema;
    }): Promise<AuthSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PasswordLoginRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Login or Register with password
     * @description: Use this API to login or register using an email address and password.
     */
    loginWithEmailAndPassword({ body }?: {
        body: PasswordLoginRequestSchema;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Facebook
     * @description: Use this API to login or register using Facebook credentials.
     */
    loginWithFacebook({ body, platform }?: {
        platform?: string;
        body: OAuthRequestSchema;
    }): Promise<AuthSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Google
     * @description: Use this API to login or register using Google Account credentials.
     */
    loginWithGoogle({ body, platform }?: {
        platform?: string;
        body: OAuthRequestSchema;
    }): Promise<AuthSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Google on Android
     * @description: Use this API to login or register in Android app using Google Account credentials.
     */
    loginWithGoogleAndroid({ body, platform }?: {
        platform?: string;
        body: OAuthRequestSchema;
    }): Promise<AuthSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Google on iOS
     * @description: Use this API to login or register in iOS app using Google Account credentials.
     */
    loginWithGoogleIOS({ body, platform }?: {
        platform?: string;
        body: OAuthRequestSchema;
    }): Promise<AuthSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendOtpRequestSchema} arg.body
     * @returns {Promise<SendOtpResponse>} - Success response
     * @summary: Login or Register with OTP
     * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
     */
    loginWithOTP({ body, platform }?: {
        platform?: string;
        body: SendOtpRequestSchema;
    }): Promise<SendOtpResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenRequestBodySchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Login or Register with token
     * @description: Use this API to login or register using a token for authentication.
     */
    loginWithToken({ body }?: {
        body: TokenRequestBodySchema;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<LogoutSuccess>} - Success response
     * @summary: Logs out currently logged in user
     * @description: Use this API to check to logout a user from the app.
     */
    logout({}?: any): Promise<LogoutSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {FormRegisterRequestSchema} arg.body
     * @returns {Promise<RegisterFormSuccess>} - Success response
     * @summary: Registration using a form
     * @description: Use this API to perform user registration by sending form data in the request body.
     */
    registerWithForm({ body, platform }?: {
        platform?: string;
        body: FormRegisterRequestSchema;
    }): Promise<RegisterFormSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendEmailOtpRequestSchema} arg.body
     * @returns {Promise<EmailOtpSuccess>} - Success response
     * @summary: Send OTP on email
     * @description: Use this API to send an OTP to an email ID.
     */
    sendOTPOnEmail({ body, platform }?: {
        platform?: string;
        body: SendEmailOtpRequestSchema;
    }): Promise<EmailOtpSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendMobileOtpRequestSchema} arg.body
     * @returns {Promise<OtpSuccess>} - Success response
     * @summary: Send OTP on mobile
     * @description: Use this API to send an OTP to a mobile number.
     */
    sendOTPOnMobile({ body, platform }?: {
        platform?: string;
        body: SendMobileOtpRequestSchema;
    }): Promise<OtpSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendResetPasswordEmailRequestSchema} arg.body
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on email.
     */
    sendResetPasswordEmail({ body, platform }?: {
        platform?: string;
        body: SendResetPasswordEmailRequestSchema;
    }): Promise<ResetPasswordSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendResetPasswordMobileRequestSchema} arg.body
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on mobile.
     */
    sendResetPasswordMobile({ body, platform }?: {
        platform?: string;
        body: SendResetPasswordMobileRequestSchema;
    }): Promise<ResetPasswordSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CodeRequestBodySchema} arg.body
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @summary: Reset Password using token
     * @description: Use this API to send code to reset password.
     */
    sendResetToken({ body }?: {
        body: CodeRequestBodySchema;
    }): Promise<ResetPasswordSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditEmailRequestSchema} arg.body
     * @returns {Promise<SendEmailVerifyLinkSuccess>} - Success response
     * @summary: Send verification link to email
     * @description: Use this API to send verification link to an email address.
     */
    sendVerificationLinkToEmail({ body, platform }?: {
        platform?: string;
        body: EditEmailRequestSchema;
    }): Promise<SendEmailVerifyLinkSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     * @returns {Promise<SendMobileVerifyLinkSuccess>} - Success response
     * @summary: Send verification link to mobile
     * @description: Use this API to send a verification link to a mobile number
     */
    sendVerificationLinkToMobile({ body, platform }?: {
        platform?: string;
        body: SendVerificationLinkMobileRequestSchema;
    }): Promise<SendMobileVerifyLinkSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EditEmailRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Set email as primary
     * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
     */
    setEmailAsPrimary({ body }?: {
        body: EditEmailRequestSchema;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Set mobile as primary
     * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
     */
    setMobileNumberAsPrimary({ body }?: {
        body: SendVerificationLinkMobileRequestSchema;
    }): Promise<LoginSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdatePasswordRequestSchema} arg.body
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @summary: Update user password
     * @description: Use this API to update the password.
     */
    updatePassword({ body }?: {
        body: UpdatePasswordRequestSchema;
    }): Promise<VerifyEmailSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditProfileRequestSchema} arg.body
     * @returns {Promise<ProfileEditSuccess>} - Success response
     * @summary: Edit Profile Details
     * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
     */
    updateProfile({ body, platform }?: {
        platform?: string;
        body: EditProfileRequestSchema;
    }): Promise<ProfileEditSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CodeRequestBodySchema} arg.body
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @summary: Verify email
     * @description: Use this API to send a verification code to verify an email.
     */
    verifyEmail({ body }?: {
        body: CodeRequestBodySchema;
    }): Promise<VerifyEmailSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {VerifyEmailOtpRequestSchema} arg.body
     * @returns {Promise<VerifyOtpSuccess>} - Success response
     * @summary: Verify OTP on email
     * @description: Use this API to verify the OTP received on an email ID.
     */
    verifyEmailOTP({ body, platform }?: {
        platform?: string;
        body: VerifyEmailOtpRequestSchema;
    }): Promise<VerifyOtpSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CodeRequestBodySchema} arg.body
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @summary: Verify mobile
     * @description: Use this API to send a verification code to verify a mobile number.
     */
    verifyMobile({ body }?: {
        body: CodeRequestBodySchema;
    }): Promise<VerifyEmailSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {VerifyOtpRequestSchema} arg.body
     * @returns {Promise<VerifyOtpSuccess>} - Success response
     * @summary: Verify OTP on mobile
     * @description: Use this API to verify the OTP received on a mobile number.
     */
    verifyMobileOTP({ body, platform }?: {
        platform?: string;
        body: VerifyOtpRequestSchema;
    }): Promise<VerifyOtpSuccess>;
}
