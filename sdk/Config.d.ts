export = Config;
declare class Config {
    /** @param {object} _conf */
    constructor(_conf: object);
    domain: any;
    extraHeaders: any[];
    logLevel: any;
    setLogLevel(level: any): void;
}
