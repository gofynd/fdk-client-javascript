export = InternalConfig;
declare class InternalConfig {
    /** @param {object} _conf */
    constructor(_conf: object);
    domain: any;
    extraHeaders: any[];
    logLevel: any;
    setLogLevel(level: any): void;
}
