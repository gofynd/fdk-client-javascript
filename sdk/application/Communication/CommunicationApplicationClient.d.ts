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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PushtokenRes>} - Success response
     * @name createAppPushtoken
     * @summary: Create app push token.
     * @description: Create the push token of the user. . - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/createAppPushtoken/).
     */
    createAppPushtoken({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PushtokenRes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationConsent>} - Success response
     * @name getCommunicationConsent
     * @summary: Retrieves communication consent status.
     * @description: Get the consent provided by the user for receiving communication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getCommunicationConsent/).
     */
    getCommunicationConsent({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CommunicationConsent>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationConsent>} - Success response
     * @name getCurrentCommunicationConsent
     * @summary: Retrieves communication consent status.
     * @description: Retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp. . - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getCurrentCommunicationConsent/).
     */
    getCurrentCommunicationConsent({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CommunicationConsent>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OtpConfiguration>} - Success response
     * @name getOtpConfiguration
     * @summary: Get otp-configuration, if not present in db then return default settings
     * @description: Get otp-configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/getOtpConfiguration/).
     */
    getOtpConfiguration({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<OtpConfiguration>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PushtokenRes>} - Success response
     * @name upsertAppPushtoken
     * @summary: Updates or adds app push token.
     * @description: Update or inserts the push token of the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertAppPushtoken/).
     */
    upsertAppPushtoken({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PushtokenRes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationConsentRes>} - Success response
     * @name upsertCommunicationConsent
     * @summary: Updates or inserts consent settings.
     * @description: Update or insert the consent provided by the user for receiving communication messages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertCommunicationConsent/).
     */
    upsertCommunicationConsent({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CommunicationConsentRes>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationConsentRes>} - Success response
     * @name upsertCurrentCommunicationConsent
     * @summary: Updates or inserts consent settings.
     * @description: Update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp. . - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/communication/upsertCurrentCommunicationConsent/).
     */
    upsertCurrentCommunicationConsent({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CommunicationConsentRes>;
}
