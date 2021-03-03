export = FDKError;
declare class FDKError extends Error {
    /**
     * @param  {string} message
     * @param  {string} stackTrace
     * @param  {string} [status]
     * @param  {string} [code]
     */
    constructor(message: string, stackTrace: string, status?: string, code?: string);
    stackTrace: string;
    status: string;
    code: string;
}
