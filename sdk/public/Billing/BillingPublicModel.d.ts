export = BillingPublicModel;
/**
 * @typedef DetailList
 * @property {string[]} [component_groups]
 * @property {Plan[]} [plans]
 * @property {Plan} [trial_plan]
 */
/**
 * @typedef InternalServerError
 * @property {string} [code] - Error code
 * @property {string} [message] - Internal server Server error
 */
/**
 * @typedef Plan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {PlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
declare class BillingPublicModel {
}
declare namespace BillingPublicModel {
    export { DetailList, InternalServerError, Plan, PlanRecurring };
}
/** @returns {DetailList} */
declare function DetailList(): DetailList;
type DetailList = {
    component_groups?: string[];
    plans?: Plan[];
    trial_plan?: Plan;
};
/** @returns {InternalServerError} */
declare function InternalServerError(): InternalServerError;
type InternalServerError = {
    /**
     * - Error code
     */
    code?: string;
    /**
     * - Internal server Server error
     */
    message?: string;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
/** @returns {PlanRecurring} */
declare function PlanRecurring(): PlanRecurring;
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
