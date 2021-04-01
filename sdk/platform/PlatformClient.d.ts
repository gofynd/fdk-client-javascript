export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    payment: Payment;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    assets: Assets;
    inventory: Inventory;
    application(applicationId: any): Application;
}
import { Lead } from "./PlatformModels";
import { Payment } from "./PlatformModels";
import { Catalog } from "./PlatformModels";
import { CompanyProfile } from "./PlatformModels";
import { Assets } from "./PlatformModels";
import { Inventory } from "./PlatformModels";
import Application = require("./PlatformApplicationClient");
