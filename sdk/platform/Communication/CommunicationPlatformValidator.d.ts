export = CommunicationPlatformValidator;
/**
 * @typedef GetSystemNotificationsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */
/**
 * @typedef SenByCompanyCommunicationAsynchronouslyParam
 * @property {string} xApplicationId - Application id
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef SendByCompanyCommunicationInstantlyParam
 * @property {string} xApplicationId - Application id
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
/**
 * @typedef SendByCompanyCommunicationSynchronouslyParam
 * @property {string} xApplicationId - Application id
 * @property {CommunicationPlatformModel.EngineRequest} body
 */
declare class CommunicationPlatformValidator {
    /** @returns {GetSystemNotificationsParam} */
    static getSystemNotifications(): GetSystemNotificationsParam;
    /** @returns {SenByCompanyCommunicationAsynchronouslyParam} */
    static senByCompanyCommunicationAsynchronously(): SenByCompanyCommunicationAsynchronouslyParam;
    /** @returns {SendByCompanyCommunicationInstantlyParam} */
    static sendByCompanyCommunicationInstantly(): SendByCompanyCommunicationInstantlyParam;
    /** @returns {SendByCompanyCommunicationSynchronouslyParam} */
    static sendByCompanyCommunicationSynchronously(): SendByCompanyCommunicationSynchronouslyParam;
}
declare namespace CommunicationPlatformValidator {
    export { GetSystemNotificationsParam, SenByCompanyCommunicationAsynchronouslyParam, SendByCompanyCommunicationInstantlyParam, SendByCompanyCommunicationSynchronouslyParam };
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
type SenByCompanyCommunicationAsynchronouslyParam = {
    /**
     * - Application id
     */
    xApplicationId: string;
    body: CommunicationPlatformModel.EngineRequest;
};
type SendByCompanyCommunicationInstantlyParam = {
    /**
     * - Application id
     */
    xApplicationId: string;
    body: CommunicationPlatformModel.EngineRequest;
};
type SendByCompanyCommunicationSynchronouslyParam = {
    /**
     * - Application id
     */
    xApplicationId: string;
    body: CommunicationPlatformModel.EngineRequest;
};
import CommunicationPlatformModel = require("./CommunicationPlatformModel");
