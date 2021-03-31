export = ApplicationClient;
declare class ApplicationClient {
    constructor(config: any);
    catalog: Catalog;
    cart: Cart;
    fileStorage: FileStorage;
    order: Order;
    feedback: Feedback;
    posCart: PosCart;
    logistic: Logistic;
}
import { Catalog } from "./ApplicationModels";
import { Cart } from "./ApplicationModels";
import { FileStorage } from "./ApplicationModels";
import { Order } from "./ApplicationModels";
import { Feedback } from "./ApplicationModels";
import { PosCart } from "./ApplicationModels";
import { Logistic } from "./ApplicationModels";
