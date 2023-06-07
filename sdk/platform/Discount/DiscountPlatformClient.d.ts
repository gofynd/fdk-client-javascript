export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @returns {Promise<CancelJobResponse>} - Success response
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job.
     */
    cancelDownloadJob({ id }?: {
        id: string;
    }): Promise<CancelJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @returns {Promise<CancelJobResponse>} - Success response
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job.
     */
    cancelValidationJob({ id }?: {
        id: string;
    }): Promise<CancelJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUpdateDiscount} arg.body
     * @returns {Promise<DiscountJob>} - Success response
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    createDiscount({ body }?: {
        body: CreateUpdateDiscount;
    }): Promise<DiscountJob>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type
     * @param {DownloadFileJob} arg.body
     * @returns {Promise<FileJobResponse>} - Success response
     * @summary: Validate File.
     * @description: Validate File.
     */
    downloadDiscountFile({ type, body }?: {
        type: string;
        body: DownloadFileJob;
    }): Promise<FileJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Unique id.
     * @returns {Promise<DiscountJob>} - Success response
     * @summary: Fetch discount.
     * @description: Fetch discount.
     */
    getDiscount({ id }?: {
        id: string;
    }): Promise<DiscountJob>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.view] - Listing or calender. Default is listing.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a discount.
     * @param {number} [arg.pageNo] - Page number. Default is 1.
     * @param {number} [arg.pageSize] - Page size. Default is 12.
     * @param {boolean} [arg.archived] - Archived. Default is false.
     * @param {number} [arg.month] - Month. Default is current month.
     * @param {number} [arg.year] - Year. Default is current year.
     * @param {string} [arg.type] - Basic or custom.
     * @param {string[]} [arg.appIds] - Application ids.
     * @returns {Promise<ListOrCalender>} - Success response
     * @summary: Fetch discount list.
     * @description: Fetch discount list.
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: {
        view?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
        archived?: boolean;
        month?: number;
        year?: number;
        type?: string;
        appIds?: string[];
    }): Promise<ListOrCalender>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @returns {Promise<FileJobResponse>} - Success response
     * @summary: Download File Job.
     * @description: Download File Job.
     */
    getDownloadJob({ id }?: {
        id: string;
    }): Promise<FileJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @returns {Promise<FileJobResponse>} - Success response
     * @summary: Validate File Job.
     * @description: Validate File Job.
     */
    getValidationJob({ id }?: {
        id: string;
    }): Promise<FileJobResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @param {CreateUpdateDiscount} arg.body
     * @returns {Promise<DiscountJob>} - Success response
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    updateDiscount({ id, body }?: {
        id: string;
        body: CreateUpdateDiscount;
    }): Promise<DiscountJob>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Job ID of the discount.
     * @param {BulkDiscount} arg.body
     * @returns {Promise<Object>} - Success response
     * @summary: Create custom discount from bulk.
     * @description: Create custom discounts through API.
     */
    upsertDiscountItems({ id, body }?: {
        id: string;
        body: BulkDiscount;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.discount] - Discount
     * @param {FileJobRequest} arg.body
     * @returns {Promise<FileJobResponse>} - Success response
     * @summary: Validate File.
     * @description: Validate File.
     */
    validateDiscountFile({ body, discount }?: {
        discount?: string;
        body: FileJobRequest;
    }): Promise<FileJobResponse>;
}
