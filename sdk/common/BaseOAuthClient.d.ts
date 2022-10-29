export = BaseOAuthClient;
declare class BaseOAuthClient {
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
    renewAccessToken(): Promise<void>;
}
