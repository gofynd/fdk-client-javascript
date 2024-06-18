const Joi = require("joi");

/**
 * @typedef OrderPage
 * @property {string} [type]
 * @property {number} [item_total]
 * @property {number} [current]
 * @property {number} [size]
 * @property {boolean} [has_next]
 */

/**
 * @typedef UserInfo
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 */

/**
 * @typedef BreakupValues
 * @property {number} [value]
 * @property {string} [currency_symbol]
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [currency_code]
 */

/**
 * @typedef ShipmentPayment
 * @property {string} [mop]
 * @property {string} [payment_mode]
 * @property {string} [status]
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [display_name]
 */

/**
 * @typedef ShipmentPaymentInfo
 * @property {string} [mop] - Stands for "Mode of Payment". This is a short code
 *   (like "COD" for Cash On Delivery) that represents the payment method used.
 * @property {string} [payment_mode] - Information about the payment mode,
 *   indicates whether COD or PREPAID
 * @property {string} [status] - Indicates the current status of the payment,
 *   Paid or Unpaid
 * @property {string} [mode] - Information about the payment source. For eg, NB_ICICI
 * @property {string} [logo] - A URL to an image representing the payment method
 * @property {string} [display_name] - The name of the payment method as it
 *   should be displayed to the user
 * @property {number} [amount] - Amount paid using this payment method
 */

/**
 * @typedef ShipmentUserInfo
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 */

/**
 * @typedef FulfillingStore
 * @property {number} [id]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [company_name]
 * @property {number} [company_id]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} [value]
 * @property {string} [title]
 * @property {string} [hex_code]
 */

/**
 * @typedef Invoice
 * @property {string} [invoice_url]
 * @property {string} [updated_date]
 * @property {string} [label_url]
 */

/**
 * @typedef NestedTrackingDetails
 * @property {boolean} [is_passed]
 * @property {string} [time]
 * @property {boolean} [is_current]
 * @property {string} [status]
 */

/**
 * @typedef TrackingDetails
 * @property {string} [value]
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [status]
 * @property {string} [time]
 * @property {string} [created_ts]
 * @property {NestedTrackingDetails[]} [tracking_details]
 */

/**
 * @typedef TimeStampData
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef Promise
 * @property {boolean} [show_promise]
 * @property {TimeStampData} [timestamp]
 */

/**
 * @typedef ShipmentTotalDetails
 * @property {number} [pieces]
 * @property {number} [total_price]
 * @property {number} [sizes]
 */

/**
 * @typedef Prices
 * @property {number} [delivery_charge]
 * @property {number} [coupon_value]
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 * @property {number} [coupon_effective_discount]
 * @property {string} [currency_symbol]
 * @property {number} [discount]
 * @property {number} [gst_tax_percentage]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [transfer_price]
 * @property {number} [cashback_applied]
 * @property {number} [price_effective]
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {string} [currency_code]
 * @property {number} [fynd_credits]
 * @property {number} [amount_to_be_collected]
 */

/**
 * @typedef ItemBrand
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef Item
 * @property {string[]} [image]
 * @property {string[]} [l1_categories]
 * @property {ItemBrand} [brand]
 * @property {string} [seller_identifier]
 * @property {string} [code]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [l3_category_name]
 * @property {string} [slug_key]
 * @property {string[]} [l2_categories]
 * @property {string} [size]
 * @property {Object} [attributes]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [article_id]
 * @property {Object} [free_gift_item_details]
 * @property {string} [parent_item_identifier]
 * @property {number} [quantity]
 */

/**
 * @typedef AppliedPromos
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 */

/**
 * @typedef Identifiers
 * @property {string} [ean]
 * @property {string} [sku_code]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 * @property {number} [coupon_effective_discount]
 * @property {string} [hsn_code]
 * @property {number} [discount]
 * @property {number} [gst_tax_percentage]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid]
 * @property {boolean} [added_to_fynd_cash]
 * @property {string} [size]
 * @property {number} [transfer_price]
 * @property {number} [cashback_applied]
 * @property {number} [price_effective]
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [total_units]
 * @property {Identifiers} [identifiers]
 * @property {string} [gst_tag]
 * @property {string} [item_name]
 * @property {number} [promotion_effective_discount]
 * @property {number} [gst_fee]
 * @property {number} [refund_amount]
 * @property {number} [fynd_credits]
 * @property {number} [amount_to_be_collected]
 */

/**
 * @typedef CurrentStatus
 * @property {string} [updated_at]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [journey_type]
 */

/**
 * @typedef Bags
 * @property {string} [delivery_date]
 * @property {number} [line_number]
 * @property {string} [currency_symbol]
 * @property {Item} [item]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {number} [quantity]
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {number} [id]
 * @property {string} [returnable_date]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {Object} [parent_promo_bags]
 * @property {Object} [meta]
 * @property {string} [currency_code]
 * @property {string} [seller_identifier]
 * @property {CurrentStatus} [current_status]
 * @property {Article} [article]
 */

/**
 * @typedef FulfillingCompany
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef Article
 * @property {string[]} [tags]
 */

/**
 * @typedef Address
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {number} [latitude]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {number} [longitude]
 * @property {string} [country_iso_code]
 * @property {string} [state]
 * @property {string} [created_at]
 * @property {string} [address1]
 * @property {string} [display_address]
 * @property {string} [name]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [country_phone_code]
 * @property {string} [version]
 * @property {string} [updated_at]
 * @property {string} [country]
 */

/**
 * @typedef Shipments
 * @property {ShipmentPayment} [payment]
 * @property {ShipmentPaymentInfo[]} [payment_info] - "Array of objects
 *   containing payment methods used for placing an order. Each object will
 *   provide information about corresponding payment method with relevant details."
 * @property {string} [order_type]
 * @property {boolean} [show_download_invoice]
 * @property {boolean} [can_cancel]
 * @property {ShipmentUserInfo} [user_info]
 * @property {string} [shipment_id]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object[]} [custom_meta]
 * @property {ShipmentStatus} [shipment_status]
 * @property {string} [comment]
 * @property {Invoice} [invoice]
 * @property {boolean} [show_track_link]
 * @property {Object} [refund_details]
 * @property {BreakupValues[]} [breakup_values]
 * @property {Object} [can_break]
 * @property {string} [traking_no]
 * @property {TrackingDetails[]} [tracking_details]
 * @property {Promise} [promise]
 * @property {number} [total_bags]
 * @property {ShipmentTotalDetails} [total_details]
 * @property {Prices} [prices]
 * @property {string} [returnable_date]
 * @property {string} [shipment_created_at]
 * @property {string} [shipment_created_ts]
 * @property {Object} [size_info]
 * @property {Bags[]} [bags]
 * @property {string} [dp_name]
 * @property {string} [awb_no]
 * @property {boolean} [beneficiary_details]
 * @property {FulfillingCompany} [fulfilling_company]
 * @property {boolean} [can_return]
 * @property {Address} [delivery_address]
 * @property {Address} [billing_address]
 * @property {string} [track_url]
 * @property {string} [order_id]
 * @property {string} [need_help_url]
 * @property {Object} [return_meta]
 * @property {string} [delivery_date]
 * @property {OrderRequest} [order]
 */

/**
 * @typedef BagsForReorderArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef BagsForReorder
 * @property {string} [item_size]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {BagsForReorderArticleAssignment} [article_assignment]
 * @property {number} [seller_id]
 * @property {number} [item_id]
 */

/**
 * @typedef OrderSchema
 * @property {number} [total_shipments_in_order]
 * @property {string} [gstin_code]
 * @property {UserInfo} [user_info]
 * @property {BreakupValues[]} [breakup_values]
 * @property {string} [order_created_time]
 * @property {string} [order_created_ts]
 * @property {string} [order_id]
 * @property {Shipments[]} [shipments]
 * @property {BagsForReorder[]} [bags_for_reorder]
 * @property {Object} [meta]
 */

/**
 * @typedef OrderStatuses
 * @property {number} [value]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef OrderFilters
 * @property {OrderStatuses[]} [statuses]
 */

/**
 * @typedef OrderList
 * @property {OrderPage} [page]
 * @property {OrderSchema[]} [items]
 * @property {OrderFilters} [filters]
 */

/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OrderById
 * @property {OrderSchema} [order]
 */

/**
 * @typedef ShipmentById
 * @property {Shipments} [shipment]
 */

/**
 * @typedef ResponseGetInvoiceShipment
 * @property {string} presigned_type
 * @property {boolean} success
 * @property {string} shipment_id
 * @property {string} presigned_url
 */

/**
 * @typedef Track
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_time]
 * @property {string} [updated_at]
 * @property {string} [reason]
 * @property {string} [awb]
 */

/**
 * @typedef ShipmentTrack
 * @property {Track[]} [results]
 */

/**
 * @typedef CustomerDetailsResponse
 * @property {string} [phone]
 * @property {string} [shipment_id]
 * @property {string} [name]
 * @property {string} [order_id]
 * @property {string} [country]
 */

/**
 * @typedef SendOtpToCustomerResponse
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {number} [resend_timer]
 */

/**
 * @typedef VerifyOtp
 * @property {string} [otp_code]
 * @property {string} [request_id]
 */

/**
 * @typedef VerifyOtpResponse
 * @property {boolean} [success]
 */

/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef BagReasons
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {BagReasonMeta} [meta]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */

/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentReason
 * @property {number} [priority]
 * @property {boolean} [show_text_area]
 * @property {number} [reason_id]
 * @property {string} [feedback_type]
 * @property {string} [reason_text]
 * @property {string} [flow]
 */

/**
 * @typedef ShipmentReasons
 * @property {ShipmentReason[]} [reasons]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef Products
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */

/**
 * @typedef ShipmentsRequest
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 */

/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 */

/**
 * @typedef OrderRequest
 * @property {Object} [meta]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 */

/**
 * @typedef StatusesBodyResponse
 * @property {Object[]} [shipments]
 */

/**
 * @typedef ShipmentApplicationStatusResponse
 * @property {StatusesBodyResponse[]} [statuses]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 */

class OrderApplicationModel {
  /** @returns {OrderPage} */
  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      item_total: Joi.number(),
      current: Joi.number(),
      size: Joi.number(),
      has_next: Joi.boolean(),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {BreakupValues} */
  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPayment} */
  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPaymentInfo} */
  static ShipmentPaymentInfo() {
    return Joi.object({
      mop: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      amount: Joi.number(),
    });
  }

  /** @returns {ShipmentUserInfo} */
  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {FulfillingStore} */
  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      company_name: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),
      title: Joi.string().allow(""),
      hex_code: Joi.string().allow(""),
    });
  }

  /** @returns {Invoice} */
  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),
      updated_date: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
    });
  }

  /** @returns {NestedTrackingDetails} */
  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),
      time: Joi.string().allow(""),
      is_current: Joi.boolean(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {TrackingDetails} */
  static TrackingDetails() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
      created_ts: Joi.string().allow(""),
      tracking_details: Joi.array().items(
        OrderApplicationModel.NestedTrackingDetails()
      ),
    });
  }

  /** @returns {TimeStampData} */
  static TimeStampData() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {Promise} */
  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),
      timestamp: OrderApplicationModel.TimeStampData(),
    });
  }

  /** @returns {ShipmentTotalDetails} */
  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),
      total_price: Joi.number(),
      sizes: Joi.number(),
    });
  }

  /** @returns {Prices} */
  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),
      coupon_value: Joi.number(),
      brand_calculated_amount: Joi.number(),
      value_of_good: Joi.number(),
      price_marked: Joi.number(),
      coupon_effective_discount: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      discount: Joi.number(),
      gst_tax_percentage: Joi.number(),
      cod_charges: Joi.number(),
      amount_paid: Joi.number(),
      added_to_fynd_cash: Joi.boolean(),
      transfer_price: Joi.number(),
      cashback_applied: Joi.number(),
      price_effective: Joi.number(),
      cashback: Joi.number(),
      refund_credit: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      currency_code: Joi.string().allow(""),
      fynd_credits: Joi.number(),
      amount_to_be_collected: Joi.number(),
    });
  }

  /** @returns {ItemBrand} */
  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      image: Joi.array().items(Joi.string().allow("")),
      l1_categories: Joi.array().items(Joi.string().allow("")),
      brand: OrderApplicationModel.ItemBrand(),
      seller_identifier: Joi.string().allow(""),
      code: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
      l3_category_name: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      l2_categories: Joi.array().items(Joi.string().allow("")),
      size: Joi.string().allow(""),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: Joi.any(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {AppliedPromos} */
  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),
      promotion_name: Joi.string().allow(""),
      article_quantity: Joi.number(),
      promo_id: Joi.string().allow(""),
      amount: Joi.number(),
      promotion_type: Joi.string().allow(""),
      applied_free_articles: Joi.array().items(
        OrderApplicationModel.AppliedFreeArticles()
      ),
    });
  }

  /** @returns {Identifiers} */
  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
    });
  }

  /** @returns {FinancialBreakup} */
  static FinancialBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      brand_calculated_amount: Joi.number(),
      value_of_good: Joi.number(),
      price_marked: Joi.number(),
      coupon_effective_discount: Joi.number(),
      hsn_code: Joi.string().allow(""),
      discount: Joi.number(),
      gst_tax_percentage: Joi.number(),
      cod_charges: Joi.number(),
      amount_paid: Joi.number(),
      added_to_fynd_cash: Joi.boolean(),
      size: Joi.string().allow(""),
      transfer_price: Joi.number(),
      cashback_applied: Joi.number(),
      price_effective: Joi.number(),
      cashback: Joi.number(),
      refund_credit: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      total_units: Joi.number(),
      identifiers: OrderApplicationModel.Identifiers(),
      gst_tag: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      promotion_effective_discount: Joi.number(),
      gst_fee: Joi.number(),
      refund_amount: Joi.number(),
      fynd_credits: Joi.number(),
      amount_to_be_collected: Joi.number(),
    });
  }

  /** @returns {CurrentStatus} */
  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      journey_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Bags} */
  static Bags() {
    return Joi.object({
      delivery_date: Joi.string().allow("").allow(null),
      line_number: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      item: OrderApplicationModel.Item(),
      applied_promos: Joi.array().items(OrderApplicationModel.AppliedPromos()),
      quantity: Joi.number(),
      prices: OrderApplicationModel.Prices(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      id: Joi.number(),
      returnable_date: Joi.string().allow("").allow(null),
      financial_breakup: Joi.array().items(
        OrderApplicationModel.FinancialBreakup()
      ),
      parent_promo_bags: Joi.any(),
      meta: Joi.any(),
      currency_code: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      current_status: OrderApplicationModel.CurrentStatus(),
      article: OrderApplicationModel.Article(),
    });
  }

  /** @returns {FulfillingCompany} */
  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      pincode: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      latitude: Joi.number().allow(null),
      address2: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      longitude: Joi.number().allow(null),
      country_iso_code: Joi.string().allow(""),
      state: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      display_address: Joi.string().allow(""),
      name: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      email: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      version: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {Shipments} */
  static Shipments() {
    return Joi.object({
      payment: OrderApplicationModel.ShipmentPayment(),
      payment_info: Joi.array().items(
        OrderApplicationModel.ShipmentPaymentInfo()
      ),
      order_type: Joi.string().allow("").allow(null),
      show_download_invoice: Joi.boolean(),
      can_cancel: Joi.boolean(),
      user_info: OrderApplicationModel.ShipmentUserInfo(),
      shipment_id: Joi.string().allow(""),
      fulfilling_store: OrderApplicationModel.FulfillingStore(),
      custom_meta: Joi.array().items(Joi.any()),
      shipment_status: OrderApplicationModel.ShipmentStatus(),
      comment: Joi.string().allow(""),
      invoice: OrderApplicationModel.Invoice(),
      show_track_link: Joi.boolean(),
      refund_details: Joi.any(),
      breakup_values: Joi.array().items(OrderApplicationModel.BreakupValues()),
      can_break: Joi.any(),
      traking_no: Joi.string().allow(""),
      tracking_details: Joi.array().items(
        OrderApplicationModel.TrackingDetails()
      ),
      promise: OrderApplicationModel.Promise(),
      total_bags: Joi.number(),
      total_details: OrderApplicationModel.ShipmentTotalDetails(),
      prices: OrderApplicationModel.Prices(),
      returnable_date: Joi.string().allow("").allow(null),
      shipment_created_at: Joi.string().allow(""),
      shipment_created_ts: Joi.string().allow(""),
      size_info: Joi.any(),
      bags: Joi.array().items(OrderApplicationModel.Bags()),
      dp_name: Joi.string().allow(""),
      awb_no: Joi.string().allow(""),
      beneficiary_details: Joi.boolean(),
      fulfilling_company: OrderApplicationModel.FulfillingCompany(),
      can_return: Joi.boolean(),
      delivery_address: OrderApplicationModel.Address(),
      billing_address: OrderApplicationModel.Address(),
      track_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      need_help_url: Joi.string().allow(""),
      return_meta: Joi.any(),
      delivery_date: Joi.string().allow("").allow(null),
      order: OrderApplicationModel.OrderRequest(),
    });
  }

  /** @returns {BagsForReorderArticleAssignment} */
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {BagsForReorder} */
  static BagsForReorder() {
    return Joi.object({
      item_size: Joi.string().allow(""),
      quantity: Joi.number(),
      store_id: Joi.number(),
      article_assignment: OrderApplicationModel.BagsForReorderArticleAssignment(),
      seller_id: Joi.number(),
      item_id: Joi.number(),
    });
  }

  /** @returns {OrderSchema} */
  static OrderSchema() {
    return Joi.object({
      total_shipments_in_order: Joi.number(),
      gstin_code: Joi.string().allow(""),
      user_info: OrderApplicationModel.UserInfo(),
      breakup_values: Joi.array().items(OrderApplicationModel.BreakupValues()),
      order_created_time: Joi.string().allow(""),
      order_created_ts: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipments: Joi.array().items(OrderApplicationModel.Shipments()),
      bags_for_reorder: Joi.array().items(
        OrderApplicationModel.BagsForReorder()
      ),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OrderStatuses} */
  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),
      is_selected: Joi.boolean(),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {OrderFilters} */
  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderApplicationModel.OrderStatuses()),
    });
  }

  /** @returns {OrderList} */
  static OrderList() {
    return Joi.object({
      page: OrderApplicationModel.OrderPage(),
      items: Joi.array().items(OrderApplicationModel.OrderSchema()),
      filters: OrderApplicationModel.OrderFilters(),
    });
  }

  /** @returns {ApefaceApiError} */
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {OrderById} */
  static OrderById() {
    return Joi.object({
      order: OrderApplicationModel.OrderSchema(),
    });
  }

  /** @returns {ShipmentById} */
  static ShipmentById() {
    return Joi.object({
      shipment: OrderApplicationModel.Shipments(),
    });
  }

  /** @returns {ResponseGetInvoiceShipment} */
  static ResponseGetInvoiceShipment() {
    return Joi.object({
      presigned_type: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      shipment_id: Joi.string().allow("").required(),
      presigned_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Track} */
  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      awb: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentTrack} */
  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderApplicationModel.Track()),
    });
  }

  /** @returns {CustomerDetailsResponse} */
  static CustomerDetailsResponse() {
    return Joi.object({
      phone: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpToCustomerResponse} */
  static SendOtpToCustomerResponse() {
    return Joi.object({
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      resend_timer: Joi.number(),
    });
  }

  /** @returns {VerifyOtp} */
  static VerifyOtp() {
    return Joi.object({
      otp_code: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpResponse} */
  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {BagReasonMeta} */
  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {QuestionSet} */
  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {BagReasons} */
  static BagReasons() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),
      id: Joi.number(),
      display_name: Joi.string().allow(""),
      meta: OrderApplicationModel.BagReasonMeta(),
      question_set: Joi.array().items(OrderApplicationModel.QuestionSet()),
      reasons: Joi.array().items(Joi.link("#BagReasons")),
    }).id("BagReasons");
  }

  /** @returns {ShipmentBagReasons} */
  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderApplicationModel.BagReasons()),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentReason} */
  static ShipmentReason() {
    return Joi.object({
      priority: Joi.number(),
      show_text_area: Joi.boolean(),
      reason_id: Joi.number(),
      feedback_type: Joi.string().allow(""),
      reason_text: Joi.string().allow(""),
      flow: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentReasons} */
  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderApplicationModel.ShipmentReason()),
    });
  }

  /** @returns {ProductsReasonsData} */
  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsReasonsFilters} */
  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),
      quantity: Joi.number(),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsReasons} */
  static ProductsReasons() {
    return Joi.object({
      data: OrderApplicationModel.ProductsReasonsData(),
      filters: Joi.array().items(
        OrderApplicationModel.ProductsReasonsFilters()
      ),
    });
  }

  /** @returns {EntityReasonData} */
  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {EntitiesReasons} */
  static EntitiesReasons() {
    return Joi.object({
      data: OrderApplicationModel.EntityReasonData(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ReasonsData} */
  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderApplicationModel.ProductsReasons()),
      entities: Joi.array().items(OrderApplicationModel.EntitiesReasons()),
    });
  }

  /** @returns {Products} */
  static Products() {
    return Joi.object({
      line_number: Joi.number(),
      quantity: Joi.number(),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsDataUpdatesFilters} */
  static ProductsDataUpdatesFilters() {
    return Joi.object({
      line_number: Joi.number(),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsDataUpdates} */
  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(
        OrderApplicationModel.ProductsDataUpdatesFilters()
      ),
    });
  }

  /** @returns {EntitiesDataUpdates} */
  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {DataUpdates} */
  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderApplicationModel.ProductsDataUpdates()),
      entities: Joi.array().items(OrderApplicationModel.EntitiesDataUpdates()),
    });
  }

  /** @returns {ShipmentsRequest} */
  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderApplicationModel.ReasonsData(),
      products: Joi.array().items(OrderApplicationModel.Products()),
      data_updates: OrderApplicationModel.DataUpdates(),
      identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {StatuesRequest} */
  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderApplicationModel.ShipmentsRequest()),
      exclude_bags_next_state: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {OrderRequest} */
  static OrderRequest() {
    return Joi.object({
      meta: Joi.any(),
    });
  }

  /** @returns {UpdateShipmentStatusRequest} */
  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderApplicationModel.StatuesRequest()),
      task: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
      force_transition: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }

  /** @returns {StatusesBodyResponse} */
  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ShipmentApplicationStatusResponse} */
  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(OrderApplicationModel.StatusesBodyResponse()),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      status: Joi.number(),
      exception: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderApplicationModel;
