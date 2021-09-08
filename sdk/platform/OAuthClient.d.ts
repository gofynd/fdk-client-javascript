export = OAuthClient;
declare class OAuthClient {
    constructor(config: any);
    config: any;
    token: any;
    refreshToken: any;
    retryOAuthTokenTimer: NodeJS.Timeout;
    raw_token: any;
    token_expires_in: any;
    getAccessToken(): any;
    setToken(token: any): void;
    retryOAuthToken(expires_in: any): void;
    startAuthorization(options: any): string;
    verifyCallback(query: any): Promise<void>;
    renewAccessToken(): Promise<any>;
    getAccesstoken({ grant_type, refresh_token, code }: {
        grant_type: any;
        refresh_token: any;
        code: any;
    }): Promise<any>;
}
