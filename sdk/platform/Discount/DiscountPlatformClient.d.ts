export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {DiscountPlatformValidator.CancelDownloadJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelDownloadJob
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelDownloadJob/).
     */
    cancelDownloadJob({ id, requestHeaders }?: DiscountPlatformValidator.CancelDownloadJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelValidationJob/).
     */
    cancelValidationJob({ id, requestHeaders }?: DiscountPlatformValidator.CancelValidationJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create Discount.
     * @description: Create Discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/createDiscount/).
     */
    createDiscount({ body, requestHeaders }?: DiscountPlatformValidator.CreateDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Validate File.
     * @description: Validate File. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/downloadDiscountFile/).
     */
    downloadDiscountFile({ type, body, requestHeaders }?: DiscountPlatformValidator.DownloadDiscountFileParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Fetch discount.
     * @description: Fetch discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscount/).
     */
    getDiscount({ id, requestHeaders }?: DiscountPlatformValidator.GetDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: Fetch discount list.
     * @description: Fetch discount list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscounts/).
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, requestHeaders, }?: DiscountPlatformValidator.GetDiscountsParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.ListOrCalender>;
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getDownloadJob
     * @summary: Download File Job.
     * @description: Download File Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDownloadJob/).
     */
    getDownloadJob({ id, requestHeaders }?: DiscountPlatformValidator.GetDownloadJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: Validate File Job.
     * @description: Validate File Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getValidationJob/).
     */
    getValidationJob({ id, requestHeaders }?: DiscountPlatformValidator.GetValidationJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Update Discount.
     * @description: Update Discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/updateDiscount/).
     */
    updateDiscount({ id, body, requestHeaders }?: DiscountPlatformValidator.UpdateDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Create custom discount from bulk.
     * @description: Create custom discounts through API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/upsertDiscountItems/).
     */
    upsertDiscountItems({ id, body, requestHeaders }?: DiscountPlatformValidator.UpsertDiscountItemsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate File.
     * @description: Validate File. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/validateDiscountFile/).
     */
    validateDiscountFile({ body, discount, requestHeaders }?: DiscountPlatformValidator.ValidateDiscountFileParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Discount/DiscountPlatformValidator");
import DiscountPlatformModel = require("sdk/output/javascript/code/sdk/platform/Discount/DiscountPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
