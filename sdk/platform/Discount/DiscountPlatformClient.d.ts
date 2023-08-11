export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {DiscountPlatformValidator.CancelDownloadJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelDownloadJob
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelDownloadJob/).
     */
    cancelDownloadJob({ id }?: DiscountPlatformValidator.CancelDownloadJobParam): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelValidationJob/).
     */
    cancelValidationJob({ id }?: DiscountPlatformValidator.CancelValidationJobParam): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create Discount.
     * @description: Create Discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/createDiscount/).
     */
    createDiscount({ body }?: DiscountPlatformValidator.CreateDiscountParam): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Validate File.
     * @description: Validate File. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/downloadDiscountFile/).
     */
    downloadDiscountFile({ type, body }?: DiscountPlatformValidator.DownloadDiscountFileParam): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Fetch discount.
     * @description: Fetch discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscount/).
     */
    getDiscount({ id }?: DiscountPlatformValidator.GetDiscountParam): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: Fetch discount list.
     * @description: Fetch discount list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscounts/).
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: DiscountPlatformValidator.GetDiscountsParam): Promise<DiscountPlatformModel.ListOrCalender>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.view] - Listing or calender. Default is listing.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a discount.
     * @param {number} [arg.pageSize] - Page size. Default is 12.
     * @param {boolean} [arg.archived] - Archived. Default is false.
     * @param {number} [arg.month] - Month. Default is current month.
     * @param {number} [arg.year] - Year. Default is current year.
     * @param {string} [arg.type] - Basic or custom.
     * @param {string[]} [arg.appIds] - Application ids.
     * @returns {Paginator<DiscountPlatformModel.ListOrCalender>}
     * @summary: Fetch discount list.
     * @description: Fetch discount list.
     */
    getDiscountsPaginator({ view, q, pageSize, archived, month, year, type, appIds, }?: {
        view?: string;
        q?: string;
        pageSize?: number;
        archived?: boolean;
        month?: number;
        year?: number;
        type?: string;
        appIds?: string[];
    }): Paginator<DiscountPlatformModel.ListOrCalender>;
    /**
     * @param {DiscountPlatformValidator.GetDownloadJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getDownloadJob
     * @summary: Download File Job.
     * @description: Download File Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDownloadJob/).
     */
    getDownloadJob({ id }?: DiscountPlatformValidator.GetDownloadJobParam): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: Validate File Job.
     * @description: Validate File Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getValidationJob/).
     */
    getValidationJob({ id }?: DiscountPlatformValidator.GetValidationJobParam): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Create Discount.
     * @description: Create Discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/updateDiscount/).
     */
    updateDiscount({ id, body }?: DiscountPlatformValidator.UpdateDiscountParam): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Create custom discount from bulk.
     * @description: Create custom discounts through API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/upsertDiscountItems/).
     */
    upsertDiscountItems({ id, body }?: DiscountPlatformValidator.UpsertDiscountItemsParam): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate File.
     * @description: Validate File. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/validateDiscountFile/).
     */
    validateDiscountFile({ body, discount }?: DiscountPlatformValidator.ValidateDiscountFileParam): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("./DiscountPlatformValidator");
import DiscountPlatformModel = require("./DiscountPlatformModel");
import Paginator = require("../../common/Paginator");
