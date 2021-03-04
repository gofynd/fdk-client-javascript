export = ApplicationConfig;
declare class ApplicationConfig {
    /**
     * @param  {object} _conf
     * @param  {object} [_opts]
     */
    constructor(_conf: object, _opts?: object);
    applicationID: any;
    applicationToken: any;
    opts: any;
    validate(): void;
}
