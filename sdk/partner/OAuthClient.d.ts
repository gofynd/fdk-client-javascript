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
    }): Promise<any>;
    getOfflineAccessToken(scopes: any, code: any): Promise<any>;
    getOfflineAccessTokenObj(scopes: any, code: any): Promise<any>;
}
import BaseOAuthClient = require("../common/BaseOAuthClient");
