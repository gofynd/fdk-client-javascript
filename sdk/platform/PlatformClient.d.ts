export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    payment: Payment;
    order: Order;
    companyProfile: CompanyProfile;
    assets: Assets;
    inventory: Inventory;
    marketplaces: Marketplaces;
    analytics: Analytics;
    application(applicationId: any): Application;
}
import { Lead } from "./PlatformModels";
import { Payment } from "./PlatformModels";
import { Order } from "./PlatformModels";
import { CompanyProfile } from "./PlatformModels";
import { Assets } from "./PlatformModels";
import { Inventory } from "./PlatformModels";
import { Marketplaces } from "./PlatformModels";
import { Analytics } from "./PlatformModels";
import Application = require("./PlatformApplicationClient");
