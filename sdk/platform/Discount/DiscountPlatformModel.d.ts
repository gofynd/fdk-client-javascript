export = DiscountPlatformModel;
/**
 * @typedef ValidityObject
 * @property {string} start - The start date and time of the discount period.
 * @property {string} end - The end date and time of the discount period.
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string} name - The name of the discount.
 * @property {number} company_id - The unique identifier for the company.
 * @property {boolean} is_active - Indicates if the discount is currently active.
 * @property {string[]} app_ids - List of application IDs associated with the discount.
 * @property {string[]} [extension_ids] - List of extension IDs associated with
 *   the discount.
 * @property {string} job_type - The type of job associated with the discount.
 * @property {string} discount_type - The type of discount being offered.
 * @property {string} discount_level - The level at which the discount is applied.
 * @property {number} [value] - The value of the discount.
 * @property {string} [file_path] - The file path for discount file.
 * @property {number[]} [brand_ids] - List of brand IDs associated with the discount.
 * @property {number[]} [store_ids] - List of store IDs associated with the discount.
 * @property {string[]} [zone_ids] - List of zone IDs associated with the discount.
 * @property {string[]} [price_factory_ids] - List of price_factory IDs
 *   associated with the discount.
 * @property {ValidityObject} validity
 * @property {DiscountMeta} [discount_meta]
 */
/**
 * @typedef DiscountMeta
 * @property {boolean} timer - Determines whether the discount countdown is
 *   visible or not.
 * @property {number} [hours] - The time in hours before the discount ends when
 *   the countdown timer should start.
 * @property {number} [minutes] - The time in minutes before the discount ends
 *   when the countdown timer should start.
 */
/**
 * @typedef DiscountJob
 * @property {string} _id - The unique identifier for the discount job.
 * @property {string} name - The name of the discount job.
 * @property {number} company_id - The unique identifier for the company.
 * @property {boolean} is_active - Indicates if the discount job is currently active.
 * @property {string[]} app_ids - List of application IDs associated with the
 *   discount job.
 * @property {string} job_type - The type of job associated with the discount job.
 * @property {string} [discount_type] - The type of discount being offered.
 * @property {string} discount_level - The level at which the discount is applied.
 * @property {number} [value] - The value of the discount.
 * @property {string} [file_path] - The file path for discount file.
 * @property {number[]} [brand_ids] - List of brand IDs associated with the discount job.
 * @property {number[]} [store_ids] - List of store IDs associated with the discount job.
 * @property {string[]} [zone_ids] - List of zone IDs associated with the discount job.
 * @property {string[]} [price_factory_ids] - List of price_factory IDs
 *   associated with the discount.
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} validity
 * @property {string} created_on - The date and time when the discount job was created.
 * @property {string} modified_on - The date and time when the discount job was
 *   last modified.
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta] - Additional metadata for the discount job.
 */
/**
 * @typedef FileJobBody
 * @property {string} [name] - The name of the job.
 * @property {number} [company_id] - Unique identifier for the company.
 * @property {boolean} [is_active] - Indicates if the job is active.
 * @property {string[]} [app_ids] - List of application identifiers.
 * @property {string} [job_type] - Type of job being processed.
 * @property {string} [discount_type] - Type of discount applied.
 * @property {string} [discount_level] - Level at which the discount is applied.
 * @property {number} [value] - Value of the discount.
 * @property {string} [file_path] - Path to the discount file associated with the job.
 * @property {number[]} [brand_ids] - List of brand identifiers.
 * @property {number[]} [store_ids] - List of store identifiers.
 * @property {string[]} [extension_ids] - List of extension identifiers.
 * @property {string[]} [zone_ids] - List of zone identifiers.
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} [validity]
 * @property {string} [created_on] - Timestamp when the job was created.
 * @property {string} [modified_on] - Timestamp when the job was last modified.
 * @property {UserDetails} [created_by]
 * @property {UserDetails} [modified_by]
 * @property {Object} [meta] - Additional metadata for the job.
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items - List of discount jobs.
 * @property {Page} page
 */
/**
 * @typedef DiscountItems
 * @property {string} [item_code] - Unique code for the item.
 * @property {string} [brand_name] - Name of the brand.
 * @property {string} [seller_identifier] - Unique Identifier for the size.
 * @property {string} discount_type - Type of discount applied.
 * @property {number} value - Value of the discount.
 * @property {DiscountMeta} [discount_meta]
 */
/**
 * @typedef BulkDiscount
 * @property {number} company_id - Uinque Identifier for the company.
 * @property {DiscountItems[]} items - List of discount items.
 */
/**
 * @typedef FileJobResponseSchema
 * @property {string} stage - Current stage of the file job.
 * @property {number} total - Total number of items processed.
 * @property {number} failed - Number of items that failed processing.
 * @property {number} company_id - Identifier for the company.
 * @property {FileJobBody} [body]
 * @property {string} type - Type of file job.
 * @property {string} [file_type] - Type of file being processed.
 * @property {string} _id - A unique identifier to distinguish and identify a job.
 * @property {string} [file_path] - Path to the disocunt file.
 * @property {number} [progress] - Progress of the file job.
 * @property {string[]} [extension_ids] - List of extension identifiers.
 * @property {string[]} [zone_ids] - List of zone identifiers.
 * @property {string} [created_on] - Timestamp when the job was created.
 * @property {string} [modified_on] - Timestamp when the job was last modified.
 * @property {UserDetails} [created_by]
 */
/**
 * @typedef FileJobRequestSchema
 * @property {string} name - Name of the file job.
 * @property {boolean} is_active - Indicates if the job is active.
 * @property {number} company_id - Unique Identifier for the company.
 * @property {string[]} app_ids - List of application identifiers.
 * @property {string} job_type - Type of job.
 * @property {string} [discount_type] - Type of discount.
 * @property {string} discount_level - Level at which the discount is applied.
 * @property {string} [file_path] - Path to the disocunt file.
 * @property {number[]} [brand_ids] - List of brand identifiers.
 * @property {number[]} [store_ids] - List of store identifiers.
 * @property {string[]} [price_factory_ids] - List of price_factory IDs
 *   associated with the discount.
 * @property {ValidityObject} validity
 * @property {Object} [meta] - Additional metadata for the disocunt.
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids] - List of brand identifiers.
 * @property {number[]} [store_ids] - List of store identifiers.
 */
/**
 * @typedef CancelJobResponseSchema
 * @property {boolean} success - Indicates if the job cancellation was successful.
 */
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
 * @typedef UserDetails
 * @property {string} username - Username of the user.
 * @property {string} user_id - Unique identifier for the user.
 */
/**
 * @typedef BadRequestObject
 * @property {string} message - A brief description of the error encountered.
 */
/**
 * @typedef BadRequestData
 * @property {string} [message] - Detailed information about the error.
 */
/**
 * @typedef BadRequestObjectGet
 * @property {string} [message] - A brief description of the error encountered.
 * @property {string} [error] - Specific error code or identifier.
 * @property {BadRequestData} [data]
 */
declare class DiscountPlatformModel {
}
declare namespace DiscountPlatformModel {
    export { ValidityObject, CreateUpdateDiscount, DiscountMeta, DiscountJob, FileJobBody, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponseSchema, FileJobRequestSchema, DownloadFileJob, CancelJobResponseSchema, Page, UserDetails, BadRequestObject, BadRequestData, BadRequestObjectGet };
}
/** @returns {ValidityObject} */
declare function ValidityObject(): ValidityObject;
type ValidityObject = {
    /**
     * - The start date and time of the discount period.
     */
    start: string;
    /**
     * - The end date and time of the discount period.
     */
    end: string;
};
/** @returns {CreateUpdateDiscount} */
declare function CreateUpdateDiscount(): CreateUpdateDiscount;
type CreateUpdateDiscount = {
    /**
     * - The name of the discount.
     */
    name: string;
    /**
     * - The unique identifier for the company.
     */
    company_id: number;
    /**
     * - Indicates if the discount is currently active.
     */
    is_active: boolean;
    /**
     * - List of application IDs associated with the discount.
     */
    app_ids: string[];
    /**
     * - List of extension IDs associated with
     * the discount.
     */
    extension_ids?: string[];
    /**
     * - The type of job associated with the discount.
     */
    job_type: string;
    /**
     * - The type of discount being offered.
     */
    discount_type: string;
    /**
     * - The level at which the discount is applied.
     */
    discount_level: string;
    /**
     * - The value of the discount.
     */
    value?: number;
    /**
     * - The file path for discount file.
     */
    file_path?: string;
    /**
     * - List of brand IDs associated with the discount.
     */
    brand_ids?: number[];
    /**
     * - List of store IDs associated with the discount.
     */
    store_ids?: number[];
    /**
     * - List of zone IDs associated with the discount.
     */
    zone_ids?: string[];
    /**
     * - List of price_factory IDs
     * associated with the discount.
     */
    price_factory_ids?: string[];
    validity: ValidityObject;
    discount_meta?: DiscountMeta;
};
/** @returns {DiscountMeta} */
declare function DiscountMeta(): DiscountMeta;
type DiscountMeta = {
    /**
     * - Determines whether the discount countdown is
     * visible or not.
     */
    timer: boolean;
    /**
     * - The time in hours before the discount ends when
     * the countdown timer should start.
     */
    hours?: number;
    /**
     * - The time in minutes before the discount ends
     * when the countdown timer should start.
     */
    minutes?: number;
};
/** @returns {DiscountJob} */
declare function DiscountJob(): DiscountJob;
type DiscountJob = {
    /**
     * - The unique identifier for the discount job.
     */
    _id: string;
    /**
     * - The name of the discount job.
     */
    name: string;
    /**
     * - The unique identifier for the company.
     */
    company_id: number;
    /**
     * - Indicates if the discount job is currently active.
     */
    is_active: boolean;
    /**
     * - List of application IDs associated with the
     * discount job.
     */
    app_ids: string[];
    /**
     * - The type of job associated with the discount job.
     */
    job_type: string;
    /**
     * - The type of discount being offered.
     */
    discount_type?: string;
    /**
     * - The level at which the discount is applied.
     */
    discount_level: string;
    /**
     * - The value of the discount.
     */
    value?: number;
    /**
     * - The file path for discount file.
     */
    file_path?: string;
    /**
     * - List of brand IDs associated with the discount job.
     */
    brand_ids?: number[];
    /**
     * - List of store IDs associated with the discount job.
     */
    store_ids?: number[];
    /**
     * - List of zone IDs associated with the discount job.
     */
    zone_ids?: string[];
    /**
     * - List of price_factory IDs
     * associated with the discount.
     */
    price_factory_ids?: string[];
    discount_meta?: DiscountMeta;
    validity: ValidityObject;
    /**
     * - The date and time when the discount job was created.
     */
    created_on: string;
    /**
     * - The date and time when the discount job was
     * last modified.
     */
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    /**
     * - Additional metadata for the discount job.
     */
    meta?: any;
};
/** @returns {FileJobBody} */
declare function FileJobBody(): FileJobBody;
type FileJobBody = {
    /**
     * - The name of the job.
     */
    name?: string;
    /**
     * - Unique identifier for the company.
     */
    company_id?: number;
    /**
     * - Indicates if the job is active.
     */
    is_active?: boolean;
    /**
     * - List of application identifiers.
     */
    app_ids?: string[];
    /**
     * - Type of job being processed.
     */
    job_type?: string;
    /**
     * - Type of discount applied.
     */
    discount_type?: string;
    /**
     * - Level at which the discount is applied.
     */
    discount_level?: string;
    /**
     * - Value of the discount.
     */
    value?: number;
    /**
     * - Path to the discount file associated with the job.
     */
    file_path?: string;
    /**
     * - List of brand identifiers.
     */
    brand_ids?: number[];
    /**
     * - List of store identifiers.
     */
    store_ids?: number[];
    /**
     * - List of extension identifiers.
     */
    extension_ids?: string[];
    /**
     * - List of zone identifiers.
     */
    zone_ids?: string[];
    discount_meta?: DiscountMeta;
    validity?: ValidityObject;
    /**
     * - Timestamp when the job was created.
     */
    created_on?: string;
    /**
     * - Timestamp when the job was last modified.
     */
    modified_on?: string;
    created_by?: UserDetails;
    modified_by?: UserDetails;
    /**
     * - Additional metadata for the job.
     */
    meta?: any;
};
/** @returns {ListOrCalender} */
declare function ListOrCalender(): ListOrCalender;
type ListOrCalender = {
    /**
     * - List of discount jobs.
     */
    items: DiscountJob[];
    page: Page;
};
/** @returns {DiscountItems} */
declare function DiscountItems(): DiscountItems;
type DiscountItems = {
    /**
     * - Unique code for the item.
     */
    item_code?: string;
    /**
     * - Name of the brand.
     */
    brand_name?: string;
    /**
     * - Unique Identifier for the size.
     */
    seller_identifier?: string;
    /**
     * - Type of discount applied.
     */
    discount_type: string;
    /**
     * - Value of the discount.
     */
    value: number;
    discount_meta?: DiscountMeta;
};
/** @returns {BulkDiscount} */
declare function BulkDiscount(): BulkDiscount;
type BulkDiscount = {
    /**
     * - Uinque Identifier for the company.
     */
    company_id: number;
    /**
     * - List of discount items.
     */
    items: DiscountItems[];
};
/** @returns {FileJobResponseSchema} */
declare function FileJobResponseSchema(): FileJobResponseSchema;
type FileJobResponseSchema = {
    /**
     * - Current stage of the file job.
     */
    stage: string;
    /**
     * - Total number of items processed.
     */
    total: number;
    /**
     * - Number of items that failed processing.
     */
    failed: number;
    /**
     * - Identifier for the company.
     */
    company_id: number;
    body?: FileJobBody;
    /**
     * - Type of file job.
     */
    type: string;
    /**
     * - Type of file being processed.
     */
    file_type?: string;
    /**
     * - A unique identifier to distinguish and identify a job.
     */
    _id: string;
    /**
     * - Path to the disocunt file.
     */
    file_path?: string;
    /**
     * - Progress of the file job.
     */
    progress?: number;
    /**
     * - List of extension identifiers.
     */
    extension_ids?: string[];
    /**
     * - List of zone identifiers.
     */
    zone_ids?: string[];
    /**
     * - Timestamp when the job was created.
     */
    created_on?: string;
    /**
     * - Timestamp when the job was last modified.
     */
    modified_on?: string;
    created_by?: UserDetails;
};
/** @returns {FileJobRequestSchema} */
declare function FileJobRequestSchema(): FileJobRequestSchema;
type FileJobRequestSchema = {
    /**
     * - Name of the file job.
     */
    name: string;
    /**
     * - Indicates if the job is active.
     */
    is_active: boolean;
    /**
     * - Unique Identifier for the company.
     */
    company_id: number;
    /**
     * - List of application identifiers.
     */
    app_ids: string[];
    /**
     * - Type of job.
     */
    job_type: string;
    /**
     * - Type of discount.
     */
    discount_type?: string;
    /**
     * - Level at which the discount is applied.
     */
    discount_level: string;
    /**
     * - Path to the disocunt file.
     */
    file_path?: string;
    /**
     * - List of brand identifiers.
     */
    brand_ids?: number[];
    /**
     * - List of store identifiers.
     */
    store_ids?: number[];
    /**
     * - List of price_factory IDs
     * associated with the discount.
     */
    price_factory_ids?: string[];
    validity: ValidityObject;
    /**
     * - Additional metadata for the disocunt.
     */
    meta?: any;
};
/** @returns {DownloadFileJob} */
declare function DownloadFileJob(): DownloadFileJob;
type DownloadFileJob = {
    /**
     * - List of brand identifiers.
     */
    brand_ids?: number[];
    /**
     * - List of store identifiers.
     */
    store_ids?: number[];
};
/** @returns {CancelJobResponseSchema} */
declare function CancelJobResponseSchema(): CancelJobResponseSchema;
type CancelJobResponseSchema = {
    /**
     * - Indicates if the job cancellation was successful.
     */
    success: boolean;
};
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
/** @returns {UserDetails} */
declare function UserDetails(): UserDetails;
type UserDetails = {
    /**
     * - Username of the user.
     */
    username: string;
    /**
     * - Unique identifier for the user.
     */
    user_id: string;
};
/** @returns {BadRequestObject} */
declare function BadRequestObject(): BadRequestObject;
type BadRequestObject = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
};
/** @returns {BadRequestData} */
declare function BadRequestData(): BadRequestData;
type BadRequestData = {
    /**
     * - Detailed information about the error.
     */
    message?: string;
};
/** @returns {BadRequestObjectGet} */
declare function BadRequestObjectGet(): BadRequestObjectGet;
type BadRequestObjectGet = {
    /**
     * - A brief description of the error encountered.
     */
    message?: string;
    /**
     * - Specific error code or identifier.
     */
    error?: string;
    data?: BadRequestData;
};
