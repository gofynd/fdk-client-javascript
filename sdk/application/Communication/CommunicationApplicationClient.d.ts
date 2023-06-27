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
     * @param {CommunicationApplicationValidator.getCommunicationConsent} arg -
     *   Arg object.
     * @returns {Promise<CommunicationApplicationModel.CommunicationConsent>} -
     *   Success response
     * @name getCommunicationConsent
     * @summary: Get communication consent
     * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
     */
    getCommunicationConsent({}?: any): Promise<CommunicationApplicationModel.CommunicationConsent>;
    /**
     * @param {CommunicationApplicationValidator.upsertAppPushtoken} arg - Arg object.
     * @returns {Promise<CommunicationApplicationModel.PushtokenRes>} - Success response
     * @name upsertAppPushtoken
     * @summary: Upsert push token of a user
     * @description: Use this API to update and insert the push token of the user.
     */
    upsertAppPushtoken({ body }?: CommunicationApplicationValidator.upsertAppPushtoken): Promise<CommunicationApplicationModel.PushtokenRes>;
    /**
     * @param {CommunicationApplicationValidator.upsertCommunicationConsent} arg
     *   - Arg object.
     *
     * @returns {Promise<CommunicationApplicationModel.CommunicationConsentRes>}
     *   - Success response
     *
     * @name upsertCommunicationConsent
     * @summary: Upsert communication consent
     * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
     */
    upsertCommunicationConsent({ body }?: CommunicationApplicationValidator.upsertCommunicationConsent): Promise<CommunicationApplicationModel.CommunicationConsentRes>;
}
import CommunicationApplicationModel = require("./CommunicationApplicationModel");
import CommunicationApplicationValidator = require("./CommunicationApplicationValidator");
