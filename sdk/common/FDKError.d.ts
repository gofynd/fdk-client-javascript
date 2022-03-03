export class FDKServerResponseError extends Error {
    /**
     * @param {string} message
     * @param {string} stackTrace
     * @param {string} [status]
     * @param {string} [code]
     */
    constructor(message: string, stackTrace: string, status?: string, code?: string, details?: any);
    stackTrace: string;
    status: string;
    code: string;
    details: any;
}
export class FDKClientValidationError extends Error {
    constructor(errObj: any);
    details: any;
}
export class FDKInvalidCredentialError extends Error {
    constructor(message: any);
}
export class FDKTokenIssueError extends Error {
    constructor(message: any);
}
export class FDKOAuthCodeError extends Error {
    constructor(message: any);
}
