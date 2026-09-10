export = AuthorizationPlatformModel;
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef StandardError
 * @property {string} message - A brief description of the error.
 */
/**
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors - A list of validation errors in the request.
 */
/**
 * @typedef ApplicationStaff
 * @property {string} [application] - Unique ID of the associated application.
 * @property {string} [user] - Unique ID of the user.
 * @property {string} [title] - Title of the staff member.
 * @property {boolean} [order_incent] - Indicates whether the staff member is
 *   eligible for incentives on orders.
 * @property {number[]} [stores] - List of ids of the ordering stores where the
 *   staff member works.
 * @property {string} [employee_code] - Employee code of the staff member.
 * @property {string} [first_name] - First name of the associated user.
 * @property {string} [last_name] - Last name of the associated user.
 * @property {string} [profile_pic_url] - Profile picture URL of the associated user.
 */
/**
 * @typedef ApplicationStaffPage
 * @property {ApplicationStaff[]} [items] - List of application staff members.
 * @property {Page} [page]
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
declare class AuthorizationPlatformModel {
}
declare namespace AuthorizationPlatformModel {
    export { Page, StandardError, ValidationErrors, ApplicationStaff, ApplicationStaffPage, ValidationError };
}
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, can be 'cursor' or 'number'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {StandardError} */
declare function StandardError(): StandardError;
type StandardError = {
    /**
     * - A brief description of the error.
     */
    message: string;
};
/** @returns {ValidationErrors} */
declare function ValidationErrors(): ValidationErrors;
type ValidationErrors = {
    /**
     * - A list of validation errors in the request.
     */
    errors: ValidationError[];
};
/** @returns {ApplicationStaff} */
declare function ApplicationStaff(): ApplicationStaff;
type ApplicationStaff = {
    /**
     * - Unique ID of the associated application.
     */
    application?: string;
    /**
     * - Unique ID of the user.
     */
    user?: string;
    /**
     * - Title of the staff member.
     */
    title?: string;
    /**
     * - Indicates whether the staff member is
     * eligible for incentives on orders.
     */
    order_incent?: boolean;
    /**
     * - List of ids of the ordering stores where the
     * staff member works.
     */
    stores?: number[];
    /**
     * - Employee code of the staff member.
     */
    employee_code?: string;
    /**
     * - First name of the associated user.
     */
    first_name?: string;
    /**
     * - Last name of the associated user.
     */
    last_name?: string;
    /**
     * - Profile picture URL of the associated user.
     */
    profile_pic_url?: string;
};
/** @returns {ApplicationStaffPage} */
declare function ApplicationStaffPage(): ApplicationStaffPage;
type ApplicationStaffPage = {
    /**
     * - List of application staff members.
     */
    items?: ApplicationStaff[];
    page?: Page;
};
/** @returns {ValidationError} */
declare function ValidationError(): ValidationError;
type ValidationError = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
    /**
     * - The field in the request that caused the error.
     */
    field: string;
};
