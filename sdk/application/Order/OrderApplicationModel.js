const Joi = require("joi");

/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @property {number} [amount]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 */

/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef BagReasons
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {BagReasonMeta} [meta]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */

/**
 * @typedef Bags
 * @property {AppliedPromos[]} [applied_promos]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {CurrentStatus} [current_status]
 * @property {string} [delivery_date]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {number} [id]
 * @property {Item} [item]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {Prices} [prices]
 * @property {number} [quantity]
 * @property {string} [returnable_date]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef BagsForReorder
 * @property {BagsForReorderArticleAssignment} [article_assignment]
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {number} [quantity]
 * @property {number} [seller_id]
 * @property {number} [store_id]
 */

/**
 * @typedef BagsForReorderArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef BreakupValues
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string} [name]
 * @property {number} [value]
 */

/**
 * @typedef Coupon
 * @property {string} [code]
 * @property {string} [coupon_type]
 * @property {number} [id]
 * @property {string} [payable_category]
 * @property {number} [value]
 */

/**
 * @typedef CurrentStatus
 * @property {string} [created_at]
 * @property {string} [journey_type]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomerDetailsResponse
 * @property {string} [country]
 * @property {string} [name]
 * @property {string} [order_id]
 * @property {string} [phone]
 * @property {string} [shipment_id]
 */

/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef DeliveryAddress
 * @property {string} [address]
 * @property {string} [address_category]
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
 * @property {string} [created_at]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [version]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */

/**
 * @typedef FinancialBreakup
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [amount_paid]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [coupon_effective_discount]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code]
 * @property {Identifiers} [identifiers]
 * @property {string} [item_name]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {string} [size]
 * @property {number} [total_units]
 * @property {number} [transfer_price]
 * @property {number} [value_of_good]
 */

/**
 * @typedef FulfillingCompany
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef FulfillingStore
 * @property {string} [code]
 * @property {number} [company_id]
 * @property {string} [company_name]
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef Identifiers
 * @property {string} [ean]
 * @property {string} [sku_code]
 */

/**
 * @typedef Invoice
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [updated_date]
 */

/**
 * @typedef Item
 * @property {ItemBrand} [brand]
 * @property {string} [code]
 * @property {number} [id]
 * @property {string[]} [image]
 * @property {string[]} [l1_categories]
 * @property {string[]} [l2_categories]
 * @property {string} [l3_category_name]
 * @property {string} [name]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {string} [slug_key]
 */

/**
 * @typedef ItemBrand
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef NestedTrackingDetails
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [status]
 * @property {string} [time]
 */

/**
 * @typedef OrderById
 * @property {OrderSchema} [order]
 */

/**
 * @typedef OrderFilters
 * @property {OrderStatuses[]} [statuses]
 */

/**
 * @typedef OrderList
 * @property {OrderFilters} [filters]
 * @property {OrderSchema[]} [items]
 * @property {OrderPage} [page]
 */

/**
 * @typedef OrderPage
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef OrderSchema
 * @property {BagsForReorder[]} [bags_for_reorder]
 * @property {BreakupValues[]} [breakup_values]
 * @property {string} [order_created_time]
 * @property {string} [order_id]
 * @property {Shipments[]} [shipments]
 * @property {number} [total_shipments_in_order]
 * @property {UserInfo} [user_info]
 */

/**
 * @typedef OrderStatuses
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {number} [value]
 */

/**
 * @typedef Prices
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [amount_paid]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [coupon_effective_discount]
 * @property {number} [coupon_value]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gst_tax_percentage]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [transfer_price]
 * @property {number} [value_of_good]
 */

/**
 * @typedef Product
 * @property {AppliedPromos[]} [applied_promos]
 * @property {ProductStatus} [bag_status]
 * @property {ProductBrand} [brand]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Coupon} [coupon]
 * @property {string} [delivery_date]
 * @property {string} docket_number
 * @property {Item} [item]
 * @property {number} [line_number]
 * @property {string} order_id
 * @property {Object} [parent_promo_bags]
 * @property {ShipmentPayment} [payment]
 * @property {number} [quantity]
 * @property {string} [returnable_date]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef ProductBrand
 * @property {string} [brand_name]
 * @property {number} [id]
 */

/**
 * @typedef ProductListResponse
 * @property {OrderFilters} [filters]
 * @property {Product[]} [items]
 * @property {string} [message]
 * @property {OrderPage} [page]
 * @property {boolean} [success]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductStatus
 * @property {string} [created_at]
 * @property {string} [hex_code]
 * @property {string} [title]
 * @property {string} [value]
 */

/**
 * @typedef Promise
 * @property {boolean} [show_promise]
 * @property {TimeStampData} [timestamp]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef ResponseGetInvoiceShipment
 * @property {string} presigned_type
 * @property {string} presigned_url
 * @property {string} shipment_id
 * @property {boolean} success
 */

/**
 * @typedef SendOtpToCustomerResponse
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentApplicationStatusResponse
 * @property {StatusesBodyResponse[]} [statuses]
 */

/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentById
 * @property {Shipments} [shipment]
 */

/**
 * @typedef ShipmentPayment
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [mop]
 * @property {string} [payment_mode]
 * @property {string} [status]
 */

/**
 * @typedef ShipmentReason
 * @property {string} [feedback_type]
 * @property {string} [flow]
 * @property {number} [priority]
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef ShipmentReasons
 * @property {ShipmentReason[]} [reasons]
 */

/**
 * @typedef Shipments
 * @property {string} [awb_no]
 * @property {Bags[]} [bags]
 * @property {boolean} [beneficiary_details]
 * @property {BreakupValues[]} [breakup_values]
 * @property {Object} [can_break]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [comment]
 * @property {Object[]} [custom_meta]
 * @property {DeliveryAddress} [delivery_address]
 * @property {string} [delivery_date]
 * @property {string} [dp_name]
 * @property {FulfillingCompany} [fulfilling_company]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Invoice} [invoice]
 * @property {string} [need_help_url]
 * @property {string} [order_id]
 * @property {string} [order_type]
 * @property {ShipmentPayment} [payment]
 * @property {Prices} [prices]
 * @property {Promise} [promise]
 * @property {Object} [refund_details]
 * @property {Object} [return_meta]
 * @property {string} [returnable_date]
 * @property {string} [shipment_created_at]
 * @property {string} [shipment_id]
 * @property {ShipmentStatus} [shipment_status]
 * @property {boolean} [show_download_invoice]
 * @property {boolean} [show_track_link]
 * @property {Object} [size_info]
 * @property {number} [total_bags]
 * @property {ShipmentTotalDetails} [total_details]
 * @property {string} [track_url]
 * @property {TrackingDetails[]} [tracking_details]
 * @property {string} [traking_no]
 * @property {ShipmentUserInfo} [user_info]
 */

/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} [hex_code]
 * @property {string} [title]
 * @property {string} [value]
 */

/**
 * @typedef ShipmentTotalDetails
 * @property {number} [pieces]
 * @property {number} [sizes]
 * @property {number} [total_price]
 */

/**
 * @typedef ShipmentTrack
 * @property {Track[]} [results]
 */

/**
 * @typedef ShipmentUserInfo
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 */

/**
 * @typedef StatusesBodyResponse
 * @property {Object[]} [shipments]
 */

/**
 * @typedef TimeStampData
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef Track
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [last_location_recieved_at]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 */

/**
 * @typedef TrackingDetails
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [status]
 * @property {string} [time]
 * @property {NestedTrackingDetails[]} [tracking_details]
 * @property {string} [value]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition]
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 */

/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
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

class OrderApplicationModel {
  /** @returns {ApefaceApiError} */
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
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
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(
        OrderApplicationModel.AppliedFreeArticles()
      ),
      article_quantity: Joi.number(),
      mrp_promotion: Joi.boolean(),
      promo_id: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
    });
  }

  /** @returns {BagReasonMeta} */
  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {BagReasons} */
  static BagReasons() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number(),
      meta: OrderApplicationModel.BagReasonMeta(),
      qc_type: Joi.array().items(Joi.string().allow("")),
      question_set: Joi.array().items(OrderApplicationModel.QuestionSet()),
      reasons: Joi.array().items(Joi.link("#BagReasons")),
    }).id("BagReasons");
  }

  /** @returns {Bags} */
  static Bags() {
    return Joi.object({
      applied_promos: Joi.array().items(OrderApplicationModel.AppliedPromos()),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      current_status: OrderApplicationModel.CurrentStatus(),
      delivery_date: Joi.string().allow("").allow(null),
      financial_breakup: Joi.array().items(
        OrderApplicationModel.FinancialBreakup()
      ),
      id: Joi.number(),
      item: OrderApplicationModel.Item(),
      line_number: Joi.number(),
      meta: Joi.any(),
      parent_promo_bags: Joi.any(),
      prices: OrderApplicationModel.Prices(),
      quantity: Joi.number(),
      returnable_date: Joi.string().allow("").allow(null),
      seller_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {BagsForReorder} */
  static BagsForReorder() {
    return Joi.object({
      article_assignment: OrderApplicationModel.BagsForReorderArticleAssignment(),
      item_id: Joi.number(),
      item_size: Joi.string().allow(""),
      quantity: Joi.number(),
      seller_id: Joi.number(),
      store_id: Joi.number(),
    });
  }

  /** @returns {BagsForReorderArticleAssignment} */
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {BreakupValues} */
  static BreakupValues() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {Coupon} */
  static Coupon() {
    return Joi.object({
      code: Joi.string().allow(""),
      coupon_type: Joi.string().allow(""),
      id: Joi.number(),
      payable_category: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {CurrentStatus} */
  static CurrentStatus() {
    return Joi.object({
      created_at: Joi.string().allow(""),
      journey_type: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerDetailsResponse} */
  static CustomerDetailsResponse() {
    return Joi.object({
      country: Joi.string().allow(""),
      name: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {DataUpdates} */
  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderApplicationModel.EntitiesDataUpdates()),
      products: Joi.array().items(OrderApplicationModel.ProductsDataUpdates()),
    });
  }

  /** @returns {DeliveryAddress} */
  static DeliveryAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().allow(null),
      longitude: Joi.number().allow(null),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EntitiesDataUpdates} */
  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {EntitiesReasons} */
  static EntitiesReasons() {
    return Joi.object({
      data: OrderApplicationModel.EntityReasonData(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {EntityReasonData} */
  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      exception: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      status: Joi.number(),
    });
  }

  /** @returns {FinancialBreakup} */
  static FinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_fee: Joi.number(),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      hsn_code: Joi.string().allow(""),
      identifiers: OrderApplicationModel.Identifiers(),
      item_name: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      size: Joi.string().allow(""),
      total_units: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }

  /** @returns {FulfillingCompany} */
  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {FulfillingStore} */
  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Identifiers} */
  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
    });
  }

  /** @returns {Invoice} */
  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
      updated_date: Joi.string().allow(""),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      brand: OrderApplicationModel.ItemBrand(),
      code: Joi.string().allow(""),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      l1_categories: Joi.array().items(Joi.string().allow("")),
      l2_categories: Joi.array().items(Joi.string().allow("")),
      l3_category_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
    });
  }

  /** @returns {ItemBrand} */
  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {NestedTrackingDetails} */
  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
    });
  }

  /** @returns {OrderById} */
  static OrderById() {
    return Joi.object({
      order: OrderApplicationModel.OrderSchema(),
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
      filters: OrderApplicationModel.OrderFilters(),
      items: Joi.array().items(OrderApplicationModel.OrderSchema()),
      page: OrderApplicationModel.OrderPage(),
    });
  }

  /** @returns {OrderPage} */
  static OrderPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {OrderSchema} */
  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(
        OrderApplicationModel.BagsForReorder()
      ),
      breakup_values: Joi.array().items(OrderApplicationModel.BreakupValues()),
      order_created_time: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipments: Joi.array().items(OrderApplicationModel.Shipments()),
      total_shipments_in_order: Joi.number(),
      user_info: OrderApplicationModel.UserInfo(),
    });
  }

  /** @returns {OrderStatuses} */
  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      value: Joi.number(),
    });
  }

  /** @returns {Prices} */
  static Prices() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_tax_percentage: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }

  /** @returns {Product} */
  static Product() {
    return Joi.object({
      applied_promos: Joi.array().items(OrderApplicationModel.AppliedPromos()),
      bag_status: OrderApplicationModel.ProductStatus(),
      brand: OrderApplicationModel.ProductBrand(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      coupon: OrderApplicationModel.Coupon(),
      delivery_date: Joi.string().allow(""),
      docket_number: Joi.string().allow("").required(),
      item: OrderApplicationModel.Item(),
      line_number: Joi.number(),
      order_id: Joi.string().allow("").required(),
      parent_promo_bags: Joi.any(),
      payment: OrderApplicationModel.ShipmentPayment(),
      quantity: Joi.number(),
      returnable_date: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductBrand} */
  static ProductBrand() {
    return Joi.object({
      brand_name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {ProductListResponse} */
  static ProductListResponse() {
    return Joi.object({
      filters: OrderApplicationModel.OrderFilters(),
      items: Joi.array().items(OrderApplicationModel.Product()),
      message: Joi.string().allow(""),
      page: OrderApplicationModel.OrderPage(),
      success: Joi.boolean(),
    });
  }

  /** @returns {Products} */
  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
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

  /** @returns {ProductsDataUpdatesFilters} */
  static ProductsDataUpdatesFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
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
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
    });
  }

  /** @returns {ProductStatus} */
  static ProductStatus() {
    return Joi.object({
      created_at: Joi.string().allow(""),
      hex_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {Promise} */
  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),
      timestamp: OrderApplicationModel.TimeStampData(),
    });
  }

  /** @returns {QuestionSet} */
  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {ReasonsData} */
  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderApplicationModel.EntitiesReasons()),
      products: Joi.array().items(OrderApplicationModel.ProductsReasons()),
    });
  }

  /** @returns {ResponseGetInvoiceShipment} */
  static ResponseGetInvoiceShipment() {
    return Joi.object({
      presigned_type: Joi.string().allow("").required(),
      presigned_url: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {SendOtpToCustomerResponse} */
  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentApplicationStatusResponse} */
  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(OrderApplicationModel.StatusesBodyResponse()),
    });
  }

  /** @returns {ShipmentBagReasons} */
  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderApplicationModel.BagReasons()),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentById} */
  static ShipmentById() {
    return Joi.object({
      shipment: OrderApplicationModel.Shipments(),
    });
  }

  /** @returns {ShipmentPayment} */
  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      mop: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentReason} */
  static ShipmentReason() {
    return Joi.object({
      feedback_type: Joi.string().allow(""),
      flow: Joi.string().allow(""),
      priority: Joi.number(),
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {ShipmentReasons} */
  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderApplicationModel.ShipmentReason()),
    });
  }

  /** @returns {Shipments} */
  static Shipments() {
    return Joi.object({
      awb_no: Joi.string().allow(""),
      bags: Joi.array().items(OrderApplicationModel.Bags()),
      beneficiary_details: Joi.boolean(),
      breakup_values: Joi.array().items(OrderApplicationModel.BreakupValues()),
      can_break: Joi.any(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      comment: Joi.string().allow(""),
      custom_meta: Joi.array().items(Joi.any()),
      delivery_address: OrderApplicationModel.DeliveryAddress(),
      delivery_date: Joi.string().allow("").allow(null),
      dp_name: Joi.string().allow(""),
      fulfilling_company: OrderApplicationModel.FulfillingCompany(),
      fulfilling_store: OrderApplicationModel.FulfillingStore(),
      invoice: OrderApplicationModel.Invoice(),
      need_help_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      order_type: Joi.string().allow("").allow(null),
      payment: OrderApplicationModel.ShipmentPayment(),
      prices: OrderApplicationModel.Prices(),
      promise: OrderApplicationModel.Promise(),
      refund_details: Joi.any(),
      return_meta: Joi.any(),
      returnable_date: Joi.string().allow("").allow(null),
      shipment_created_at: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      shipment_status: OrderApplicationModel.ShipmentStatus(),
      show_download_invoice: Joi.boolean(),
      show_track_link: Joi.boolean(),
      size_info: Joi.any(),
      total_bags: Joi.number(),
      total_details: OrderApplicationModel.ShipmentTotalDetails(),
      track_url: Joi.string().allow(""),
      tracking_details: Joi.array().items(
        OrderApplicationModel.TrackingDetails()
      ),
      traking_no: Joi.string().allow(""),
      user_info: OrderApplicationModel.ShipmentUserInfo(),
    });
  }

  /** @returns {ShipmentsRequest} */
  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderApplicationModel.DataUpdates(),
      identifier: Joi.string().allow("").required(),
      products: Joi.array().items(OrderApplicationModel.Products()),
      reasons: OrderApplicationModel.ReasonsData(),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentTotalDetails} */
  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),
      sizes: Joi.number(),
      total_price: Joi.number(),
    });
  }

  /** @returns {ShipmentTrack} */
  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderApplicationModel.Track()),
    });
  }

  /** @returns {ShipmentUserInfo} */
  static ShipmentUserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StatuesRequest} */
  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),
      shipments: Joi.array().items(OrderApplicationModel.ShipmentsRequest()),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {StatusesBodyResponse} */
  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {TimeStampData} */
  static TimeStampData() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }

  /** @returns {Track} */
  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
    });
  }

  /** @returns {TrackingDetails} */
  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
      tracking_details: Joi.array().items(
        OrderApplicationModel.NestedTrackingDetails()
      ),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpdateShipmentStatusRequest} */
  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderApplicationModel.StatuesRequest()),
      task: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
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
}
module.exports = OrderApplicationModel;
