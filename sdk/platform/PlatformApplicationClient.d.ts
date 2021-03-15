export = Application;
declare class Application {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    communication: Communication;
    payment: Payment;
}
import { Lead } from "./PlatformApplicationModels";
import { Theme } from "./PlatformApplicationModels";
import { User } from "./PlatformApplicationModels";
import { Communication } from "./PlatformApplicationModels";
import { Payment } from "./PlatformApplicationModels";
