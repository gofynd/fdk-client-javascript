export = Credential;
declare class Credential {
    constructor(_conf: any, _opts: any);
    ApplicationId: any;
    ApplicationToken: any;
    opts: any;
    validate(): void;
}
