export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    payment: Payment;
    application(applicationId: any): Application;
}
import { Lead } from "./PlatformModels";
import { Payment } from "./PlatformModels";
import Application = require("./PlatformApplicationClient");
