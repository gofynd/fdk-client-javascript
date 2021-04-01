export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    payment: Payment;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    assets: Assets;
    application(applicationId: any): Application;
}
import { Payment } from "./PlatformModels";
import { Catalog } from "./PlatformModels";
import { CompanyProfile } from "./PlatformModels";
import { Assets } from "./PlatformModels";
import Application = require("./PlatformApplicationClient");
