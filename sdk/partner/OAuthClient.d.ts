export = OAuthClient;
declare class OAuthClient extends BaseOAuthClient {
    startAuthorization(options: any): string;
    verifyCallback(query: any): Promise<void>;
    renewAccessToken(isOfflineToken?: boolean): Promise<any>;
    getNewAccessToken(): Promise<any>;
    getAccesstokenObj({ grant_type, refresh_token, code }: {
        grant_type: any;
        refresh_token: any;
        code: any;
    }): Promise<import("sdk/node_modules/axios").AxiosResponse<any, any>>;
    getOfflineAccessToken(scopes: any, code: any): Promise<import("sdk/node_modules/axios").AxiosResponse<any, any>>;
    getOfflineAccessTokenObj(scopes: any, code: any): Promise<import("sdk/node_modules/axios").AxiosResponse<any, any>>;
}
import BaseOAuthClient = require("sdk/output/javascript/code/sdk/common/BaseOAuthClient");
