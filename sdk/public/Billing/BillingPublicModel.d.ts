export = BillingPublicModel;
/**
 * @typedef InternalServerError
 * @property {string} [message] - Internal server Server error
 * @property {string} [code] - Error code
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef DetailList
 * @property {Plan[]} [plans]
 * @property {Plan} [trial_plan]
 * @property {string[]} [component_groups]
 */
declare class BillingPublicModel {
}
declare namespace BillingPublicModel {
    export { InternalServerError, PlanRecurring, Plan, DetailList };
}
/** @returns {InternalServerError} */
declare function InternalServerError(): InternalServerError;
type InternalServerError = {
    /**
     * - Internal server Server error
     */
    message?: string;
    /**
     * - Error code
     */
    code?: string;
};
/** @returns {PlanRecurring} */
declare function PlanRecurring(): PlanRecurring;
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {DetailList} */
declare function DetailList(): DetailList;
type DetailList = {
    plans?: Plan[];
    trial_plan?: Plan;
    component_groups?: string[];
};
