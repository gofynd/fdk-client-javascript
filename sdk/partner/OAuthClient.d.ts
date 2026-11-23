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
    }): Promise<import("axios").AxiosResponse<any, string, {}, any>>;
    getOfflineAccessToken(scopes: any, code: any): Promise<import("axios").AxiosResponse<any, {
        client_id: any;
        client_secret: any;
        grant_type: string;
        scope: any;
        code: any;
    }, {}, any>>;
    getOfflineAccessTokenObj(scopes: any, code: any): Promise<import("axios").AxiosResponse<any, {
        client_id: any;
        client_secret: any;
        grant_type: string;
        scope: any;
        code: any;
    }, {}, any>>;
}
import BaseOAuthClient = require("../common/BaseOAuthClient");
