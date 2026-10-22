export = AuthorizationPlatformApplicationValidator;
/**
 * @typedef GetApplicationStaffListParam
 * @property {number} [pageNo] - Page number for pagination. Defaults to 1.
 * @property {number} [pageSize] - Number of staff members to return per page.
 *   Defaults to 10 and must not exceed 100.
 * @property {boolean} [orderIncent] - Select `true` to retrieve only staff
 *   members eligible for incentives on orders.
 * @property {number} [orderingStore] - Positive integer ID of the ordering
 *   store. Returns staff assigned to that store, plus application staff with
 *   the `admin` role.
 * @property {string} [user] - Unique ID of the user
 * @property {string} [userName] - Filter by the user's first or last name.
 */
declare class AuthorizationPlatformApplicationValidator {
    /** @returns {GetApplicationStaffListParam} */
    static getApplicationStaffList(): GetApplicationStaffListParam;
}
declare namespace AuthorizationPlatformApplicationValidator {
    export { GetApplicationStaffListParam };
}
type GetApplicationStaffListParam = {
    /**
     * - Page number for pagination. Defaults to 1.
     */
    pageNo?: number;
    /**
     * - Number of staff members to return per page.
     * Defaults to 10 and must not exceed 100.
     */
    pageSize?: number;
    /**
     * - Select `true` to retrieve only staff
     * members eligible for incentives on orders.
     */
    orderIncent?: boolean;
    /**
     * - Positive integer ID of the ordering
     * store. Returns staff assigned to that store, plus application staff with
     * the `admin` role.
     */
    orderingStore?: number;
    /**
     * - Unique ID of the user
     */
    user?: string;
    /**
     * - Filter by the user's first or last name.
     */
    userName?: string;
};
