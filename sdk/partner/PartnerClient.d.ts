export = PartnerClient;
declare class PartnerClient {
    constructor(config: any);
    config: any;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
import Partner = require("./Partner/PartnerPartnerClient");
