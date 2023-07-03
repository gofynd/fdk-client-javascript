export = ApplicationConfig;
declare class ApplicationConfig {
    /**
     * @param {object} _conf
     * @param {object} [_opts]
     */
    constructor(_conf: object, _opts?: object);
    applicationID: any;
    applicationToken: any;
    opts: any;
    domain: any;
    logLevel: any;
    extraHeaders: any[];
    locationDetails: any;
    currencyCode: any;
    setLogLevel(level: any): void;
    setCookie(cookie: any): void;
    cookie: any;
    validate(): void;
}
