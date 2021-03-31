export = ApplicationClient;
declare class ApplicationClient {
    constructor(config: any);
    catalog: Catalog;
    cart: Cart;
    fileStorage: FileStorage;
    feedback: Feedback;
    posCart: PosCart;
}
import { Catalog } from "./ApplicationModels";
import { Cart } from "./ApplicationModels";
import { FileStorage } from "./ApplicationModels";
import { Feedback } from "./ApplicationModels";
import { PosCart } from "./ApplicationModels";
