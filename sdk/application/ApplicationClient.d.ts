export = ApplicationClient;
/**
 * Represents the client for the application.
 *
 * @class
 */
declare class ApplicationClient {
    /** @param {import("./ApplicationConfig")} config - The application configuration. */
    constructor(config: import("./ApplicationConfig"));
    config: import("sdk/output/javascript/code/sdk/application/ApplicationConfig");
    cart: Cart;
    catalog: Catalog;
    common: Common;
    communication: Communication;
    configuration: Configuration;
    content: Content;
    fileStorage: FileStorage;
    lead: Lead;
    logistic: Logistic;
    order: Order;
    payment: Payment;
    posCart: PosCart;
    rewards: Rewards;
    share: Share;
    theme: Theme;
    user: User;
    /**
     * Sets the cookie for the application.
     *
     * @param {string} cookie - The cookie to set, This cookie will be included
     *   in the headers of every subsequent request.
     */
    setCookie(cookie: string): void;
    /**
     * Sets the location details for the application.
     *
     * @param {import("./ApplicationConfig").LocationObject} locationDetails -
     *   The location details to set.
     * @param {boolean} [isNew=false] - If passed `true`, it will flush all the
     *   old data and assign new one. if passed `false` it will update only new
     *   passed values and keep old values for other data. Default is `false`
     */
    setLocationDetails(locationDetails: import("./ApplicationConfig").LocationObject, isNew?: boolean): void;
    /**
     * Sets the currency code in ApplicationConfig.
     *
     * @param {string} currencyCode - The currency code to set.
     * @throws {FDKClientValidationError} When the provided currency code is not a string.
     */
    setCurrencyCode(currencyCode: string): void;
    /**
     * Sets the extra headers for the application.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import Cart = require("sdk/output/javascript/code/sdk/application/Cart/CartApplicationClient");
import Catalog = require("sdk/output/javascript/code/sdk/application/Catalog/CatalogApplicationClient");
import Common = require("sdk/output/javascript/code/sdk/application/Common/CommonApplicationClient");
import Communication = require("sdk/output/javascript/code/sdk/application/Communication/CommunicationApplicationClient");
import Configuration = require("sdk/output/javascript/code/sdk/application/Configuration/ConfigurationApplicationClient");
import Content = require("sdk/output/javascript/code/sdk/application/Content/ContentApplicationClient");
import FileStorage = require("sdk/output/javascript/code/sdk/application/FileStorage/FileStorageApplicationClient");
import Lead = require("sdk/output/javascript/code/sdk/application/Lead/LeadApplicationClient");
import Logistic = require("sdk/output/javascript/code/sdk/application/Logistic/LogisticApplicationClient");
import Order = require("sdk/output/javascript/code/sdk/application/Order/OrderApplicationClient");
import Payment = require("sdk/output/javascript/code/sdk/application/Payment/PaymentApplicationClient");
import PosCart = require("sdk/output/javascript/code/sdk/application/PosCart/PosCartApplicationClient");
import Rewards = require("sdk/output/javascript/code/sdk/application/Rewards/RewardsApplicationClient");
import Share = require("sdk/output/javascript/code/sdk/application/Share/ShareApplicationClient");
import Theme = require("sdk/output/javascript/code/sdk/application/Theme/ThemeApplicationClient");
import User = require("sdk/output/javascript/code/sdk/application/User/UserApplicationClient");
