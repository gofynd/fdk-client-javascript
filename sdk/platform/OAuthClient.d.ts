export = OAuthClient;
declare class OAuthClient {
    constructor(config: any);
    config: any;
    token: any;
    refreshToken: any;
    retryOAuthTokenTimer: NodeJS.Timeout;
    raw_token: any;
    token_expires_in: any;
    token_expires_at: number;
    useAutoRenewTimer: any;
    getAccessToken(): Promise<any>;
    isTokenExpired(ttl?: number): boolean;
    setToken(token: any): void;
    retryOAuthToken(expires_in: any): void;
    startAuthorization(options: any): string;
    verifyCallback(query: any): Promise<void>;
    renewAccessToken(): Promise<any>;
    getAccesstokenObj({ grant_type, refresh_token, code }: {
        grant_type: any;
        refresh_token: any;
        code: any;
    }): Promise<any>;
    getOfflineAccessToken(scopes: any, code: any): Promise<any>;
    getOfflineAccessTokenObj(scopes: any, code: any): Promise<any>;
}
