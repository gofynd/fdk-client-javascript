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
    /** @returns {GetCommunicationConsentParam} */
    static getCommunicationConsent(): any;
    /** @returns {UpsertAppPushtokenParam} */
    static upsertAppPushtoken(): UpsertAppPushtokenParam;
    /** @returns {UpsertCommunicationConsentParam} */
    static upsertCommunicationConsent(): UpsertCommunicationConsentParam;
}
declare namespace CommunicationApplicationValidator {
    export { GetCommunicationConsentParam, UpsertAppPushtokenParam, UpsertCommunicationConsentParam };
}
type UpsertAppPushtokenParam = {
    body: CommunicationApplicationModel.PushtokenReq;
};
type UpsertCommunicationConsentParam = {
    body: CommunicationApplicationModel.CommunicationConsentReq;
};
type GetCommunicationConsentParam = any;
import CommunicationApplicationModel = require("./CommunicationApplicationModel");
