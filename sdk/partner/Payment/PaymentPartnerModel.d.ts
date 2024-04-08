export = PaymentPartnerModel;
/**
 * @typedef SubPaymentMode
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [logo]
 */
/**
 * @typedef PaymentMethod
 * @property {number} [id]
 * @property {SubPaymentMode[]} [sub_payment_mode]
 * @property {string} [name]
 * @property {Logos} [logos]
 * @property {string} [slug]
 */
/**
 * @typedef Logos
 * @property {string} [small]
 * @property {string} [large]
 */
/**
 * @typedef SessionPath
 * @property {string} [type]
 * @property {string} [uri_path]
 * @property {string} [content_type]
 * @property {string[]} [methods]
 */
/**
 * @typedef RequiredSessionPath
 * @property {string} [version]
 * @property {SessionPath[]} [paths]
 */
/**
 * @typedef CheckoutType
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef Mode
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef Country
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef Currency
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef PaymentConfigResponse
 * @property {boolean} [success]
 * @property {PaymentMethod[]} [payment_methods]
 * @property {RequiredSessionPath[]} [required_session_paths]
 * @property {CheckoutType[]} [checkout_type]
 * @property {boolean[]} [auto_capture]
 * @property {Mode[]} [mode]
 * @property {Country[]} [country]
 * @property {Currency[]} [currency]
 */
/**
 * @typedef PostPayoutResponse
 * @property {boolean} [success]
 * @property {Users} [users]
 * @property {boolean} [is_active]
 * @property {string} [unique_transfer_no]
 * @property {string} [aggregator]
 * @property {string} [transfer_type]
 * @property {BankDetails} [bank_details]
 * @property {boolean} [created]
 * @property {Payouts} [payouts]
 * @property {string} [payment_status]
 * @property {boolean} [updated]
 */
/**
 * @typedef PostPayoutRequest
 * @property {string} [unique_external_id]
 * @property {Users} [users]
 * @property {boolean} [is_active]
 * @property {string} [unique_transfer_no]
 * @property {string} [aggregator]
 * @property {string} [transfer_type]
 * @property {BankDetails} [bank_details]
 * @property {boolean} [created]
 * @property {Payouts} [payouts]
 * @property {string} [payment_status]
 * @property {boolean} [updated]
 */
/**
 * @typedef Users
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [unique_external_id]
 * @property {string} [mobile]
 */
/**
 * @typedef BankDetails
 * @property {string} [account_no]
 * @property {string} [city]
 * @property {string} [bank_name]
 * @property {string} [account_type]
 * @property {string} [state]
 * @property {string} [account_holder]
 * @property {string} [country]
 * @property {string} [ifsc_code]
 * @property {string} [branch_name]
 */
/**
 * @typedef Payouts
 * @property {string} [aggregator_fund_id]
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} [code] - Error descrption code.
 * @property {string} description - Error human understandable description.
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not
 */
/**
 * @typedef PayoutResponse
 * @property {PayoutItem[]} [items]
 * @property {boolean} [success]
 */
/**
 * @typedef MoreAttributes
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [bank_name]
 * @property {string} [ifsc_code]
 * @property {string} [account_no]
 * @property {string} [branch_name]
 * @property {string} [account_type]
 * @property {string} [account_holder]
 */
/**
 * @typedef Customers
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [unique_external_id]
 */
/**
 * @typedef PayoutsAggregator
 * @property {number} [payout_details_id]
 * @property {number} [aggregator_id]
 * @property {string} [aggregator_fund_id]
 */
/**
 * @typedef PayoutItem
 * @property {string} [unique_transfer_no]
 * @property {MoreAttributes} [more_attributes]
 * @property {string} [transfer_type]
 * @property {boolean} [is_default]
 * @property {boolean} [is_active]
 * @property {Customers} [customers]
 * @property {PayoutsAggregator[]} [payouts_aggregators]
 */
declare class PaymentPartnerModel {
}
declare namespace PaymentPartnerModel {
    export { SubPaymentMode, PaymentMethod, Logos, SessionPath, RequiredSessionPath, CheckoutType, Mode, Country, Currency, PaymentConfigResponse, PostPayoutResponse, PostPayoutRequest, Users, BankDetails, Payouts, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PayoutResponse, MoreAttributes, Customers, PayoutsAggregator, PayoutItem };
}
/** @returns {SubPaymentMode} */
declare function SubPaymentMode(): SubPaymentMode;
type SubPaymentMode = {
    code?: string;
    name?: string;
    logo?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    id?: number;
    sub_payment_mode?: SubPaymentMode[];
    name?: string;
    logos?: Logos;
    slug?: string;
};
/** @returns {Logos} */
declare function Logos(): Logos;
type Logos = {
    small?: string;
    large?: string;
};
/** @returns {SessionPath} */
declare function SessionPath(): SessionPath;
type SessionPath = {
    type?: string;
    uri_path?: string;
    content_type?: string;
    methods?: string[];
};
/** @returns {RequiredSessionPath} */
declare function RequiredSessionPath(): RequiredSessionPath;
type RequiredSessionPath = {
    version?: string;
    paths?: SessionPath[];
};
/** @returns {CheckoutType} */
declare function CheckoutType(): CheckoutType;
type CheckoutType = {
    name?: string;
    slug?: string;
};
/** @returns {Mode} */
declare function Mode(): Mode;
type Mode = {
    name?: string;
    slug?: string;
};
/** @returns {Country} */
declare function Country(): Country;
type Country = {
    name?: string;
    slug?: string;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    name?: string;
    slug?: string;
};
/** @returns {PaymentConfigResponse} */
declare function PaymentConfigResponse(): PaymentConfigResponse;
type PaymentConfigResponse = {
    success?: boolean;
    payment_methods?: PaymentMethod[];
    required_session_paths?: RequiredSessionPath[];
    checkout_type?: CheckoutType[];
    auto_capture?: boolean[];
    mode?: Mode[];
    country?: Country[];
    currency?: Currency[];
};
/** @returns {PostPayoutResponse} */
declare function PostPayoutResponse(): PostPayoutResponse;
type PostPayoutResponse = {
    success?: boolean;
    users?: Users;
    is_active?: boolean;
    unique_transfer_no?: string;
    aggregator?: string;
    transfer_type?: string;
    bank_details?: BankDetails;
    created?: boolean;
    payouts?: Payouts;
    payment_status?: string;
    updated?: boolean;
};
/** @returns {PostPayoutRequest} */
declare function PostPayoutRequest(): PostPayoutRequest;
type PostPayoutRequest = {
    unique_external_id?: string;
    users?: Users;
    is_active?: boolean;
    unique_transfer_no?: string;
    aggregator?: string;
    transfer_type?: string;
    bank_details?: BankDetails;
    created?: boolean;
    payouts?: Payouts;
    payment_status?: string;
    updated?: boolean;
};
/** @returns {Users} */
declare function Users(): Users;
type Users = {
    name?: string;
    email?: string;
    unique_external_id?: string;
    mobile?: string;
};
/** @returns {BankDetails} */
declare function BankDetails(): BankDetails;
type BankDetails = {
    account_no?: string;
    city?: string;
    bank_name?: string;
    account_type?: string;
    state?: string;
    account_holder?: string;
    country?: string;
    ifsc_code?: string;
    branch_name?: string;
};
/** @returns {Payouts} */
declare function Payouts(): Payouts;
type Payouts = {
    aggregator_fund_id?: string;
};
/** @returns {ErrorCodeAndDescription} */
declare function ErrorCodeAndDescription(): ErrorCodeAndDescription;
type ErrorCodeAndDescription = {
    /**
     * - Error descrption code.
     */
    code?: string;
    /**
     * - Error human understandable description.
     */
    description: string;
};
/** @returns {HttpErrorCodeAndResponse} */
declare function HttpErrorCodeAndResponse(): HttpErrorCodeAndResponse;
type HttpErrorCodeAndResponse = {
    error?: ErrorCodeAndDescription;
    /**
     * - Response is successful or not
     */
    success: boolean;
};
/** @returns {PayoutResponse} */
declare function PayoutResponse(): PayoutResponse;
type PayoutResponse = {
    items?: PayoutItem[];
    success?: boolean;
};
/** @returns {MoreAttributes} */
declare function MoreAttributes(): MoreAttributes;
type MoreAttributes = {
    city?: string;
    state?: string;
    country?: string;
    bank_name?: string;
    ifsc_code?: string;
    account_no?: string;
    branch_name?: string;
    account_type?: string;
    account_holder?: string;
};
/** @returns {Customers} */
declare function Customers(): Customers;
type Customers = {
    id?: number;
    name?: string;
    mobile?: string;
    email?: string;
    unique_external_id?: string;
};
/** @returns {PayoutsAggregator} */
declare function PayoutsAggregator(): PayoutsAggregator;
type PayoutsAggregator = {
    payout_details_id?: number;
    aggregator_id?: number;
    aggregator_fund_id?: string;
};
/** @returns {PayoutItem} */
declare function PayoutItem(): PayoutItem;
type PayoutItem = {
    unique_transfer_no?: string;
    more_attributes?: MoreAttributes;
    transfer_type?: string;
    is_default?: boolean;
    is_active?: boolean;
    customers?: Customers;
    payouts_aggregators?: PayoutsAggregator[];
};
