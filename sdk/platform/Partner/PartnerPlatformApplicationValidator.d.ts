export = PartnerPlatformApplicationValidator;
/**
 * @typedef addProxyPath
 * @property {string} extensionId - Extension id for which proxy URL will be generated
 * @property {PartnerPlatformModel.AddProxyReq} body
 */
/**
 * @typedef removeProxyPath
 * @property {string} extensionId - Extension id for which proxy URL needs to be removed
 * @property {string} attachedPath - Attachaed path slug
 */
declare class PartnerPlatformApplicationValidator {
}
declare namespace PartnerPlatformApplicationValidator {
    export { addProxyPath, removeProxyPath };
}
/** @returns {addProxyPath} */
declare function addProxyPath(): addProxyPath;
type addProxyPath = {
    /**
     * - Extension id for which proxy URL will be generated
     */
    extensionId: string;
    body: PartnerPlatformModel.AddProxyReq;
};
/** @returns {removeProxyPath} */
declare function removeProxyPath(): removeProxyPath;
type removeProxyPath = {
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
