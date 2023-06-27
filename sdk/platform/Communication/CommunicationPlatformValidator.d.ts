export = CommunicationPlatformValidator;
/**
 * @typedef getSystemNotifications
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */
declare class CommunicationPlatformValidator {
}
declare namespace CommunicationPlatformValidator {
    export { getSystemNotifications };
}
/** @returns {getSystemNotifications} */
declare function getSystemNotifications(): getSystemNotifications;
type getSystemNotifications = {
    pageNo?: number;
    pageSize?: number;
};
