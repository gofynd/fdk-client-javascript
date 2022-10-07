export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateReportRequest} arg.body
     * @summary:
     * @description:
     */
    companyId({ body }?: {
        body: any;
    }): Promise<any>;
}
