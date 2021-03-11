export = OAuthClient;
declare class OAuthClient {
    constructor(config: any);
    config: any;
    token: any;
    refreshToken: any;
    setToken(token: any): void;
    __getState(): string;
    startAuthorization(options: any): string;
    verifyCallback(query: any): Promise<void>;
    getAccessToken(): Promise<any>;
}
