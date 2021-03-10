export = Application;
declare class Application {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    companyProfile: CompanyProfile;
    inventory: Inventory;
}
import { Lead } from "./PlatformApplicationModels";
import { Theme } from "./PlatformApplicationModels";
import { User } from "./PlatformApplicationModels";
import { Content } from "./PlatformApplicationModels";
import { Communication } from "./PlatformApplicationModels";
import { CompanyProfile } from "./PlatformApplicationModels";
import { Inventory } from "./PlatformApplicationModels";
