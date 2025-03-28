export = CommunicationPlatformValidator;
/**
 * @typedef GetSystemNotificationsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
declare class CommunicationPlatformValidator {
    /** @returns {GetSystemNotificationsParam} */
    static getSystemNotifications(): GetSystemNotificationsParam;
}
declare namespace CommunicationPlatformValidator {
    export { GetSystemNotificationsParam };
}
type GetSystemNotificationsParam = {
    /**
     * - Current page no
     */
    pageNo?: number;
    /**
     * - Current request items count
     */
    pageSize?: number;
    /**
     * - To sort based on created_at
     */
    sort?: string;
    /**
     * - To search based on plain text
     */
    query?: string;
};
