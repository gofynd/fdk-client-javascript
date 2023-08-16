export = Communication;
declare class Communication {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SystemNotifications>} - Success response
     * @summary: Get system notifications
     * @description: Get system notifications
     */
    getSystemNotifications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SystemNotifications>;
}
