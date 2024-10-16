export = FinanceApplicationModel;
/**
 * @typedef CustomerCreditBalanceRequestSchema
 * @property {CustomerCreditBalanceReqData} [data]
 */
/**
 * @typedef CustomerCreditBalanceReqData
 * @property {number} seller_id - Unique identifier for the seller requesting
 *   the credit balance.
 * @property {string} affiliate_id - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string} [customer_mobile_number] - Mobile number of the customer
 *   whose credit balance is being requested.
 * @property {string} [customer_email] - Email of the customer whose credit
 *   balance is being requested.
 */
/**
 * @typedef CustomerCreditBalanceResponseSchema
 * @property {boolean} [success] - Indicates whether the credit note balance
 *   request was successful.
 * @property {CustomerCreditBalanceResData} [data]
 */
/**
 * @typedef CustomerCreditBalanceResData
 * @property {string} [customer_mobile_number] - Mobile number of the customer
 *   whose credit balance information is being returned.
 * @property {string} [customer_email] - Email of the customer whose credit
 *   balance information is being returned.
 * @property {number} [total_credited_balance] - Total amount of credit
 *   available to the customer.
 * @property {number} [total_locked_amount] - Total amount of credit balance
 *   that is currently locked and unavailable for use.
 * @property {number} [allowed_redemption_amount] - Total amount of credit
 *   balance that the customer is allowed to redeem.
 */
/**
 * @typedef Error
 * @property {number} [status] - The HTTP status code associated with the error.
 * @property {string} [reason] - A brief explanation of the error.
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {string} [message] - A detailed message describing the error.
 * @property {string} [code] - A specific code representing the error.
 * @property {string} [exception] - The exception that caused the error.
 * @property {string} [info] - Additional information about the error.
 * @property {string} [request_id] - The unique identifier for the request that
 *   caused the error.
 * @property {string} [stack_trace] - The stack trace of the error for debugging purposes.
 * @property {ErrorMeta} [meta]
 */
/**
 * @typedef ErrorMeta
 * @property {ErrorMetaItems[]} [columns_errors] - A list of errors related to
 *   specific columns.
 */
/**
 * @typedef ErrorMetaItems
 * @property {number} [code] - The error code for the specific column error.
 * @property {string} [message] - The error message for the specific column error.
 */
/**
 * @typedef LockUnlockRequestData
 * @property {number} seller_id - The unique identifier for the seller.
 * @property {string} affiliate_id - The unique identifier of sale channels or
 *   application as affiliate_id associated with the seller.
 * @property {string} ordering_channel - The channel through which the order was placed.
 * @property {string} credit_note_number - A unique identifier for the credit note.
 * @property {number} amount - The total amount of credit originally available
 *   in the note.
 * @property {string} request_type - Type of request for which api is called.
 *   Either to lock credit note or unlock.
 * @property {string} order_id - A unique identifier of the order against which
 *   credit note is generated.
 */
/**
 * @typedef LockUnlockRequestSchema
 * @property {LockUnlockRequestData} [data]
 */
/**
 * @typedef LockUnlockResponseData
 * @property {string} [credit_note_number] - A unique identifier for the credit note.
 * @property {number} [amount] - The total amount of credit originally available
 *   in the note.
 */
/**
 * @typedef LockUnlockResponseSchema
 * @property {boolean} [success] - Indicates whether the credit note lock/unlock
 *   request was successful.
 * @property {LockUnlockResponseData} [data]
 */
declare class FinanceApplicationModel {
}
declare namespace FinanceApplicationModel {
    export { CustomerCreditBalanceRequestSchema, CustomerCreditBalanceReqData, CustomerCreditBalanceResponseSchema, CustomerCreditBalanceResData, Error, ErrorMeta, ErrorMetaItems, LockUnlockRequestData, LockUnlockRequestSchema, LockUnlockResponseData, LockUnlockResponseSchema };
}
/** @returns {CustomerCreditBalanceRequestSchema} */
declare function CustomerCreditBalanceRequestSchema(): CustomerCreditBalanceRequestSchema;
type CustomerCreditBalanceRequestSchema = {
    data?: CustomerCreditBalanceReqData;
};
/** @returns {CustomerCreditBalanceReqData} */
declare function CustomerCreditBalanceReqData(): CustomerCreditBalanceReqData;
type CustomerCreditBalanceReqData = {
    /**
     * - Unique identifier for the seller requesting
     * the credit balance.
     */
    seller_id: number;
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id: string;
    /**
     * - Mobile number of the customer
     * whose credit balance is being requested.
     */
    customer_mobile_number?: string;
    /**
     * - Email of the customer whose credit
     * balance is being requested.
     */
    customer_email?: string;
};
/** @returns {CustomerCreditBalanceResponseSchema} */
declare function CustomerCreditBalanceResponseSchema(): CustomerCreditBalanceResponseSchema;
type CustomerCreditBalanceResponseSchema = {
    /**
     * - Indicates whether the credit note balance
     * request was successful.
     */
    success?: boolean;
    data?: CustomerCreditBalanceResData;
};
/** @returns {CustomerCreditBalanceResData} */
declare function CustomerCreditBalanceResData(): CustomerCreditBalanceResData;
type CustomerCreditBalanceResData = {
    /**
     * - Mobile number of the customer
     * whose credit balance information is being returned.
     */
    customer_mobile_number?: string;
    /**
     * - Email of the customer whose credit
     * balance information is being returned.
     */
    customer_email?: string;
    /**
     * - Total amount of credit
     * available to the customer.
     */
    total_credited_balance?: number;
    /**
     * - Total amount of credit balance
     * that is currently locked and unavailable for use.
     */
    total_locked_amount?: number;
    /**
     * - Total amount of credit
     * balance that the customer is allowed to redeem.
     */
    allowed_redemption_amount?: number;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    /**
     * - The HTTP status code associated with the error.
     */
    status?: number;
    /**
     * - A brief explanation of the error.
     */
    reason?: string;
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - A detailed message describing the error.
     */
    message?: string;
    /**
     * - A specific code representing the error.
     */
    code?: string;
    /**
     * - The exception that caused the error.
     */
    exception?: string;
    /**
     * - Additional information about the error.
     */
    info?: string;
    /**
     * - The unique identifier for the request that
     * caused the error.
     */
    request_id?: string;
    /**
     * - The stack trace of the error for debugging purposes.
     */
    stack_trace?: string;
    meta?: ErrorMeta;
};
/** @returns {ErrorMeta} */
declare function ErrorMeta(): ErrorMeta;
type ErrorMeta = {
    /**
     * - A list of errors related to
     * specific columns.
     */
    columns_errors?: ErrorMetaItems[];
};
/** @returns {ErrorMetaItems} */
declare function ErrorMetaItems(): ErrorMetaItems;
type ErrorMetaItems = {
    /**
     * - The error code for the specific column error.
     */
    code?: number;
    /**
     * - The error message for the specific column error.
     */
    message?: string;
};
/** @returns {LockUnlockRequestData} */
declare function LockUnlockRequestData(): LockUnlockRequestData;
type LockUnlockRequestData = {
    /**
     * - The unique identifier for the seller.
     */
    seller_id: number;
    /**
     * - The unique identifier of sale channels or
     * application as affiliate_id associated with the seller.
     */
    affiliate_id: string;
    /**
     * - The channel through which the order was placed.
     */
    ordering_channel: string;
    /**
     * - A unique identifier for the credit note.
     */
    credit_note_number: string;
    /**
     * - The total amount of credit originally available
     * in the note.
     */
    amount: number;
    /**
     * - Type of request for which api is called.
     * Either to lock credit note or unlock.
     */
    request_type: string;
    /**
     * - A unique identifier of the order against which
     * credit note is generated.
     */
    order_id: string;
};
/** @returns {LockUnlockRequestSchema} */
declare function LockUnlockRequestSchema(): LockUnlockRequestSchema;
type LockUnlockRequestSchema = {
    data?: LockUnlockRequestData;
};
/** @returns {LockUnlockResponseData} */
declare function LockUnlockResponseData(): LockUnlockResponseData;
type LockUnlockResponseData = {
    /**
     * - A unique identifier for the credit note.
     */
    credit_note_number?: string;
    /**
     * - The total amount of credit originally available
     * in the note.
     */
    amount?: number;
};
/** @returns {LockUnlockResponseSchema} */
declare function LockUnlockResponseSchema(): LockUnlockResponseSchema;
type LockUnlockResponseSchema = {
    /**
     * - Indicates whether the credit note lock/unlock
     * request was successful.
     */
    success?: boolean;
    data?: LockUnlockResponseData;
};
