export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    billing: Billing;
    payment: Payment;
    order: Order;
    companyProfile: CompanyProfile;
    assets: Assets;
    inventory: Inventory;
    configuration: Configuration;
    application(applicationId: any): Application;
}
import { Lead } from "./PlatformModels";
import { Billing } from "./PlatformModels";
import { Payment } from "./PlatformModels";
import { Order } from "./PlatformModels";
import { CompanyProfile } from "./PlatformModels";
import { Assets } from "./PlatformModels";
import { Inventory } from "./PlatformModels";
import { Configuration } from "./PlatformModels";
import Application = require("./PlatformApplicationClient");
