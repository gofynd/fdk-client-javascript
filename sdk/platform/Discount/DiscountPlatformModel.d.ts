export = DiscountPlatformModel;
/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {string[]} [zone_ids]
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
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {DiscountMeta} [discount_meta]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {string} [seller_identifier]
 * @property {string} discount_type
 * @property {number} value
 * @property {DiscountMeta} [discount_meta]
 */
/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */
/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 * @property {string} _id - A unique identifier to distinguish and identify a job.
 * @property {string} file_path
 */
/**
 * @typedef FileJobRequest
 * @property {string} name
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {Object} [meta]
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */
/**
 * @typedef BadRequestObject
 * @property {string} message
 */
declare class DiscountPlatformModel {
}
declare namespace DiscountPlatformModel {
    export { ValidityObject, CreateUpdateDiscount, DiscountMeta, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, FileJobRequest, DownloadFileJob, CancelJobResponse, Page, UserDetails, BadRequestObject };
}
/** @returns {ValidityObject} */
declare function ValidityObject(): ValidityObject;
type ValidityObject = {
    start: string;
    end: string;
};
/** @returns {CreateUpdateDiscount} */
declare function CreateUpdateDiscount(): CreateUpdateDiscount;
type CreateUpdateDiscount = {
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids: string[];
    extension_ids: string[];
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    zone_ids?: string[];
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
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    discount_meta?: DiscountMeta;
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
/** @returns {ListOrCalender} */
declare function ListOrCalender(): ListOrCalender;
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
/** @returns {DiscountItems} */
declare function DiscountItems(): DiscountItems;
type DiscountItems = {
    item_code?: string;
    brand_uid?: number;
    seller_identifier?: string;
    discount_type: string;
    value: number;
    discount_meta?: DiscountMeta;
};
/** @returns {BulkDiscount} */
declare function BulkDiscount(): BulkDiscount;
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
};
/** @returns {FileJobResponse} */
declare function FileJobResponse(): FileJobResponse;
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
    /**
     * - A unique identifier to distinguish and identify a job.
     */
    _id: string;
    file_path: string;
};
/** @returns {FileJobRequest} */
declare function FileJobRequest(): FileJobRequest;
type FileJobRequest = {
    name: string;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
    meta?: any;
};
/** @returns {DownloadFileJob} */
declare function DownloadFileJob(): DownloadFileJob;
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
/** @returns {CancelJobResponse} */
declare function CancelJobResponse(): CancelJobResponse;
type CancelJobResponse = {
    success: boolean;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {UserDetails} */
declare function UserDetails(): UserDetails;
type UserDetails = {
    username: string;
    user_id: string;
};
/** @returns {BadRequestObject} */
declare function BadRequestObject(): BadRequestObject;
type BadRequestObject = {
    message: string;
};
