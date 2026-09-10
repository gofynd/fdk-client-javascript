export = Authorization;
declare class Authorization {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {AuthorizationPlatformApplicationValidator.GetApplicationStaffListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuthorizationPlatformModel.ApplicationStaffPage>} -
     *   Success response
     * @name getApplicationStaffList
     * @summary: Get a paginated list of application staff
     * @description: Returns a paginated list of staff assigned to a sales channel, including each staff member's name, employee code, incentive eligibility, assigned ordering stores, and title. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/authorization/getApplicationStaffList/).
     */
    getApplicationStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: AuthorizationPlatformApplicationValidator.GetApplicationStaffListParam, { responseHeaders }?: object): Promise<AuthorizationPlatformModel.ApplicationStaffPage>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - The unique identifier for the company.
     * @param {string} arg.applicationId - Unique ID of the application
     * @param {number} [arg.pageSize] - Number of staff members to return per
     *   page. Defaults to 10 and must not exceed 100.
     * @param {boolean} [arg.orderIncent] - Select `true` to retrieve only staff
     *   members eligible for incentives on orders.
     * @param {number} [arg.orderingStore] - Positive integer ID of the ordering
     *   store. Returns staff assigned to that store, plus application staff
     *   with the `admin` role.
     * @param {string} [arg.user] - Unique ID of the user
     * @param {string} [arg.userName] - Filter by the user's first or last name.
     * @returns {Paginator<AuthorizationPlatformModel.ApplicationStaffPage>}
     * @summary: Get a paginated list of application staff
     * @description: Returns a paginated list of staff assigned to a sales channel, including each staff member's name, employee code, incentive eligibility, assigned ordering stores, and title.
     */
    getApplicationStaffListPaginator({ companyId, applicationId, pageSize, orderIncent, orderingStore, user, userName, }?: {
        companyId: number;
        applicationId: string;
        pageSize?: number;
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
        userName?: string;
    }): Paginator<AuthorizationPlatformModel.ApplicationStaffPage>;
}
import AuthorizationPlatformApplicationValidator = require("./AuthorizationPlatformApplicationValidator");
import AuthorizationPlatformModel = require("./AuthorizationPlatformModel");
import Paginator = require("../../common/Paginator");
