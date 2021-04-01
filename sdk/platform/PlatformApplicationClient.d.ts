export = Application;
declare class Application {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    payment: Payment;
    catalog: Catalog;
    assets: Assets;
}
import { Lead } from "./PlatformApplicationModels";
import { Theme } from "./PlatformApplicationModels";
import { User } from "./PlatformApplicationModels";
import { Payment } from "./PlatformApplicationModels";
import { Catalog } from "./PlatformApplicationModels";
import { Assets } from "./PlatformApplicationModels";
