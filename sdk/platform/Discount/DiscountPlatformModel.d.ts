export = DiscountPlatformModel;
/**
 * @typedef BadRequestObject
 * @property {string} message
 */
/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string[]} app_ids
 * @property {number[]} [brand_ids]
 * @property {number} company_id
 * @property {string} discount_level
 * @property {string} discount_type
 * @property {string[]} extension_ids
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} job_type
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {number} [value]
 */
/**
 * @typedef DiscountItems
 * @property {number} [brand_uid]
 * @property {string} discount_type
 * @property {string} [item_code]
 * @property {string} [seller_identifier]
 * @property {number} value
 */
/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {number} company_id
 * @property {UserDetails} created_by
 * @property {string} created_on
 * @property {string} [discount_level]
 * @property {string} [discount_type]
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} [job_type]
 * @property {Object} [meta]
 * @property {UserDetails} modified_by
 * @property {string} modified_on
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {number} [value]
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef FileJobRequest
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {string} [discount_level]
 * @property {string} [discount_type]
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} [job_type]
 * @property {Object} [meta]
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */
/**
 * @typedef FileJobResponse
 * @property {Object} [body]
 * @property {number} company_id
 * @property {number} failed
 * @property {string} file_type
 * @property {string} stage
 * @property {number} total
 * @property {string} type
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef UserDetails
 * @property {string} user_id
 * @property {string} username
 */
/**
 * @typedef ValidityObject
 * @property {string} end
 * @property {string} start
 */
declare class DiscountPlatformModel {
}
declare namespace DiscountPlatformModel {
    export { BadRequestObject, BulkDiscount, CancelJobResponse, CreateUpdateDiscount, DiscountItems, DiscountJob, DownloadFileJob, FileJobRequest, FileJobResponse, ListOrCalender, Page, UserDetails, ValidityObject };
}
/** @returns {BadRequestObject} */
declare function BadRequestObject(): BadRequestObject;
type BadRequestObject = {
    message: string;
};
/** @returns {BulkDiscount} */
declare function BulkDiscount(): BulkDiscount;
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
};
/** @returns {CancelJobResponse} */
declare function CancelJobResponse(): CancelJobResponse;
type CancelJobResponse = {
    success: boolean;
};
/** @returns {CreateUpdateDiscount} */
declare function CreateUpdateDiscount(): CreateUpdateDiscount;
type CreateUpdateDiscount = {
    app_ids: string[];
    brand_ids?: number[];
    company_id: number;
    discount_level: string;
    discount_type: string;
    extension_ids: string[];
    file_path?: string;
    is_active: boolean;
    job_type: string;
    name: string;
    store_ids?: number[];
    validity: ValidityObject;
    value?: number;
};
/** @returns {DiscountItems} */
declare function DiscountItems(): DiscountItems;
type DiscountItems = {
    brand_uid?: number;
    discount_type: string;
    item_code?: string;
    seller_identifier?: string;
    value: number;
};
/** @returns {DiscountJob} */
declare function DiscountJob(): DiscountJob;
type DiscountJob = {
    _id: string;
    app_ids?: string[];
    brand_ids?: number[];
    company_id: number;
    created_by: UserDetails;
    created_on: string;
    discount_level?: string;
    discount_type?: string;
    file_path?: string;
    is_active: boolean;
    job_type?: string;
    meta?: any;
    modified_by: UserDetails;
    modified_on: string;
    name: string;
    store_ids?: number[];
    validity: ValidityObject;
    value?: number;
};
/** @returns {DownloadFileJob} */
declare function DownloadFileJob(): DownloadFileJob;
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
/** @returns {FileJobRequest} */
declare function FileJobRequest(): FileJobRequest;
type FileJobRequest = {
    app_ids?: string[];
    brand_ids?: number[];
    discount_level?: string;
    discount_type?: string;
    file_path?: string;
    is_active: boolean;
    job_type?: string;
    meta?: any;
    name: string;
    store_ids?: number[];
    validity: ValidityObject;
};
/** @returns {FileJobResponse} */
declare function FileJobResponse(): FileJobResponse;
type FileJobResponse = {
    body?: any;
    company_id: number;
    failed: number;
    file_type: string;
    stage: string;
    total: number;
    type: string;
};
/** @returns {ListOrCalender} */
declare function ListOrCalender(): ListOrCalender;
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {UserDetails} */
declare function UserDetails(): UserDetails;
type UserDetails = {
    user_id: string;
    username: string;
};
/** @returns {ValidityObject} */
declare function ValidityObject(): ValidityObject;
type ValidityObject = {
    end: string;
    start: string;
};
