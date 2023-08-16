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
     * @param {UserApplicationValidator.AddEmailParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailOTPSuccess>} - Success response
     * @name addEmail
     * @summary: Add email to profile
     * @description: Use this API to add a new email address to a profile - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addEmail/).
     */
    addEmail({ body, platform }?: UserApplicationValidator.AddEmailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyEmailOTPSuccess>;
    /**
     * @param {UserApplicationValidator.AddMobileNumberParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyMobileOTPSuccess>} - Success response
     * @name addMobileNumber
     * @summary: Add mobile number to profile
     * @description: Use this API to add a new mobile number to a profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/addMobileNumber/).
     */
    addMobileNumber({ body, platform }?: UserApplicationValidator.AddMobileNumberParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyMobileOTPSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteEmailParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteEmail
     * @summary: Delete email from profile
     * @description: Use this API to delete an email address from a profile - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteEmail/).
     */
    deleteEmail({ active, primary, verified, email, platform }?: UserApplicationValidator.DeleteEmailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteMobileNumberParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name deleteMobileNumber
     * @summary: Delete mobile number from profile
     * @description: Use this API to delete a mobile number from a profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteMobileNumber/).
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform }?: UserApplicationValidator.DeleteMobileNumberParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.DeleteUserParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.DeleteUserSuccess>} - Success response
     * @name deleteUser
     * @summary: verify otp and delete user
     * @description: verify otp and delete user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/deleteUser/).
     */
    deleteUser({ body }?: UserApplicationValidator.DeleteUserParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.DeleteUserSuccess>;
    /**
     * @param {UserApplicationValidator.ForgotPasswordParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name forgotPassword
     * @summary: Forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/forgotPassword/).
     */
    forgotPassword({ body }?: UserApplicationValidator.ForgotPasswordParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SessionListSuccess>} - Success response
     * @name getListOfActiveSessions
     * @summary: Get list of sessions
     * @description: Use this API to retrieve all active sessions of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getListOfActiveSessions/).
     */
    getListOfActiveSessions({ headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.SessionListSuccess>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.UserObjectSchema>} - Success response
     * @name getLoggedInUser
     * @summary: Get logged in user
     * @description: Use this API  to get the details of a logged in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getLoggedInUser/).
     */
    getLoggedInUser({ headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.UserObjectSchema>;
    /**
     * @param {UserApplicationValidator.GetPlatformConfigParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/getPlatformConfig/).
     */
    getPlatformConfig({ name }?: UserApplicationValidator.GetPlatformConfigParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.PlatformSchema>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.HasPasswordSuccess>} - Success response
     * @name hasPassword
     * @summary: Check password
     * @description: Use this API to check if user has created a password for login. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/hasPassword/).
     */
    hasPassword({ headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.HasPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithAppleIOSParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithAppleIOS
     * @summary: Login or Register using Apple on iOS
     * @description: Use this API to login or register in iOS app using Apple Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithAppleIOS/).
     */
    loginWithAppleIOS({ body, platform }?: UserApplicationValidator.LoginWithAppleIOSParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithEmailAndPasswordParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithEmailAndPassword
     * @summary: Login or Register with password
     * @description: Use this API to login or register using an email address and password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithEmailAndPassword/).
     */
    loginWithEmailAndPassword({ body }?: UserApplicationValidator.LoginWithEmailAndPasswordParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithFacebookParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithFacebook
     * @summary: Login or Register using Facebook
     * @description: Use this API to login or register using Facebook credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithFacebook/).
     */
    loginWithFacebook({ body, platform }?: UserApplicationValidator.LoginWithFacebookParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogle
     * @summary: Login or Register using Google
     * @description: Use this API to login or register using Google Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogle/).
     */
    loginWithGoogle({ body, platform }?: UserApplicationValidator.LoginWithGoogleParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleAndroidParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleAndroid
     * @summary: Login or Register using Google on Android
     * @description: Use this API to login or register in Android app using Google Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleAndroid/).
     */
    loginWithGoogleAndroid({ body, platform }?: UserApplicationValidator.LoginWithGoogleAndroidParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithGoogleIOSParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.AuthSuccess>} - Success response
     * @name loginWithGoogleIOS
     * @summary: Login or Register using Google on iOS
     * @description: Use this API to login or register in iOS app using Google Account credentials. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithGoogleIOS/).
     */
    loginWithGoogleIOS({ body, platform }?: UserApplicationValidator.LoginWithGoogleIOSParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.AuthSuccess>;
    /**
     * @param {UserApplicationValidator.LoginWithOTPParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendOtpResponse>} - Success response
     * @name loginWithOTP
     * @summary: Login or Register with OTP
     * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithOTP/).
     */
    loginWithOTP({ body, platform }?: UserApplicationValidator.LoginWithOTPParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.SendOtpResponse>;
    /**
     * @param {UserApplicationValidator.LoginWithTokenParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name loginWithToken
     * @summary: Login or Register with token
     * @description: Use this API to login or register using a token for authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/loginWithToken/).
     */
    loginWithToken({ body }?: UserApplicationValidator.LoginWithTokenParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LogoutSuccess>} - Success response
     * @name logout
     * @summary: Logs out currently logged in user
     * @description: Use this API to check to logout a user from the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/logout/).
     */
    logout({ headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LogoutSuccess>;
    /**
     * @param {UserApplicationValidator.RegisterWithFormParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.RegisterFormSuccess>} - Success response
     * @name registerWithForm
     * @summary: Registration using a form
     * @description: Use this API to perform user registration by sending form data in the request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/registerWithForm/).
     */
    registerWithForm({ body, platform }?: UserApplicationValidator.RegisterWithFormParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.RegisterFormSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnEmailParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.EmailOtpSuccess>} - Success response
     * @name sendOTPOnEmail
     * @summary: Send OTP on email
     * @description: Use this API to send an OTP to an email ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnEmail/).
     */
    sendOTPOnEmail({ body, platform }?: UserApplicationValidator.SendOTPOnEmailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.EmailOtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendOTPOnMobileParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.OtpSuccess>} - Success response
     * @name sendOTPOnMobile
     * @summary: Send OTP on mobile
     * @description: Use this API to send an OTP to a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendOTPOnMobile/).
     */
    sendOTPOnMobile({ body, platform }?: UserApplicationValidator.SendOTPOnMobileParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.OtpSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordEmailParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordEmail
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordEmail/).
     */
    sendResetPasswordEmail({ body, platform }?: UserApplicationValidator.SendResetPasswordEmailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetPasswordMobileParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetPasswordMobile
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on mobile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetPasswordMobile/).
     */
    sendResetPasswordMobile({ body, platform }?: UserApplicationValidator.SendResetPasswordMobileParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendResetTokenParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ResetPasswordSuccess>} - Success response
     * @name sendResetToken
     * @summary: Reset Password using token
     * @description: Use this API to send code to reset password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendResetToken/).
     */
    sendResetToken({ body }?: UserApplicationValidator.SendResetTokenParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.ResetPasswordSuccess>;
    /**
     * @param {UserApplicationValidator.SendVerificationLinkToEmailParam} arg -
     *   Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToEmail
     * @summary: Send verification link to email
     * @description: Use this API to send verification link to an email address. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToEmail/).
     */
    sendVerificationLinkToEmail({ body, platform }?: UserApplicationValidator.SendVerificationLinkToEmailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.SendEmailVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SendVerificationLinkToMobileParam} arg
     *   - Arg object.
     *
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>} -
     *   Success response
     * @name sendVerificationLinkToMobile
     * @summary: Send verification link to mobile
     * @description: Use this API to send a verification link to a mobile number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/sendVerificationLinkToMobile/).
     */
    sendVerificationLinkToMobile({ body, platform }?: UserApplicationValidator.SendVerificationLinkToMobileParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.SendMobileVerifyLinkSuccess>;
    /**
     * @param {UserApplicationValidator.SetEmailAsPrimaryParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setEmailAsPrimary
     * @summary: Set email as primary
     * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setEmailAsPrimary/).
     */
    setEmailAsPrimary({ body }?: UserApplicationValidator.SetEmailAsPrimaryParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.SetMobileNumberAsPrimaryParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.LoginSuccess>} - Success response
     * @name setMobileNumberAsPrimary
     * @summary: Set mobile as primary
     * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/setMobileNumberAsPrimary/).
     */
    setMobileNumberAsPrimary({ body }?: UserApplicationValidator.SetMobileNumberAsPrimaryParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.LoginSuccess>;
    /**
     * @param {UserApplicationValidator.UpdatePasswordParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name updatePassword
     * @summary: Update user password
     * @description: Use this API to update the password. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updatePassword/).
     */
    updatePassword({ body }?: UserApplicationValidator.UpdatePasswordParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.UpdateProfileParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.ProfileEditSuccess>} - Success response
     * @name updateProfile
     * @summary: Edit Profile Details
     * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/updateProfile/).
     */
    updateProfile({ body, platform }?: UserApplicationValidator.UpdateProfileParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.ProfileEditSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyEmail
     * @summary: Verify email
     * @description: Use this API to send a verification code to verify an email. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmail/).
     */
    verifyEmail({ body }?: UserApplicationValidator.VerifyEmailParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyEmailOTPParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyEmailOTP
     * @summary: Verify OTP on email
     * @description: Use this API to verify the OTP received on an email ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyEmailOTP/).
     */
    verifyEmailOTP({ body, platform }?: UserApplicationValidator.VerifyEmailOTPParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyOtpSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyEmailSuccess>} - Success response
     * @name verifyMobile
     * @summary: Verify mobile
     * @description: Use this API to send a verification code to verify a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobile/).
     */
    verifyMobile({ body }?: UserApplicationValidator.VerifyMobileParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyEmailSuccess>;
    /**
     * @param {UserApplicationValidator.VerifyMobileOTPParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<UserApplicationModel.VerifyOtpSuccess>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify OTP on mobile
     * @description: Use this API to verify the OTP received on a mobile number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/user/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, platform }?: UserApplicationValidator.VerifyMobileOTPParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<UserApplicationModel.VerifyOtpSuccess>;
}
import UserApplicationValidator = require("./UserApplicationValidator");
import UserApplicationModel = require("./UserApplicationModel");
