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
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationConsent>} - Success response
     * @summary: Get communication consent
     * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
     */
    getCommunicationConsent({ headers }?: import("../ApplicationAPIClient").Options): Promise<CommunicationConsent>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PushtokenReq} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PushtokenRes>} - Success response
     * @summary: Upsert push token of a user
     * @description: Use this API to update and insert the push token of the user.
     */
    upsertAppPushtoken({ body }?: {
        body: PushtokenReq;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<PushtokenRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CommunicationConsentReq} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommunicationConsentRes>} - Success response
     * @summary: Upsert communication consent
     * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
     */
    upsertCommunicationConsent({ body }?: {
        body: CommunicationConsentReq;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<CommunicationConsentRes>;
}
