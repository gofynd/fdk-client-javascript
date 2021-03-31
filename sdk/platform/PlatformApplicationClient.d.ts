export = Application;
declare class Application {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    payment: Payment;
    assets: Assets;
}
import { Payment } from "./PlatformApplicationModels";
import { Assets } from "./PlatformApplicationModels";
