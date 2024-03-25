export = Communication;
declare class Communication {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createAppPushtoken: string;
        getCommunicationConsent: string;
        getCurrentCommunicationConsent: string;
        getOtpConfiguration: string;
        upsertAppPushtoken: string;
        upsertCommunicationConsent: string;
        upsertCurrentCommunicationConsent: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {CommunicationApplicationValidator.CreateAppPushtokenParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.PushtokenRes>} - Success response
     * @name createAppPushtoken
     * @summary: Create app push token.
     * @description: Create the push token of the user.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/createAppPushtoken/).
     */
    createAppPushtoken({ body, requestHeaders }?: CommunicationApplicationValidator.CreateAppPushtokenParam, { responseHeaders }?: object): Promise<CommunicationApplicationModel.PushtokenRes>;
    /**
     * @param {CommunicationApplicationValidator.GetCommunicationConsentParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.CommunicationConsent>} -
     *   Success response
     * @name getCommunicationConsent
     * @summary: Retrieves communication consent status.
     * @description: Retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getCommunicationConsent/).
     */
    getCommunicationConsent({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationApplicationModel.CommunicationConsent>;
    /**
     * @param {CommunicationApplicationValidator.GetCurrentCommunicationConsentParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.CommunicationConsent>} -
     *   Success response
     * @name getCurrentCommunicationConsent
     * @summary: Retrieves communication consent status.
     * @description: Retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getCurrentCommunicationConsent/).
     */
    getCurrentCommunicationConsent({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationApplicationModel.CommunicationConsent>;
    /**
     * @param {CommunicationApplicationValidator.GetOtpConfigurationParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.OtpConfiguration>} -
     *   Success response
     * @name getOtpConfiguration
     * @summary: Get otp-configuration, if not present in db then return default settings
     * @description: Get otp-configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getOtpConfiguration/).
     */
    getOtpConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CommunicationApplicationModel.OtpConfiguration>;
    /**
     * @param {CommunicationApplicationValidator.UpsertAppPushtokenParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.PushtokenRes>} - Success response
     * @name upsertAppPushtoken
     * @summary: Updates or adds app push token.
     * @description: Update the push token of the user.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertAppPushtoken/).
     */
    upsertAppPushtoken({ body, requestHeaders }?: CommunicationApplicationValidator.UpsertAppPushtokenParam, { responseHeaders }?: object): Promise<CommunicationApplicationModel.PushtokenRes>;
    /**
     * @param {CommunicationApplicationValidator.UpsertCommunicationConsentParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.CommunicationConsentRes>}
     *   - Success response
     *
     * @name upsertCommunicationConsent
     * @summary: Updates or inserts consent settings.
     * @description: Update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertCommunicationConsent/).
     */
    upsertCommunicationConsent({ body, requestHeaders }?: CommunicationApplicationValidator.UpsertCommunicationConsentParam, { responseHeaders }?: object): Promise<CommunicationApplicationModel.CommunicationConsentRes>;
    /**
     * @param {CommunicationApplicationValidator.UpsertCurrentCommunicationConsentParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationApplicationModel.CommunicationConsentRes>}
     *   - Success response
     *
     * @name upsertCurrentCommunicationConsent
     * @summary: Updates or inserts consent settings.
     * @description: Update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertCurrentCommunicationConsent/).
     */
    upsertCurrentCommunicationConsent({ body, requestHeaders }?: CommunicationApplicationValidator.UpsertCurrentCommunicationConsentParam, { responseHeaders }?: object): Promise<CommunicationApplicationModel.CommunicationConsentRes>;
}
import CommunicationApplicationValidator = require("sdk/output/javascript/code/sdk/application/Communication/CommunicationApplicationValidator");
import CommunicationApplicationModel = require("sdk/output/javascript/code/sdk/application/Communication/CommunicationApplicationModel");
