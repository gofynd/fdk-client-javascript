export = CommunicationPlatformValidator;
/**
 * @typedef GetSystemNotificationsParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */
declare class CommunicationPlatformValidator {
    /** @returns {getSystemNotifications} */
    static getSystemNotifications(): getSystemNotifications;
}
declare namespace CommunicationPlatformValidator {
    export { GetSystemNotificationsParam };
}
type GetSystemNotificationsParam = {
    pageNo?: number;
    pageSize?: number;
};
