export = ApplicationClient;
declare class ApplicationClient {
    constructor(config: any);
    catalog: Catalog;
    cart: Cart;
    lead: Lead;
    theme: Theme;
    user: User;
    share: Share;
    fileStorage: FileStorage;
    order: Order;
    feedback: Feedback;
    posCart: PosCart;
    logistic: Logistic;
}
import { Catalog } from "./ApplicationModels";
import { Cart } from "./ApplicationModels";
import { Lead } from "./ApplicationModels";
import { Theme } from "./ApplicationModels";
import { User } from "./ApplicationModels";
import { Share } from "./ApplicationModels";
import { FileStorage } from "./ApplicationModels";
import { Order } from "./ApplicationModels";
import { Feedback } from "./ApplicationModels";
import { PosCart } from "./ApplicationModels";
import { Logistic } from "./ApplicationModels";
