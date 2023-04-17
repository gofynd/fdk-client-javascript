export = PartnerClient;
declare class PartnerClient {
    constructor(config: any);
    config: any;
    swaggerTest: SwaggerTest;
    setExtraHeaders(header: any): void;
}
declare namespace PartnerClient {
    export { TestResponse };
}
import SwaggerTest = require("./SwaggerTest/SwaggerTestPartnerClient");
type TestResponse = {
    success?: boolean;
};
