export = CommunicationApplicationValidator;
/** @typedef getCommunicationConsent */
/**
 * @typedef upsertAppPushtoken
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */
/**
 * @typedef upsertCommunicationConsent
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */
declare class CommunicationApplicationValidator {
}
declare namespace CommunicationApplicationValidator {
    export { getCommunicationConsent, upsertAppPushtoken, upsertCommunicationConsent };
}
/** @returns {getCommunicationConsent} */
declare function getCommunicationConsent(): any;
type getCommunicationConsent = any;
/** @returns {upsertAppPushtoken} */
declare function upsertAppPushtoken(): upsertAppPushtoken;
type upsertAppPushtoken = {
    body: CommunicationApplicationModel.PushtokenReq;
};
/** @returns {upsertCommunicationConsent} */
declare function upsertCommunicationConsent(): upsertCommunicationConsent;
type upsertCommunicationConsent = {
    body: CommunicationApplicationModel.CommunicationConsentReq;
};
import CommunicationApplicationModel = require("./CommunicationApplicationModel");
