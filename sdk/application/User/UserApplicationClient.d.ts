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
     * @param {UserApplicationValidator.addEmail} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyEmailOTPSuccess>} - Success response
     * @name addEmail
     * @summary: Add email to profile
     * @description: Use this API to add a new email address to a profile
     */
    addEmail({ body, platform }?: UserApplicationValidator.addEmail): Promise<UserApplicationModel.VerifyEmailOTPSuccess>;
    /**
     * @param {UserApplicationValidator.addMobileNumber} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
     * @name addMobileNumber
     * @summary: Add mobile number to profile
     * @description: Use this API to add a new mobile number to a profile.
     */
    addMobileNumber({ body, platform }?: UserApplicationValidator.addMobileNumber): Promise<UserApplicationModel.VerifyMobileOTPSuccess>;
    /**
     * @param {UserApplicationValidator.deleteEmail} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteEmail
     * @summary: Delete email from profile
     * @description: Use this API to delete an email address from a profile
     */
    deleteEmail({ active, primary, verified, email, platform }?: UserApplicationValidator.deleteEmail): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.deleteMobileNumber} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteMobileNumber
     * @summary: Delete mobile number from profile
     * @description: Use this API to delete a mobile number from a profile.
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, }?: UserApplicationValidator.deleteMobileNumber): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.deleteUser} arg - Arg object.
     * @returns {Promise<UserApplicationModel.DeleteUserSuccess>} - Success response
     * @name deleteUser
     * @summary: verify otp and delete user
     * @description: verify otp and delete user
     */
    deleteUser({ body }?: UserApplicationValidator.deleteUser): Promise<UserApplicationModel.DeleteUserSuccess>;
    /**
     * @param {UserApplicationValidator.forgotPassword} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name forgotPassword
     * @summary: Forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS.
     */
    forgotPassword({ body }?: UserApplicationValidator.forgotPassword): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.getListOfActiveSessions} arg - Arg object.
     * @returns {Promise<UserApplicationModel.SessionListSuccess>} - Success response
     * @name getListOfActiveSessions
     * @summary: Get list of sessions
     * @description: Use this API to retrieve all active sessions of a user.
     */
    getListOfActiveSessions({}?: any): Promise<UserApplicationModel.SessionListSuccess>;
    /**
     * @param {UserApplicationValidator.getLoggedInUser} arg - Arg object.
     * @returns {Promise<UserApplicationModel.UserObjectSchema>} - Success response
     * @name getLoggedInUser
     * @summary: Get logged in user
     * @description: Use this API  to get the details of a logged in user.
     */
    getLoggedInUser({}?: any): Promise<UserApplicationModel.UserObjectSchema>;
    /**
     * @param {UserApplicationValidator.getPlatformConfig} arg - Arg object.
     * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({ name }?: UserApplicationValidator.getPlatformConfig): Promise<UserApplicationModel.PlatformSchema>;
    /**
     * @param {UserApplicationValidator.hasPassword} arg - Arg object.
     * @returns {Promise<UserApplicationModel.HasPasswordSuccess>} - Success response
     * @name hasPassword
     * @summary: Check password
     * @description: Use this API to check if user has created a password for login.
     */
    hasPassword({}?: any): Promise<UserApplicationModel.HasPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithAppleIOS} arg - Arg object.
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithAppleIOS
     * @summary: Login or Register using Apple on iOS
     * @description: Use this API to login or register in iOS app using Apple Account credentials.
     */
    loginWithAppleIOS({ body, platform }?: UserApplicationValidator.loginWithAppleIOS): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithEmailAndPassword} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithEmailAndPassword
     * @summary: Login or Register with password
     * @description: Use this API to login or register using an email address and password.
     */
    loginWithEmailAndPassword({ body }?: UserApplicationValidator.loginWithEmailAndPassword): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithFacebook} arg - Arg object.
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithFacebook
     * @summary: Login or Register using Facebook
     * @description: Use this API to login or register using Facebook credentials.
     */
    loginWithFacebook({ body, platform }?: UserApplicationValidator.loginWithFacebook): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithGoogle} arg - Arg object.
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogle
     * @summary: Login or Register using Google
     * @description: Use this API to login or register using Google Account credentials.
     */
    loginWithGoogle({ body, platform }?: UserApplicationValidator.loginWithGoogle): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithGoogleAndroid} arg - Arg object.
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleAndroid
     * @summary: Login or Register using Google on Android
     * @description: Use this API to login or register in Android app using Google Account credentials.
     */
    loginWithGoogleAndroid({ body, platform }?: UserApplicationValidator.loginWithGoogleAndroid): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithGoogleIOS} arg - Arg object.
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleIOS
     * @summary: Login or Register using Google on iOS
     * @description: Use this API to login or register in iOS app using Google Account credentials.
     */
    loginWithGoogleIOS({ body, platform }?: UserApplicationValidator.loginWithGoogleIOS): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.loginWithOTP} arg - Arg object.
     * @returns {Promise<UserApplicationModel.SendOtpResponse>} - Success response
     * @name loginWithOTP
     * @summary: Login or Register with OTP
     * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
     */
    loginWithOTP({ body, platform }?: UserApplicationValidator.loginWithOTP): Promise<UserApplicationModel.SendOtpResponse>;
    /**
     * @param {UserApplicationValidator.loginWithToken} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithToken
     * @summary: Login or Register with token
     * @description: Use this API to login or register using a token for authentication.
     */
    loginWithToken({ body }?: UserApplicationValidator.loginWithToken): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.logout} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LogoutSuccess>} - Success response
     * @name logout
     * @summary: Logs out currently logged in user
     * @description: Use this API to check to logout a user from the app.
     */
    logout({}?: any): Promise<UserApplicationModel.LogoutSuccess>;
    /**
     * @param {UserApplicationValidator.registerWithForm} arg - Arg object.
     * @returns {Promise<UserApplicationModel.RegisterFormSuccess>} - Success response
     * @name registerWithForm
     * @summary: Registration using a form
     * @description: Use this API to perform user registration by sending form data in the request body.
     */
    registerWithForm({ body, platform }?: UserApplicationValidator.registerWithForm): Promise<UserApplicationModel.RegisterFormSuccess>;
    /**
     * @param {UserApplicationValidator.sendOTPOnEmail} arg - Arg object.
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendOTPOnEmail
     * @summary: Send OTP on email
     * @description: Use this API to send an OTP to an email ID.
     */
    sendOTPOnEmail({ body, platform }?: UserApplicationValidator.sendOTPOnEmail): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.sendOTPOnMobile} arg - Arg object.
     * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
     * @name sendOTPOnMobile
     * @summary: Send OTP on mobile
     * @description: Use this API to send an OTP to a mobile number.
     */
    sendOTPOnMobile({ body, platform }?: UserApplicationValidator.sendOTPOnMobile): Promise<UserApplicationModel.OtpSuccess>;
    /**
     * @param {UserApplicationValidator.sendResetPasswordEmail} arg - Arg object.
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordEmail
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on email.
     */
    sendResetPasswordEmail({ body, platform }?: UserApplicationValidator.sendResetPasswordEmail): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.sendResetPasswordMobile} arg - Arg object.
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordMobile
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on mobile.
     */
    sendResetPasswordMobile({ body, platform }?: UserApplicationValidator.sendResetPasswordMobile): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.sendResetToken} arg - Arg object.
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetToken
     * @summary: Reset Password using token
     * @description: Use this API to send code to reset password.
     */
    sendResetToken({ body }?: UserApplicationValidator.sendResetToken): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.sendVerificationLinkToEmail} arg - Arg object.
     * @returns {Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToEmail
     * @summary: Send verification link to email
     * @description: Use this API to send verification link to an email address.
     */
    sendVerificationLinkToEmail({ body, platform }?: UserApplicationValidator.sendVerificationLinkToEmail): Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.sendVerificationLinkToMobile} arg - Arg object.
     * @returns {Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToMobile
     * @summary: Send verification link to mobile
     * @description: Use this API to send a verification link to a mobile number
     */
    sendVerificationLinkToMobile({ body, platform }?: UserApplicationValidator.sendVerificationLinkToMobile): Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.setEmailAsPrimary} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setEmailAsPrimary
     * @summary: Set email as primary
     * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
     */
    setEmailAsPrimary({ body }?: UserApplicationValidator.setEmailAsPrimary): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.setMobileNumberAsPrimary} arg - Arg object.
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setMobileNumberAsPrimary
     * @summary: Set mobile as primary
     * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
     */
    setMobileNumberAsPrimary({ body }?: UserApplicationValidator.setMobileNumberAsPrimary): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.updatePassword} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name updatePassword
     * @summary: Update user password
     * @description: Use this API to update the password.
     */
    updatePassword({ body }?: UserApplicationValidator.updatePassword): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.updateProfile} arg - Arg object.
     * @returns {Promise<UserApplicationModel.ProfileEditSuccess>} - Success response
     * @name updateProfile
     * @summary: Edit Profile Details
     * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
     */
    updateProfile({ body, platform }?: UserApplicationValidator.updateProfile): Promise<UserApplicationModel.ProfileEditSuccess>;
    /**
     * @param {UserApplicationValidator.verifyEmail} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyEmail
     * @summary: Verify email
     * @description: Use this API to send a verification code to verify an email.
     */
    verifyEmail({ body }?: UserApplicationValidator.verifyEmail): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.verifyEmailOTP} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyEmailOTP
     * @summary: Verify OTP on email
     * @description: Use this API to verify the OTP received on an email ID.
     */
    verifyEmailOTP({ body, platform }?: UserApplicationValidator.verifyEmailOTP): Promise<UserApplicationModel.VerifyOtpSuccess>;
    /**
     * @param {UserApplicationValidator.verifyMobile} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyMobile
     * @summary: Verify mobile
     * @description: Use this API to send a verification code to verify a mobile number.
     */
    verifyMobile({ body }?: UserApplicationValidator.verifyMobile): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.verifyMobileOTP} arg - Arg object.
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify OTP on mobile
     * @description: Use this API to verify the OTP received on a mobile number.
     */
    verifyMobileOTP({ body, platform }?: UserApplicationValidator.verifyMobileOTP): Promise<UserApplicationModel.VerifyOtpSuccess>;
}
import UserApplicationValidator = require("./UserApplicationValidator");
import UserApplicationModel = require("./UserApplicationModel");
