export = Communication;
declare class Communication {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getCommunicationConsent: string;
        upsertAppPushtoken: string;
        upsertCommunicationConsent: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
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
}
import CommunicationApplicationModel = require("./CommunicationApplicationModel");
import CommunicationApplicationValidator = require("./CommunicationApplicationValidator");
