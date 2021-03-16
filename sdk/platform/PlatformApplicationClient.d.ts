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
    payment: Payment;
    order: Order;
    cart: Cart;
}
import { Lead } from "./PlatformApplicationModels";
import { Theme } from "./PlatformApplicationModels";
import { User } from "./PlatformApplicationModels";
import { Content } from "./PlatformApplicationModels";
import { Payment } from "./PlatformApplicationModels";
import { Order } from "./PlatformApplicationModels";
import { Cart } from "./PlatformApplicationModels";
