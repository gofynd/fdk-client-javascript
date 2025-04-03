export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getCredentialsByEntity: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ContentPublicValidator.GetCredentialsByEntityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.CredentialsSchema>} - Success response
     * @name getCredentialsByEntity
     * @summary: Get credentials to power chat support systems
     * @description: Get credentials for support system - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getCredentialsByEntity/).
     */
    getCredentialsByEntity({ entity, requestHeaders }?: ContentPublicValidator.GetCredentialsByEntityParam, { responseHeaders }?: object, ...args: any[]): Promise<ContentPublicModel.CredentialsSchema>;
}
import ContentPublicValidator = require("./ContentPublicValidator");
import ContentPublicModel = require("./ContentPublicModel");
