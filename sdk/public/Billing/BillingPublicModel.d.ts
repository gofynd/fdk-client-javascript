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
/**
 * @typedef PlanTaxation
 * @property {number} [gst]
 */
/**
 * @typedef OneTimeFees
 * @property {number} [developement]
 * @property {number} [marketing]
 */
/**
 * @typedef CreditLine
 * @property {boolean} [is_active]
 */
/**
 * @typedef PlanMeta
 * @property {string} [plan_platform_display_name]
 */
/**
 * @typedef FeatureConfig
 * @property {boolean} [enabled]
 */
/**
 * @typedef PlanConfig
 * @property {boolean} [is_active]
 * @property {string} [display_text]
 * @property {boolean} [is_default]
 * @property {string} [processing_type]
 * @property {string[]} [tags]
 * @property {FeatureConfig} [feature_config]
 * @property {string} [_id]
 * @property {string} [component_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef ComponentsSchema
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {PlanConfig} [config]
 * @property {boolean} [is_active]
 * @property {string} [display_text]
 */
/**
 * @typedef PlanDetails
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
 * @property {PlanTaxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status]
 * @property {PlanMeta} [meta]
 * @property {ComponentsSchema[]} [components]
 */
declare class BillingPublicModel {
}
declare namespace BillingPublicModel {
    export { InternalServerError, PlanRecurring, Plan, DetailList, PlanTaxation, OneTimeFees, CreditLine, PlanMeta, FeatureConfig, PlanConfig, ComponentsSchema, PlanDetails };
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
/** @returns {PlanTaxation} */
declare function PlanTaxation(): PlanTaxation;
type PlanTaxation = {
    gst?: number;
};
/** @returns {OneTimeFees} */
declare function OneTimeFees(): OneTimeFees;
type OneTimeFees = {
    developement?: number;
    marketing?: number;
};
/** @returns {CreditLine} */
declare function CreditLine(): CreditLine;
type CreditLine = {
    is_active?: boolean;
};
/** @returns {PlanMeta} */
declare function PlanMeta(): PlanMeta;
type PlanMeta = {
    plan_platform_display_name?: string;
};
/** @returns {FeatureConfig} */
declare function FeatureConfig(): FeatureConfig;
type FeatureConfig = {
    enabled?: boolean;
};
/** @returns {PlanConfig} */
declare function PlanConfig(): PlanConfig;
type PlanConfig = {
    is_active?: boolean;
    display_text?: string;
    is_default?: boolean;
    processing_type?: string;
    tags?: string[];
    feature_config?: FeatureConfig;
    _id?: string;
    component_id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {ComponentsSchema} */
declare function ComponentsSchema(): ComponentsSchema;
type ComponentsSchema = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    config?: PlanConfig;
    is_active?: boolean;
    display_text?: string;
};
/** @returns {PlanDetails} */
declare function PlanDetails(): PlanDetails;
type PlanDetails = {
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
    taxation?: PlanTaxation;
    one_time_fees?: OneTimeFees;
    credit_line?: CreditLine;
    current_status?: string;
    meta?: PlanMeta;
    components?: ComponentsSchema[];
};
