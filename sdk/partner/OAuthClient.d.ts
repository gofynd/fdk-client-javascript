export = OAuthClient;
declare class OAuthClient extends BaseOAuthClient {
    getNewAccessToken(): Promise<void>;
    getAccesstokenObj({ grant_type, client_id, client_secret, scope }: {
        grant_type: any;
        client_id: any;
        client_secret: any;
        scope: any;
    }): Promise<any>;
}
import BaseOAuthClient = require("../common/BaseOAuthClient");
