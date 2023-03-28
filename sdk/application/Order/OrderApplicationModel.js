const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      item_total: Joi.number(),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.number(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      address_category: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: Joi.any(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),
    });
  }

  static Prices() {
    return Joi.object({
      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),
    });
  }

  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      id: Joi.number(),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.ItemBrand(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),

      sku_code: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      gst_fee: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      fynd_credits: Joi.number(),

      price_marked: Joi.number(),

      hsn_code: Joi.string().allow(""),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      size: Joi.string().allow(""),

      total_units: Joi.number(),

      delivery_charge: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      added_to_fynd_cash: Joi.boolean(),

      item_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      quantity: Joi.number(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      prices: OrderModel.Prices(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      item: OrderModel.Item(),

      can_cancel: Joi.boolean(),

      id: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static TimeStampData() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),

      timestamp: OrderModel.TimeStampData(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      pieces: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      company_name: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      can_return: Joi.boolean(),

      custom_meta: Joi.array().items(Joi.any()),

      delivery_address: OrderModel.DeliveryAddress(),

      show_download_invoice: Joi.boolean(),

      invoice: OrderModel.Invoice(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_bags: Joi.number(),

      bags: Joi.array().items(OrderModel.Bags()),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      dp_name: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      promise: OrderModel.Promise(),

      can_cancel: Joi.boolean(),

      can_break: Joi.any(),

      track_url: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      payment: OrderModel.ShipmentPayment(),

      need_help_url: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      size_info: Joi.any(),

      refund_details: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      beneficiary_details: Joi.boolean(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      traking_no: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      order_id: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      quantity: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      seller_id: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_created_time: Joi.string().allow(""),
    });
  }

  static OrderList() {
    return Joi.object({
      page: OrderModel.OrderPage(),

      filters: OrderModel.OrderFilters(),

      items: Joi.array().items(OrderModel.OrderSchema()),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderById() {
    return Joi.object({
      order: OrderModel.OrderSchema(),
    });
  }

  static ShipmentById() {
    return Joi.object({
      shipment: OrderModel.Shipments(),
    });
  }

  static ResponseGetInvoiceShipment() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      success: Joi.boolean(),

      resend_timer: Joi.number(),
    });
  }

  static VerifyOtp() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      otp_code: Joi.string().allow(""),
    });
  }

  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasons() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.BagReasons()),

      success: Joi.boolean(),
    });
  }

  static ShipmentReason() {
    return Joi.object({
      show_text_area: Joi.boolean(),

      priority: Joi.number(),

      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      data: OrderModel.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
    });
  }

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatusesBodyResponse()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
