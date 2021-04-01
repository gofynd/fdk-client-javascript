export = Application;
declare class Application {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    user: User;
    payment: Payment;
    catalog: Catalog;
    assets: Assets;
}
import { User } from "./PlatformApplicationModels";
import { Payment } from "./PlatformApplicationModels";
import { Catalog } from "./PlatformApplicationModels";
import { Assets } from "./PlatformApplicationModels";
