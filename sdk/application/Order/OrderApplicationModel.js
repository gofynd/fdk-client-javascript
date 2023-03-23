const Joi = require("joi");

class OrderModel {
  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      delivery_charge: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      transfer_price: Joi.number(),

      price_effective: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),
    });
  }

  static TimeStampData() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),

      timestamp: OrderModel.TimeStampData(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Identifiers() {
    return Joi.object({
      sku_code: Joi.string().allow(""),

      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      fynd_credits: Joi.number(),

      gst_fee: Joi.number(),

      discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      brand_calculated_amount: Joi.number(),

      delivery_charge: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      size: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      item_name: Joi.string().allow(""),

      identifiers: OrderModel.Identifiers(),

      hsn_code: Joi.string().allow(""),

      transfer_price: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      total_units: Joi.number(),
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
      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static ItemBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      can_cancel: Joi.boolean(),

      quantity: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_return: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      item: OrderModel.Item(),

      line_number: Joi.number(),

      returnable_date: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      prices: OrderModel.Prices(),

      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      can_return: Joi.boolean(),

      promise: OrderModel.Promise(),

      awb_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      size_info: Joi.any(),

      invoice: OrderModel.Invoice(),

      returnable_date: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      user_info: OrderModel.ShipmentUserInfo(),

      refund_details: Joi.any(),

      delivery_date: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      shipment_created_at: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      can_break: Joi.any(),

      show_track_link: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      dp_name: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      payment: OrderModel.ShipmentPayment(),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_company: OrderModel.FulfillingCompany(),

      total_details: OrderModel.ShipmentTotalDetails(),

      traking_no: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      total_bags: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      order_created_time: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      shipments: Joi.array().items(OrderModel.Shipments()),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      current: Joi.number(),
    });
  }

  static OrderList() {
    return Joi.object({
      items: Joi.array().items(OrderModel.OrderSchema()),

      filters: OrderModel.OrderFilters(),

      page: OrderModel.OrderPage(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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
      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      country: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
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

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static BagReasons() {
    return Joi.object({
      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      success: Joi.boolean(),

      reasons: Joi.array().items(OrderModel.BagReasons()),
    });
  }

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

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      data: OrderModel.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),
    });
  }

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),
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
      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),
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

      message: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
