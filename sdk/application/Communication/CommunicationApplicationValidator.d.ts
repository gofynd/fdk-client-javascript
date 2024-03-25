export = CommunicationApplicationValidator;
/**
 * @typedef CreateAppPushtokenParam
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */
/** @typedef GetCommunicationConsentParam */
/** @typedef GetCurrentCommunicationConsentParam */
/** @typedef GetOtpConfigurationParam */
/**
 * @typedef UpsertAppPushtokenParam
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */
/**
 * @typedef UpsertCommunicationConsentParam
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */
/**
 * @typedef UpsertCurrentCommunicationConsentParam
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */
declare class CommunicationApplicationValidator {
    /** @returns {CreateAppPushtokenParam} */
    static createAppPushtoken(): CreateAppPushtokenParam;
    /** @returns {GetCommunicationConsentParam} */
    static getCommunicationConsent(): any;
    /** @returns {GetCurrentCommunicationConsentParam} */
    static getCurrentCommunicationConsent(): any;
    /** @returns {GetOtpConfigurationParam} */
    static getOtpConfiguration(): any;
    /** @returns {UpsertAppPushtokenParam} */
    static upsertAppPushtoken(): UpsertAppPushtokenParam;
    /** @returns {UpsertCommunicationConsentParam} */
    static upsertCommunicationConsent(): UpsertCommunicationConsentParam;
    /** @returns {UpsertCurrentCommunicationConsentParam} */
    static upsertCurrentCommunicationConsent(): UpsertCurrentCommunicationConsentParam;
}
declare namespace CommunicationApplicationValidator {
    export { CreateAppPushtokenParam, GetCommunicationConsentParam, GetCurrentCommunicationConsentParam, GetOtpConfigurationParam, UpsertAppPushtokenParam, UpsertCommunicationConsentParam, UpsertCurrentCommunicationConsentParam };
}
type CreateAppPushtokenParam = {
    body: CommunicationApplicationModel.PushtokenReq;
};
type UpsertAppPushtokenParam = {
    body: CommunicationApplicationModel.PushtokenReq;
};
type UpsertCommunicationConsentParam = {
    body: CommunicationApplicationModel.CommunicationConsentReq;
};
type UpsertCurrentCommunicationConsentParam = {
    body: CommunicationApplicationModel.CommunicationConsentReq;
};
type GetCommunicationConsentParam = any;
type GetCurrentCommunicationConsentParam = any;
type GetOtpConfigurationParam = any;
import CommunicationApplicationModel = require("sdk/output/javascript/code/sdk/application/Communication/CommunicationApplicationModel");
