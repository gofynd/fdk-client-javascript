export = BillingPublicModel;
/**
 * @typedef TenureConfig
 * @property {string} [display_name] - Display name for the tenure
 *   configuration(like "Monthly", "Half Yearly", "Yearly")
 * @property {string} [description] - Description of the tenure configuration
 * @property {boolean} [is_active] - Indicates whether the tenure configuration is active
 * @property {string} [slug] - Slug identifier that uniquely identifies the
 *   tenure configuration
 */
/**
 * @typedef TenureConfigData
 * @property {string} [country] - Country associated with the tenure configuration
 * @property {TenureConfig[]} [tenure_config] - Array of tenure configurations
 */
/**
 * @typedef TenureConfigResponse
 * @property {boolean} [success] - Indicates whether the request was successful
 * @property {TenureConfigData} [data]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message] - Resource not found with {id}
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval] - Interval for the recurring plan
 * @property {number} [interval_count] - Number of intervals for the recurring plan
 * @property {string} [aggregate_usage] - Aggregate usage type for the recurring plan
 * @property {string} [usage_type] - Usage type for the recurring plan (like metered etc)
 */
/**
 * @typedef PlanTypes
 * @property {PlanDetails[]} [month] - Monthly plan details
 * @property {PlanDetails[]} [quarter] - Quarterly plan details
 * @property {PlanDetails[]} [half_year] - Half-yearly plan details
 * @property {PlanDetails[]} [year] - Yearly plan details
 */
/**
 * @typedef DetailList
 * @property {PlanTypes} [plans]
 * @property {TrialPlanDetails} [trial_plan]
 */
/**
 * @typedef PlanTaxation
 * @property {number} [gst] - GST percentage applied to the plan
 */
/**
 * @typedef CountryRes
 * @property {string} [name] - Name of the country
 * @property {string} [code] - Country code
 */
/**
 * @typedef OneTimeFees
 * @property {number} [developement] - One time Development fees
 * @property {number} [marketing] - One time Marketing fees
 */
/**
 * @typedef CreditLine
 * @property {boolean} [is_active] - Indicates whether the credit line is active
 */
/**
 * @typedef PlanMeta
 * @property {string} [plan_platform_display_name] - Display name for the plan platform
 */
/**
 * @typedef FeatureConfig
 * @property {boolean} [enabled] - Indicates whether the feature is enabled
 * @property {number} [limit] - Limit for the feature
 * @property {number} [hard_limit] - Hard limit for the feature
 * @property {number} [soft_limit] - Soft limit for the feature
 */
/**
 * @typedef PlanConfig
 * @property {boolean} [is_active] - Indicates whether the plan configuration is active
 * @property {string} [display_text] - Text to display plan configuration
 * @property {boolean} [is_default] - Indicates whether the plan configuration is default
 * @property {string} [processing_type] - Type of processing for the plan configuration
 * @property {string[]} [tags] - Tags associated with the plan configuration
 * @property {FeatureConfig} [feature_config]
 * @property {string} [_id] - Unique identifier for the plan configuration
 * @property {string} [component_id] - Component identifier associated with the
 *   plan configuration
 * @property {string} [created_at] - Creation date of the plan configuration
 * @property {string} [modified_at] - Modification date of the plan configuration
 * @property {number} [__v] - Version number of the plan configuration
 * @property {string} [billing_scheme] - Billing scheme for the plan configuration
 * @property {string} [bill_type] - Billing type for the plan configuration
 * @property {string} [price_ui_type] - Price UI type for the plan configuration
 * @property {PlanRecurring} [recurring]
 * @property {TransformQuantity} [transform_quantity]
 * @property {FreeTier} [free_tier]
 * @property {string} [currency] - Currency used in the plan configuration
 * @property {number} [unit_amount] - Unit amount for the plan configuration
 * @property {number} [quantity] - Quantity for the plan configuration
 * @property {string} [price_type] - Price type for the plan configuration
 * @property {Object[]} [tiers] - An array of pricing tiers that apply based on
 *   quantity or usage. Each tier can define a maximum limit (`up_to`), an
 *   additional flat fee (`flat_amount`), and a price per unit (`unit_amount`)
 */
/**
 * @typedef FreeTier
 * @property {string} [type] - Type of the free tier
 * @property {number} [value] - Value of the free tier type
 */
/**
 * @typedef TransformQuantity
 * @property {number} [divide_by] - Divide by value for the quantity transformation
 * @property {string} [round] - Rounding method for the quantity transformation
 */
/**
 * @typedef ComponentsSchema
 * @property {string} [name] - Name of the component
 * @property {string} [slug] - Slug identifier for the component
 * @property {string} [description] - Description of the component
 * @property {string} [group] - Group to which the component belongs
 * @property {string} [icon] - Icon associated with the component
 * @property {Object} [links] - Links associated with the component
 * @property {PlanConfig} [config]
 * @property {boolean} [is_active] - Indicates whether the component is active
 * @property {string} [display_text] - Display text for the component
 */
/**
 * @typedef PlanDetails
 * @property {string} [activated_by] - ID of the user who activated the plan
 * @property {string} [updated_by] - ID of the user who updated the plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan
 * @property {string[]} [company_ids] - Company IDs associated with the plan
 * @property {string} [created_by] - ID of the user who created the plan
 * @property {string} [channel_type] - Ordering channel associated with the
 *   plan(e.g, ecomm, fynd)
 * @property {string} [platform] - Platform associated with the plan(e.g, web, mobile)
 * @property {string} [plan_group] - Group to which the plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the plan
 * @property {string} [currency] - Currency of the plan
 * @property {boolean} [is_active] - Indicates whether the plan is active
 * @property {boolean} [is_visible] - Indicates whether the plan is visible on ui
 * @property {number} [trial_period] - Trial period of the plan
 * @property {string[]} [addons] - Addons associated with the plan
 * @property {string[]} [tags] - Tags associated with the plan
 * @property {string} [type] - Type of the plan
 * @property {CountryRes} [country]
 * @property {string} [_id] - Unique identifier for the plan."
 * @property {string} [name] - Name of the plan
 * @property {string} [description] - Description of the plan
 * @property {number} [amount] - Amount of the plan
 * @property {string} [product_suite_id] - Identifier of the product suite
 *   associated with the plan
 * @property {string} [created_at] - Creation date of the plan
 * @property {string} [modified_at] - Modification date of the plan
 * @property {PlanTaxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status] - Current status of the plan
 * @property {string} [approved_by] - Id of the User who has approved the plan
 * @property {PlanMeta} [meta]
 * @property {ComponentsSchema[]} [components] - Components associated with the plan
 */
/**
 * @typedef Recurring
 * @property {string} [interval] - Interval for recurring payments
 * @property {number} [interval_count] - Number of intervals
 */
/**
 * @typedef Taxation
 * @property {number} [gst] - GST percentage applied to the plan
 */
/**
 * @typedef PlanList
 * @property {string} [approved_by] - ID of the user who approved the plan
 * @property {string} [updated_by] - ID of the user who updated the plan
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
 * @property {string} [plan_group] - Group to which plan belongs
 * @property {string} [plan_group_id] - Group id to which plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the plan
 * @property {string} [currency] - Currency of the plan
 * @property {number} [amount] - Amount of the plan
 * @property {boolean} [is_active] - Indicates whether the plan is active
 * @property {boolean} [is_visible] - Indicates whether the plan is visible on ui
 * @property {number} [trial_period] - Trial period of the plan in days
 * @property {Object[]} [addons] - Addons associated with the plan
 * @property {string[]} [tags] - Tags associated with the plan
 * @property {string} [type] - Type of the plan (enterprise or standard)
 * @property {Object} [meta] - Additional metadata associated with the plan
 * @property {CountryRes} [country]
 * @property {string[]} [company_ids] - Company IDs associated with the plan
 * @property {string} [created_by] - ID of the user who created the plan
 * @property {string} [current_status] - Current status of the plan (active, inactive)
 * @property {string} [channel_type] - Ordering channel for which plan is
 *   created(fynd, ecomm, uniket etc)
 * @property {string} [platform] - Platform associated with the plan (web, mobile, all)
 * @property {string} [created_at] - Date and time when the plan was created
 * @property {string} [modified_at] - Date and time when the plan was last modified
 */
/**
 * @typedef TrialPlanDetails
 * @property {string} [activated_by] - ID of the user who activated the trial plan
 * @property {string} [updated_by] - ID of the user who updated the trial plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan] - Indicates whether the plan is a trial plan
 * @property {string[]} [company_ids] - Company IDs associated with the trial plan
 * @property {string} [created_by] - ID of the user who created the trial plan
 * @property {string} [channel_type] - Ordering channel for which plan is
 *   created(ecomm, fynd etc)
 * @property {string} [platform] - Platform associated with the trial plan(web ,
 *   mobile, all)
 * @property {string} [plan_group] - Group to which the trial plan belongs
 * @property {string[]} [tag_lines] - Tag lines associated with the trial plan
 * @property {string} [currency] - Currency of the trial plan
 * @property {boolean} [is_active] - Indicates whether the trial plan is active
 * @property {boolean} [is_visible] - Indicates whether the trial plan is visible on ui
 * @property {number} [trial_period] - Trial period of the trial plan in days
 * @property {string[]} [addons] - Addons associated with the trial plan
 * @property {string[]} [tags] - Tags associated with the trial plan
 * @property {string} [type] - Type of the trial plan(public, company_specific)
 * @property {CountryRes} [country]
 * @property {string} [_id] - Unique identifier for the trial plan
 * @property {string} [name] - Name of the trial plan
 * @property {string} [description] - Description of the trial plan
 * @property {number} [amount] - Amount of the trial plan
 * @property {string} [product_suite_id] - Identifier of the product suite
 *   associated with the trial plan
 * @property {string} [created_at] - Creation date of the trial plan
 * @property {string} [modified_at] - Modification date of the trial plan
 * @property {PlanTaxation} [taxation]
 * @property {OneTimeFees} [one_time_fees]
 * @property {CreditLine} [credit_line]
 * @property {string} [current_status] - Current status of the trial plan
 * @property {PlanMeta} [meta]
 * @property {ComponentsSchema[]} [components] - Components associated with the trial plan
 */
declare class BillingPublicModel {
}
declare namespace BillingPublicModel {
    export { TenureConfig, TenureConfigData, TenureConfigResponse, ResourceNotFound, PlanRecurring, PlanTypes, DetailList, PlanTaxation, CountryRes, OneTimeFees, CreditLine, PlanMeta, FeatureConfig, PlanConfig, FreeTier, TransformQuantity, ComponentsSchema, PlanDetails, Recurring, Taxation, PlanList, TrialPlanDetails };
}
/** @returns {TenureConfig} */
declare function TenureConfig(): TenureConfig;
type TenureConfig = {
    /**
     * - Display name for the tenure
     * configuration(like "Monthly", "Half Yearly", "Yearly")
     */
    display_name?: string;
    /**
     * - Description of the tenure configuration
     */
    description?: string;
    /**
     * - Indicates whether the tenure configuration is active
     */
    is_active?: boolean;
    /**
     * - Slug identifier that uniquely identifies the
     * tenure configuration
     */
    slug?: string;
};
/** @returns {TenureConfigData} */
declare function TenureConfigData(): TenureConfigData;
type TenureConfigData = {
    /**
     * - Country associated with the tenure configuration
     */
    country?: string;
    /**
     * - Array of tenure configurations
     */
    tenure_config?: TenureConfig[];
};
/** @returns {TenureConfigResponse} */
declare function TenureConfigResponse(): TenureConfigResponse;
type TenureConfigResponse = {
    /**
     * - Indicates whether the request was successful
     */
    success?: boolean;
    data?: TenureConfigData;
};
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
    /**
     * - Interval for the recurring plan
     */
    interval?: string;
    /**
     * - Number of intervals for the recurring plan
     */
    interval_count?: number;
    /**
     * - Aggregate usage type for the recurring plan
     */
    aggregate_usage?: string;
    /**
     * - Usage type for the recurring plan (like metered etc)
     */
    usage_type?: string;
};
/** @returns {PlanTypes} */
declare function PlanTypes(): PlanTypes;
type PlanTypes = {
    /**
     * - Monthly plan details
     */
    month?: PlanDetails[];
    /**
     * - Quarterly plan details
     */
    quarter?: PlanDetails[];
    /**
     * - Half-yearly plan details
     */
    half_year?: PlanDetails[];
    /**
     * - Yearly plan details
     */
    year?: PlanDetails[];
};
/** @returns {DetailList} */
declare function DetailList(): DetailList;
type DetailList = {
    plans?: PlanTypes;
    trial_plan?: TrialPlanDetails;
};
/** @returns {PlanTaxation} */
declare function PlanTaxation(): PlanTaxation;
type PlanTaxation = {
    /**
     * - GST percentage applied to the plan
     */
    gst?: number;
};
/** @returns {CountryRes} */
declare function CountryRes(): CountryRes;
type CountryRes = {
    /**
     * - Name of the country
     */
    name?: string;
    /**
     * - Country code
     */
    code?: string;
};
/** @returns {OneTimeFees} */
declare function OneTimeFees(): OneTimeFees;
type OneTimeFees = {
    /**
     * - One time Development fees
     */
    developement?: number;
    /**
     * - One time Marketing fees
     */
    marketing?: number;
};
/** @returns {CreditLine} */
declare function CreditLine(): CreditLine;
type CreditLine = {
    /**
     * - Indicates whether the credit line is active
     */
    is_active?: boolean;
};
/** @returns {PlanMeta} */
declare function PlanMeta(): PlanMeta;
type PlanMeta = {
    /**
     * - Display name for the plan platform
     */
    plan_platform_display_name?: string;
};
/** @returns {FeatureConfig} */
declare function FeatureConfig(): FeatureConfig;
type FeatureConfig = {
    /**
     * - Indicates whether the feature is enabled
     */
    enabled?: boolean;
    /**
     * - Limit for the feature
     */
    limit?: number;
    /**
     * - Hard limit for the feature
     */
    hard_limit?: number;
    /**
     * - Soft limit for the feature
     */
    soft_limit?: number;
};
/** @returns {PlanConfig} */
declare function PlanConfig(): PlanConfig;
type PlanConfig = {
    /**
     * - Indicates whether the plan configuration is active
     */
    is_active?: boolean;
    /**
     * - Text to display plan configuration
     */
    display_text?: string;
    /**
     * - Indicates whether the plan configuration is default
     */
    is_default?: boolean;
    /**
     * - Type of processing for the plan configuration
     */
    processing_type?: string;
    /**
     * - Tags associated with the plan configuration
     */
    tags?: string[];
    feature_config?: FeatureConfig;
    /**
     * - Unique identifier for the plan configuration
     */
    _id?: string;
    /**
     * - Component identifier associated with the
     * plan configuration
     */
    component_id?: string;
    /**
     * - Creation date of the plan configuration
     */
    created_at?: string;
    /**
     * - Modification date of the plan configuration
     */
    modified_at?: string;
    /**
     * - Version number of the plan configuration
     */
    __v?: number;
    /**
     * - Billing scheme for the plan configuration
     */
    billing_scheme?: string;
    /**
     * - Billing type for the plan configuration
     */
    bill_type?: string;
    /**
     * - Price UI type for the plan configuration
     */
    price_ui_type?: string;
    recurring?: PlanRecurring;
    transform_quantity?: TransformQuantity;
    free_tier?: FreeTier;
    /**
     * - Currency used in the plan configuration
     */
    currency?: string;
    /**
     * - Unit amount for the plan configuration
     */
    unit_amount?: number;
    /**
     * - Quantity for the plan configuration
     */
    quantity?: number;
    /**
     * - Price type for the plan configuration
     */
    price_type?: string;
    /**
     * - An array of pricing tiers that apply based on
     * quantity or usage. Each tier can define a maximum limit (`up_to`), an
     * additional flat fee (`flat_amount`), and a price per unit (`unit_amount`)
     */
    tiers?: any[];
};
/** @returns {FreeTier} */
declare function FreeTier(): FreeTier;
type FreeTier = {
    /**
     * - Type of the free tier
     */
    type?: string;
    /**
     * - Value of the free tier type
     */
    value?: number;
};
/** @returns {TransformQuantity} */
declare function TransformQuantity(): TransformQuantity;
type TransformQuantity = {
    /**
     * - Divide by value for the quantity transformation
     */
    divide_by?: number;
    /**
     * - Rounding method for the quantity transformation
     */
    round?: string;
};
/** @returns {ComponentsSchema} */
declare function ComponentsSchema(): ComponentsSchema;
type ComponentsSchema = {
    /**
     * - Name of the component
     */
    name?: string;
    /**
     * - Slug identifier for the component
     */
    slug?: string;
    /**
     * - Description of the component
     */
    description?: string;
    /**
     * - Group to which the component belongs
     */
    group?: string;
    /**
     * - Icon associated with the component
     */
    icon?: string;
    /**
     * - Links associated with the component
     */
    links?: any;
    config?: PlanConfig;
    /**
     * - Indicates whether the component is active
     */
    is_active?: boolean;
    /**
     * - Display text for the component
     */
    display_text?: string;
};
/** @returns {PlanDetails} */
declare function PlanDetails(): PlanDetails;
type PlanDetails = {
    /**
     * - ID of the user who activated the plan
     */
    activated_by?: string;
    /**
     * - ID of the user who updated the plan
     */
    updated_by?: string;
    recurring?: PlanRecurring;
    /**
     * - Indicates whether the plan is a trial plan
     */
    is_trial_plan?: boolean;
    /**
     * - Company IDs associated with the plan
     */
    company_ids?: string[];
    /**
     * - ID of the user who created the plan
     */
    created_by?: string;
    /**
     * - Ordering channel associated with the
     * plan(e.g, ecomm, fynd)
     */
    channel_type?: string;
    /**
     * - Platform associated with the plan(e.g, web, mobile)
     */
    platform?: string;
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
     * - Indicates whether the plan is active
     */
    is_active?: boolean;
    /**
     * - Indicates whether the plan is visible on ui
     */
    is_visible?: boolean;
    /**
     * - Trial period of the plan
     */
    trial_period?: number;
    /**
     * - Addons associated with the plan
     */
    addons?: string[];
    /**
     * - Tags associated with the plan
     */
    tags?: string[];
    /**
     * - Type of the plan
     */
    type?: string;
    country?: CountryRes;
    /**
     * - Unique identifier for the plan."
     */
    _id?: string;
    /**
     * - Name of the plan
     */
    name?: string;
    /**
     * - Description of the plan
     */
    description?: string;
    /**
     * - Amount of the plan
     */
    amount?: number;
    /**
     * - Identifier of the product suite
     * associated with the plan
     */
    product_suite_id?: string;
    /**
     * - Creation date of the plan
     */
    created_at?: string;
    /**
     * - Modification date of the plan
     */
    modified_at?: string;
    taxation?: PlanTaxation;
    one_time_fees?: OneTimeFees;
    credit_line?: CreditLine;
    /**
     * - Current status of the plan
     */
    current_status?: string;
    /**
     * - Id of the User who has approved the plan
     */
    approved_by?: string;
    meta?: PlanMeta;
    /**
     * - Components associated with the plan
     */
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
     * - GST percentage applied to the plan
     */
    gst?: number;
};
/** @returns {PlanList} */
declare function PlanList(): PlanList;
type PlanList = {
    /**
     * - ID of the user who approved the plan
     */
    approved_by?: string;
    /**
     * - ID of the user who updated the plan
     */
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
     * - Group to which plan belongs
     */
    plan_group?: string;
    /**
     * - Group id to which plan belongs
     */
    plan_group_id?: string;
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
     * - Indicates whether the plan is visible on ui
     */
    is_visible?: boolean;
    /**
     * - Trial period of the plan in days
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
     * - Type of the plan (enterprise or standard)
     */
    type?: string;
    /**
     * - Additional metadata associated with the plan
     */
    meta?: any;
    country?: CountryRes;
    /**
     * - Company IDs associated with the plan
     */
    company_ids?: string[];
    /**
     * - ID of the user who created the plan
     */
    created_by?: string;
    /**
     * - Current status of the plan (active, inactive)
     */
    current_status?: string;
    /**
     * - Ordering channel for which plan is
     * created(fynd, ecomm, uniket etc)
     */
    channel_type?: string;
    /**
     * - Platform associated with the plan (web, mobile, all)
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
/** @returns {TrialPlanDetails} */
declare function TrialPlanDetails(): TrialPlanDetails;
type TrialPlanDetails = {
    /**
     * - ID of the user who activated the trial plan
     */
    activated_by?: string;
    /**
     * - ID of the user who updated the trial plan
     */
    updated_by?: string;
    recurring?: PlanRecurring;
    /**
     * - Indicates whether the plan is a trial plan
     */
    is_trial_plan?: boolean;
    /**
     * - Company IDs associated with the trial plan
     */
    company_ids?: string[];
    /**
     * - ID of the user who created the trial plan
     */
    created_by?: string;
    /**
     * - Ordering channel for which plan is
     * created(ecomm, fynd etc)
     */
    channel_type?: string;
    /**
     * - Platform associated with the trial plan(web ,
     * mobile, all)
     */
    platform?: string;
    /**
     * - Group to which the trial plan belongs
     */
    plan_group?: string;
    /**
     * - Tag lines associated with the trial plan
     */
    tag_lines?: string[];
    /**
     * - Currency of the trial plan
     */
    currency?: string;
    /**
     * - Indicates whether the trial plan is active
     */
    is_active?: boolean;
    /**
     * - Indicates whether the trial plan is visible on ui
     */
    is_visible?: boolean;
    /**
     * - Trial period of the trial plan in days
     */
    trial_period?: number;
    /**
     * - Addons associated with the trial plan
     */
    addons?: string[];
    /**
     * - Tags associated with the trial plan
     */
    tags?: string[];
    /**
     * - Type of the trial plan(public, company_specific)
     */
    type?: string;
    country?: CountryRes;
    /**
     * - Unique identifier for the trial plan
     */
    _id?: string;
    /**
     * - Name of the trial plan
     */
    name?: string;
    /**
     * - Description of the trial plan
     */
    description?: string;
    /**
     * - Amount of the trial plan
     */
    amount?: number;
    /**
     * - Identifier of the product suite
     * associated with the trial plan
     */
    product_suite_id?: string;
    /**
     * - Creation date of the trial plan
     */
    created_at?: string;
    /**
     * - Modification date of the trial plan
     */
    modified_at?: string;
    taxation?: PlanTaxation;
    one_time_fees?: OneTimeFees;
    credit_line?: CreditLine;
    /**
     * - Current status of the trial plan
     */
    current_status?: string;
    meta?: PlanMeta;
    /**
     * - Components associated with the trial plan
     */
    components?: ComponentsSchema[];
};
