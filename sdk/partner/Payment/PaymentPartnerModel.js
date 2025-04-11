const Joi = require("joi");

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
 * @typedef RefundTo
 * @property {string} [source] - Refund credited to the original payment mode
 *   used by the user for the payment.
 * @property {string} [others] - Refund credited to a different payment mode not
 *   originally used by the user for the payment.
 */

/**
 * @typedef PaymentConfigDetails
 * @property {boolean} [success]
 * @property {RefundTo} [refund_to]
 * @property {PaymentMethod[]} [payment_methods]
 * @property {RequiredSessionPath[]} [required_session_paths]
 * @property {CheckoutType[]} [checkout_type]
 * @property {boolean[]} [auto_capture]
 * @property {Mode[]} [mode]
 * @property {Country[]} [country]
 * @property {Currency[]} [currency]
 */

/**
 * @typedef PostPayoutDetails
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
 * @typedef PostPayout
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
 * @typedef HttpErrorCodeAndMessage
 * @property {ErrorCodeAndDescription} [error]
 * @property {boolean} success - Response is successful or not
 */

/**
 * @typedef PayoutDetails
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

class PaymentPartnerModel {
  /** @returns {SubPaymentMode} */
  static SubPaymentMode() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      id: Joi.number(),
      sub_payment_mode: Joi.array().items(PaymentPartnerModel.SubPaymentMode()),
      name: Joi.string().allow(""),
      logos: PaymentPartnerModel.Logos(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Logos} */
  static Logos() {
    return Joi.object({
      small: Joi.string().allow(""),
      large: Joi.string().allow(""),
    });
  }

  /** @returns {SessionPath} */
  static SessionPath() {
    return Joi.object({
      type: Joi.string().allow(""),
      uri_path: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      methods: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RequiredSessionPath} */
  static RequiredSessionPath() {
    return Joi.object({
      version: Joi.string().allow(""),
      paths: Joi.array().items(PaymentPartnerModel.SessionPath()),
    });
  }

  /** @returns {CheckoutType} */
  static CheckoutType() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Mode} */
  static Mode() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Country} */
  static Country() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {RefundTo} */
  static RefundTo() {
    return Joi.object({
      source: Joi.string().allow(""),
      others: Joi.string().allow(""),
    }).allow(null);
  }

  /** @returns {PaymentConfigDetails} */
  static PaymentConfigDetails() {
    return Joi.object({
      success: Joi.boolean(),
      refund_to: PaymentPartnerModel.RefundTo(),
      payment_methods: Joi.array().items(PaymentPartnerModel.PaymentMethod()),
      required_session_paths: Joi.array().items(
        PaymentPartnerModel.RequiredSessionPath()
      ),
      checkout_type: Joi.array().items(PaymentPartnerModel.CheckoutType()),
      auto_capture: Joi.array().items(Joi.boolean()),
      mode: Joi.array().items(PaymentPartnerModel.Mode()),
      country: Joi.array().items(PaymentPartnerModel.Country()),
      currency: Joi.array().items(PaymentPartnerModel.Currency()),
    });
  }

  /** @returns {PostPayoutDetails} */
  static PostPayoutDetails() {
    return Joi.object({
      success: Joi.boolean(),
      users: PaymentPartnerModel.Users(),
      is_active: Joi.boolean(),
      unique_transfer_no: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      transfer_type: Joi.string().allow(""),
      bank_details: PaymentPartnerModel.BankDetails(),
      created: Joi.boolean(),
      payouts: PaymentPartnerModel.Payouts(),
      payment_status: Joi.string().allow(""),
      updated: Joi.boolean(),
    });
  }

  /** @returns {PostPayout} */
  static PostPayout() {
    return Joi.object({
      unique_external_id: Joi.string().allow(""),
      users: PaymentPartnerModel.Users(),
      is_active: Joi.boolean(),
      unique_transfer_no: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      transfer_type: Joi.string().allow(""),
      bank_details: PaymentPartnerModel.BankDetails(),
      created: Joi.boolean(),
      payouts: PaymentPartnerModel.Payouts(),
      payment_status: Joi.string().allow(""),
      updated: Joi.boolean(),
    });
  }

  /** @returns {Users} */
  static Users() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow(""),
      unique_external_id: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {BankDetails} */
  static BankDetails() {
    return Joi.object({
      account_no: Joi.string().allow(""),
      city: Joi.string().allow(""),
      bank_name: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      state: Joi.string().allow(""),
      account_holder: Joi.string().allow(""),
      country: Joi.string().allow(""),
      ifsc_code: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
    });
  }

  /** @returns {Payouts} */
  static Payouts() {
    return Joi.object({
      aggregator_fund_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorCodeAndDescription} */
  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
    });
  }

  /** @returns {HttpErrorCodeAndMessage} */
  static HttpErrorCodeAndMessage() {
    return Joi.object({
      error: PaymentPartnerModel.ErrorCodeAndDescription(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PayoutDetails} */
  static PayoutDetails() {
    return Joi.object({
      items: Joi.array().items(PaymentPartnerModel.PayoutItem()),
      success: Joi.boolean(),
    });
  }

  /** @returns {MoreAttributes} */
  static MoreAttributes() {
    return Joi.object({
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      bank_name: Joi.string().allow(""),
      ifsc_code: Joi.string().allow(""),
      account_no: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      account_holder: Joi.string().allow(""),
    });
  }

  /** @returns {Customers} */
  static Customers() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      email: Joi.string().allow(""),
      unique_external_id: Joi.string().allow(""),
    });
  }

  /** @returns {PayoutsAggregator} */
  static PayoutsAggregator() {
    return Joi.object({
      payout_details_id: Joi.number(),
      aggregator_id: Joi.number(),
      aggregator_fund_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PayoutItem} */
  static PayoutItem() {
    return Joi.object({
      unique_transfer_no: Joi.string().allow(""),
      more_attributes: PaymentPartnerModel.MoreAttributes(),
      transfer_type: Joi.string().allow(""),
      is_default: Joi.boolean(),
      is_active: Joi.boolean(),
      customers: PaymentPartnerModel.Customers(),
      payouts_aggregators: Joi.array().items(
        PaymentPartnerModel.PayoutsAggregator()
      ),
    });
  }
}
module.exports = PaymentPartnerModel;
