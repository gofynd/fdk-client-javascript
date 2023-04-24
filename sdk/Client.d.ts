export = Client;
declare class Client {
    constructor(config: any);
    config: any;
    setExtraHeaders(header: any): void;
}
