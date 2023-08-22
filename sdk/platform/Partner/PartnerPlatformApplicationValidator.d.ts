export = PartnerPlatformApplicationValidator;
/**
 * @typedef AddProxyPathParam
 * @property {string} extensionId - Extension id for which proxy URL will be generated
 * @property {PartnerPlatformModel.AddProxyReq} body
 */
/**
 * @typedef GetProxyPathParam
 * @property {string} extensionId - Extension id
 */
/**
 * @typedef GetProxyPathAttachedPathParam
 * @property {string} extensionId - Extension id
 * @property {string} attachedPath - Application id
 */
/**
 * @typedef RemoveProxyPathParam
 * @property {string} extensionId - Extension id for which proxy URL needs to be removed
 * @property {string} attachedPath - Attachaed path slug
 */
declare class PartnerPlatformApplicationValidator {
    /** @returns {AddProxyPathParam} */
    static addProxyPath(): AddProxyPathParam;
    /** @returns {GetProxyPathParam} */
    static getProxyPath(): GetProxyPathParam;
    /** @returns {GetProxyPathAttachedPathParam} */
    static getProxyPathAttachedPath(): GetProxyPathAttachedPathParam;
    /** @returns {RemoveProxyPathParam} */
    static removeProxyPath(): RemoveProxyPathParam;
}
declare namespace PartnerPlatformApplicationValidator {
    export { AddProxyPathParam, GetProxyPathParam, GetProxyPathAttachedPathParam, RemoveProxyPathParam };
}
type AddProxyPathParam = {
    /**
     * - Extension id for which proxy URL will be generated
     */
    extensionId: string;
    body: PartnerPlatformModel.AddProxyReq;
};
type GetProxyPathParam = {
    /**
     * - Extension id
     */
    extensionId: string;
};
type GetProxyPathAttachedPathParam = {
    /**
     * - Extension id
     */
    extensionId: string;
    /**
     * - Application id
     */
    attachedPath: string;
};
type RemoveProxyPathParam = {
    /**
     * - Extension id for which proxy URL needs to be removed
     */
    extensionId: string;
    /**
     * - Attachaed path slug
     */
    attachedPath: string;
};
import PartnerPlatformModel = require("./PartnerPlatformModel");
