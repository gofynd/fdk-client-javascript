export = BillingPublicModel;
/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 * @property {string} [aggregate_usage]
 * @property {string} [usage_type]
 */
/**
 * @typedef DetailList
 * @property {PlanDetails[]} [plans]
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
 * @property {number} [limit]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
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
 * @property {number} [__v]
 * @property {string} [billing_scheme]
 * @property {string} [bill_type]
 * @property {string} [price_ui_type]
 * @property {PlanRecurring} [recurring]
 * @property {TransformQuantity} [transform_quantity]
 * @property {FreeTier} [free_tier]
 * @property {string} [currency]
 * @property {number} [unit_amount]
 * @property {number} [quantity]
 * @property {string} [price_type]
 * @property {Object[]} [tiers]
 */
/**
 * @typedef FreeTier
 * @property {string} [type]
 * @property {number} [value]
 */
/**
 * @typedef TransformQuantity
 * @property {number} [divide_by]
 * @property {string} [round]
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
 * @property {string} [approved_by]
 * @property {string} [updated_by]
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string[]} [company_ids]
 * @property {string} [created_by]
 * @property {string} [channel_type]
 * @property {string} [platform]
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
/**
 * @typedef Recurring
 * @property {string} [interval] - Interval for recurring payments
 * @property {number} [interval_count] - Number of intervals
 */
/**
 * @typedef Taxation
 * @property {number} [gst] - GST percentage
 */
/**
 * @typedef PlanList
 * @property {string} [approved_by]
 * @property {string} [updated_by]
 * @property {Recurring} [recurring]
 * @property {Taxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [_id] - Unique identifier of the plan
 * @property {string} [product_suite_id] - Identifier of the product suite
 *   associated with the plan
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan
 * @property {string} [name] - Name of the plan
 * @property {string} [description] - Description of the plan
 * @property {string} [plan_group] - Group to which the plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the plan
 * @property {string} [currency] - Currency of the plan
 * @property {number} [amount] - Amount of the plan
 * @property {boolean} [is_active] - Indicates whether the plan is active
 * @property {boolean} [is_visible] - Indicates whether the plan is visible
 * @property {number} [trial_period] - Trial period of the plan
 * @property {Object[]} [addons] - Addons associated with the plan
 * @property {string[]} [tags] - Tags associated with the plan
 * @property {string} [type] - Type of the plan
 * @property {Object} [meta] - Additional metadata associated with the plan
 * @property {string} [country] - Country associated with the plan
 * @property {string[]} [company_ids] - Company IDs associated with the plan
 * @property {string} [created_by] - ID of the user who created the plan
 * @property {string} [current_status] - Current status of the plan
 * @property {string} [channel_type] - Type of channel associated with the plan
 * @property {string} [platform] - Platform associated with the plan
 * @property {string} [created_at] - Date and time when the plan was created
 * @property {string} [modified_at] - Date and time when the plan was last modified
 */
declare class BillingPublicModel {
}
declare namespace BillingPublicModel {
    export { ResourceNotFound, PlanRecurring, DetailList, PlanTaxation, OneTimeFees, CreditLine, PlanMeta, FeatureConfig, PlanConfig, FreeTier, TransformQuantity, ComponentsSchema, PlanDetails, Recurring, Taxation, PlanList };
}
/** @returns {ResourceNotFound} */
declare function ResourceNotFound(): ResourceNotFound;
type ResourceNotFound = {
    /**
     * - Resource not found with {id}
     */
    message?: string;
};
/** @returns {PlanRecurring} */
declare function PlanRecurring(): PlanRecurring;
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
    aggregate_usage?: string;
    usage_type?: string;
};
/** @returns {DetailList} */
declare function DetailList(): DetailList;
type DetailList = {
    plans?: PlanDetails[];
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
    limit?: number;
    hard_limit?: number;
    soft_limit?: number;
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
    __v?: number;
    billing_scheme?: string;
    bill_type?: string;
    price_ui_type?: string;
    recurring?: PlanRecurring;
    transform_quantity?: TransformQuantity;
    free_tier?: FreeTier;
    currency?: string;
    unit_amount?: number;
    quantity?: number;
    price_type?: string;
    tiers?: any[];
};
/** @returns {FreeTier} */
declare function FreeTier(): FreeTier;
type FreeTier = {
    type?: string;
    value?: number;
};
/** @returns {TransformQuantity} */
declare function TransformQuantity(): TransformQuantity;
type TransformQuantity = {
    divide_by?: number;
    round?: string;
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
    approved_by?: string;
    updated_by?: string;
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    company_ids?: string[];
    created_by?: string;
    channel_type?: string;
    platform?: string;
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
/** @returns {Recurring} */
declare function Recurring(): Recurring;
type Recurring = {
    /**
     * - Interval for recurring payments
     */
    interval?: string;
    /**
     * - Number of intervals
     */
    interval_count?: number;
};
/** @returns {Taxation} */
declare function Taxation(): Taxation;
type Taxation = {
    /**
     * - GST percentage
     */
    gst?: number;
};
/** @returns {PlanList} */
declare function PlanList(): PlanList;
type PlanList = {
    approved_by?: string;
    updated_by?: string;
    recurring?: Recurring;
    taxation?: Taxation;
    one_time_fees?: OneTimeFees;
    credit_line?: CreditLine;
    /**
     * - Unique identifier of the plan
     */
    _id?: string;
    /**
     * - Identifier of the product suite
     * associated with the plan
     */
    product_suite_id?: string;
    /**
     * - Indicates whether the plan is a trial plan
     */
    is_trial_plan?: boolean;
    /**
     * - Name of the plan
     */
    name?: string;
    /**
     * - Description of the plan
     */
    description?: string;
    /**
     * - Group to which the plan belongs
     */
    plan_group?: string;
    /**
     * - Tag lines associated with the plan
     */
    tag_lines?: string[];
    /**
     * - Currency of the plan
     */
    currency?: string;
    /**
     * - Amount of the plan
     */
    amount?: number;
    /**
     * - Indicates whether the plan is active
     */
    is_active?: boolean;
    /**
     * - Indicates whether the plan is visible
     */
    is_visible?: boolean;
    /**
     * - Trial period of the plan
     */
    trial_period?: number;
    /**
     * - Addons associated with the plan
     */
    addons?: any[];
    /**
     * - Tags associated with the plan
     */
    tags?: string[];
    /**
     * - Type of the plan
     */
    type?: string;
    /**
     * - Additional metadata associated with the plan
     */
    meta?: any;
    /**
     * - Country associated with the plan
     */
    country?: string;
    /**
     * - Company IDs associated with the plan
     */
    company_ids?: string[];
    /**
     * - ID of the user who created the plan
     */
    created_by?: string;
    /**
     * - Current status of the plan
     */
    current_status?: string;
    /**
     * - Type of channel associated with the plan
     */
    channel_type?: string;
    /**
     * - Platform associated with the plan
     */
    platform?: string;
    /**
     * - Date and time when the plan was created
     */
    created_at?: string;
    /**
     * - Date and time when the plan was last modified
     */
    modified_at?: string;
};
