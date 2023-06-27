export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {FinancePlatformValidator.creditlineDataplatform} arg - Arg object
     * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
     *   - Success response
     *
     * @name creditlineDataplatform
     * @summary:
     * @description:
     */
    creditlineDataplatform({ body }?: FinancePlatformValidator.creditlineDataplatform): Promise<FinancePlatformModel.CreditlineDataPlatformResponse>;
    /**
     * @param {FinancePlatformValidator.downloadCreditDebitNote} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
     *   - Success response
     *
     * @name downloadCreditDebitNote
     * @summary:
     * @description:
     */
    downloadCreditDebitNote({ body }?: FinancePlatformValidator.downloadCreditDebitNote): Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>;
    /**
     * @param {FinancePlatformValidator.downloadReport} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
     * @name downloadReport
     * @summary:
     * @description:
     */
    downloadReport({ body }?: FinancePlatformValidator.downloadReport): Promise<FinancePlatformModel.DownloadReportList>;
    /**
     * @param {FinancePlatformValidator.generateReport} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
     * @name generateReport
     * @summary:
     * @description:
     */
    generateReport({ body }?: FinancePlatformValidator.generateReport): Promise<FinancePlatformModel.GenerateReportJson>;
    /**
     * @param {FinancePlatformValidator.getAffiliate} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
     * @name getAffiliate
     * @summary:
     * @description:
     */
    getAffiliate({ body }?: FinancePlatformValidator.getAffiliate): Promise<FinancePlatformModel.GetAffiliateResponse>;
    /**
     * @param {FinancePlatformValidator.getData} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getData
     * @summary:
     * @description:
     */
    getData({ body }?: FinancePlatformValidator.getData): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.getReason} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
     * @name getReason
     * @summary:
     * @description:
     */
    getReason({ body }?: FinancePlatformValidator.getReason): Promise<FinancePlatformModel.GetReasonResponse>;
    /**
     * @param {FinancePlatformValidator.getReportList} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getReportList
     * @summary:
     * @description:
     */
    getReportList({ body }?: FinancePlatformValidator.getReportList): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.invoiceListing} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
     * @name invoiceListing
     * @summary:
     * @description:
     */
    invoiceListing({ body }?: FinancePlatformValidator.invoiceListing): Promise<FinancePlatformModel.InvoiceListingResponse>;
    /**
     * @param {FinancePlatformValidator.invoicePDF} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
     * @name invoicePDF
     * @summary:
     * @description:
     */
    invoicePDF({ body }?: FinancePlatformValidator.invoicePDF): Promise<FinancePlatformModel.InvoicePdfResponse>;
    /**
     * @param {FinancePlatformValidator.invoiceType} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
     * @name invoiceType
     * @summary:
     * @description:
     */
    invoiceType({ body }?: FinancePlatformValidator.invoiceType): Promise<FinancePlatformModel.InvoiceTypeResponse>;
    /**
     * @param {FinancePlatformValidator.isCreditlinePlatform} arg - Arg object
     * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
     *   Success response
     * @name isCreditlinePlatform
     * @summary:
     * @description:
     */
    isCreditlinePlatform({ body }?: FinancePlatformValidator.isCreditlinePlatform): Promise<FinancePlatformModel.IsCreditlinePlatformResponse>;
    /**
     * @param {FinancePlatformValidator.paymentProcess} arg - Arg object
     * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
     * @name paymentProcess
     * @summary:
     * @description:
     */
    paymentProcess({ body }?: FinancePlatformValidator.paymentProcess): Promise<FinancePlatformModel.PaymentProcessResponse>;
}
import FinancePlatformValidator = require("./FinancePlatformValidator");
import FinancePlatformModel = require("./FinancePlatformModel");
