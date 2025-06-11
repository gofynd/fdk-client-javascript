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
     * @summary: Cancel download job.
     * @description: Cancel download Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelDownloadJob/).
     */
    cancelDownloadJob({ id, requestHeaders }?: DiscountPlatformValidator.CancelDownloadJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: Cancel validation job.
     * @description: Validate file. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelValidationJob/).
     */
    cancelValidationJob({ id, requestHeaders }?: DiscountPlatformValidator.CancelValidationJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create discount.
     * @description: Create discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/createDiscount/).
     */
    createDiscount({ body, requestHeaders }?: DiscountPlatformValidator.CreateDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Download discount file.
     * @description: Validate file. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/downloadDiscountFile/).
     */
    downloadDiscountFile({ type, body, requestHeaders }?: DiscountPlatformValidator.DownloadDiscountFileParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Get discount by ID.
     * @description: Retrieve detailed information about a specific discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscount/).
     */
    getDiscount({ id, requestHeaders }?: DiscountPlatformValidator.GetDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: Get discounts.
     * @description: Retrieve a list of available discounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscounts/).
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
     * @summary: Get discounts.
     * @description: Retrieve a list of available discounts.
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
     * @summary: Get download job.
     * @description: Download file Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDownloadJob/).
     */
    getDownloadJob({ id, requestHeaders }?: DiscountPlatformValidator.GetDownloadJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: Get validation job.
     * @description: Validate file. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getValidationJob/).
     */
    getValidationJob({ id, requestHeaders }?: DiscountPlatformValidator.GetValidationJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Update discount.
     * @description: Create discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/updateDiscount/).
     */
    updateDiscount({ id, body, requestHeaders }?: DiscountPlatformValidator.UpdateDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Upsert discount items.
     * @description: Create custom discounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/upsertDiscountItems/).
     */
    upsertDiscountItems({ id, body, requestHeaders }?: DiscountPlatformValidator.UpsertDiscountItemsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate discount file.
     * @description: Validate file. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/validateDiscountFile/).
     */
    validateDiscountFile({ body, discount, requestHeaders }?: DiscountPlatformValidator.ValidateDiscountFileParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("./DiscountPlatformValidator");
import DiscountPlatformModel = require("./DiscountPlatformModel");
import Paginator = require("../../common/Paginator");
