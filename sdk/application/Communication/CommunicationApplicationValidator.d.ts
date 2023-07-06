export = CommunicationApplicationValidator;
/** @typedef GetCommunicationConsentParam */
/**
 * @typedef UpsertAppPushtokenParam
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */
/**
 * @typedef UpsertCommunicationConsentParam
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */
declare class CommunicationApplicationValidator {
    /** @returns {getCommunicationConsent} */
    static getCommunicationConsent(): getCommunicationConsent;
    /** @returns {upsertAppPushtoken} */
    static upsertAppPushtoken(): upsertAppPushtoken;
    /** @returns {upsertCommunicationConsent} */
    static upsertCommunicationConsent(): upsertCommunicationConsent;
}
declare namespace CommunicationApplicationValidator {
    export { GetCommunicationConsentParam, UpsertAppPushtokenParam, UpsertCommunicationConsentParam };
}
type GetCommunicationConsentParam = any;
type UpsertAppPushtokenParam = {
    body: CommunicationApplicationModel.PushtokenReq;
};
type UpsertCommunicationConsentParam = {
    body: CommunicationApplicationModel.CommunicationConsentReq;
};
import CommunicationApplicationModel = require("./CommunicationApplicationModel");
