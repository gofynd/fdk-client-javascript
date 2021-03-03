export = ApplicationConfig;
declare class ApplicationConfig {
    constructor(_conf: any, _opts: any);
    applicationID: any;
    applicationToken: any;
    opts: any;
    domain: any;
    validate(): void;
}
