const Joi = require("joi");

class OrderModel {
  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      is_selected: Joi.boolean(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
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

      store_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
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
      timestamp: OrderModel.TimeStampData(),

      show_promise: Joi.boolean(),
    });
  }

  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      fynd_credits: Joi.number(),

      delivery_charge: Joi.number(),

      price_marked: Joi.number(),

      cashback: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      cod_charges: Joi.number(),

      brand_calculated_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
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
      refund_amount: Joi.number(),

      size: Joi.string().allow(""),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      fynd_credits: Joi.number(),

      delivery_charge: Joi.number(),

      total_units: Joi.number(),

      price_marked: Joi.number(),

      cashback: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      discount: Joi.number(),

      item_name: Joi.string().allow(""),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      brand_calculated_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      transfer_price: Joi.number(),

      hsn_code: Joi.string().allow(""),

      amount_paid: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      id: Joi.number(),

      company_id: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      refund_details: Joi.any(),

      comment: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      show_download_invoice: Joi.boolean(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      show_track_link: Joi.boolean(),

      awb_no: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      traking_no: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      user_info: OrderModel.ShipmentUserInfo(),

      can_break: Joi.any(),

      returnable_date: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      invoice: OrderModel.Invoice(),

      prices: OrderModel.Prices(),

      size_info: Joi.any(),

      can_return: Joi.boolean(),

      custom_meta: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      total_bags: Joi.number(),

      delivery_address: OrderModel.DeliveryAddress(),

      delivery_date: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      can_cancel: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      dp_name: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      beneficiary_details: Joi.boolean(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
    });
  }

  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters(),

      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),
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
      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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

      meta: OrderModel.BagReasonMeta(),

      id: Joi.number(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
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
      priority: Joi.number(),

      show_text_area: Joi.boolean(),

      flow: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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
      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),

      data: Joi.any(),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),

      data: OrderModel.ProductsReasonsData(),
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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
    });
  }

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
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
      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number(),

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
