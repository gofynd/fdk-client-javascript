export = PartnerPlatformApplicationValidator;
/**
 * @typedef AddProxyPathParam
 * @property {string} extensionId - Extension's unique identifier for which a
 *   proxy URL will be generated
 * @property {PartnerPlatformModel.AddProxyReq} body
 */
/**
 * @typedef RemoveProxyPathParam
 * @property {string} extensionId - Extension ID for which proxy URL needs to be removed
 * @property {string} attachedPath - Attached path slug
 */
declare class PartnerPlatformApplicationValidator {
    /** @returns {AddProxyPathParam} */
    static addProxyPath(): AddProxyPathParam;
    /** @returns {RemoveProxyPathParam} */
    static removeProxyPath(): RemoveProxyPathParam;
}
declare namespace PartnerPlatformApplicationValidator {
    export { AddProxyPathParam, RemoveProxyPathParam };
}
type AddProxyPathParam = {
    /**
     * - Extension's unique identifier for which a
     * proxy URL will be generated
     */
    extensionId: string;
    body: PartnerPlatformModel.AddProxyReq;
};
type RemoveProxyPathParam = {
    /**
     * - Extension ID for which proxy URL needs to be removed
     */
    extensionId: string;
    /**
     * - Attached path slug
     */
    attachedPath: string;
};
import PartnerPlatformModel = require("./PartnerPlatformModel");
