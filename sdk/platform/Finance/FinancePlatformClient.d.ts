export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {FinancePlatformValidator.CreditlineDataplatformParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
     *   - Success response
     *
     * @name creditlineDataplatform
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditlineDataplatform/).
     */
    creditlineDataplatform({ body }?: FinancePlatformValidator.CreditlineDataplatformParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.CreditlineDataPlatformResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadCreditDebitNoteParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
     *   - Success response
     *
     * @name downloadCreditDebitNote
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadCreditDebitNote/).
     */
    downloadCreditDebitNote({ body }?: FinancePlatformValidator.DownloadCreditDebitNoteParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadReportParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
     * @name downloadReport
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReport/).
     */
    downloadReport({ body }?: FinancePlatformValidator.DownloadReportParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.DownloadReportList>;
    /**
     * @param {FinancePlatformValidator.GenerateReportParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
     * @name generateReport
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReport/).
     */
    generateReport({ body }?: FinancePlatformValidator.GenerateReportParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.GenerateReportJson>;
    /**
     * @param {FinancePlatformValidator.GetAffiliateParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
     * @name getAffiliate
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getAffiliate/).
     */
    getAffiliate({ body }?: FinancePlatformValidator.GetAffiliateParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.GetAffiliateResponse>;
    /**
     * @param {FinancePlatformValidator.GetDataParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getData
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getData/).
     */
    getData({ body }?: FinancePlatformValidator.GetDataParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.GetReasonParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
     * @name getReason
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReason/).
     */
    getReason({ body }?: FinancePlatformValidator.GetReasonParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.GetReasonResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportListParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getReportList
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportList/).
     */
    getReportList({ body }?: FinancePlatformValidator.GetReportListParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceListingParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
     * @name invoiceListing
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceListing/).
     */
    invoiceListing({ body }?: FinancePlatformValidator.InvoiceListingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.InvoiceListingResponse>;
    /**
     * @param {FinancePlatformValidator.InvoicePDFParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
     * @name invoicePDF
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePDF/).
     */
    invoicePDF({ body }?: FinancePlatformValidator.InvoicePDFParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.InvoicePdfResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceTypeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
     * @name invoiceType
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceType/).
     */
    invoiceType({ body }?: FinancePlatformValidator.InvoiceTypeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.InvoiceTypeResponse>;
    /**
     * @param {FinancePlatformValidator.IsCreditlinePlatformParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
     *   Success response
     * @name isCreditlinePlatform
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCreditlinePlatform/).
     */
    isCreditlinePlatform({ body }?: FinancePlatformValidator.IsCreditlinePlatformParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.IsCreditlinePlatformResponse>;
    /**
     * @param {FinancePlatformValidator.PaymentProcessParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
     * @name paymentProcess
     * @summary:
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/paymentProcess/).
     */
    paymentProcess({ body }?: FinancePlatformValidator.PaymentProcessParam, { headers }?: import("../PlatformAPIClient").Options): Promise<FinancePlatformModel.PaymentProcessResponse>;
}
import FinancePlatformValidator = require("./FinancePlatformValidator");
import FinancePlatformModel = require("./FinancePlatformModel");
