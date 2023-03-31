const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      size: Joi.number(),

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
      item_size: Joi.string().allow(""),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_effective: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      sizes: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
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
      gst_fee: Joi.number(),

      total_units: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      size: Joi.string().allow(""),

      identifiers: OrderModel.Identifiers(),

      price_effective: Joi.number(),

      hsn_code: Joi.string().allow(""),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      delivery_charge: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      amount_paid: Joi.number(),
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
      id: Joi.number(),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),

      size: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
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
      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      item: OrderModel.Item(),

      can_return: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      can_cancel: Joi.boolean(),

      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),
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

  static ShipmentPayment() {
    return Joi.object({
      status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      traking_no: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      delivery_address: OrderModel.DeliveryAddress(),

      awb_no: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      invoice: OrderModel.Invoice(),

      shipment_created_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      returnable_date: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      total_details: OrderModel.ShipmentTotalDetails(),

      track_url: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      user_info: OrderModel.ShipmentUserInfo(),

      show_download_invoice: Joi.boolean(),

      can_return: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      refund_details: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_break: Joi.any(),

      promise: OrderModel.Promise(),

      payment: OrderModel.ShipmentPayment(),

      size_info: Joi.any(),

      delivery_date: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_bags: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      user_info: OrderModel.UserInfo(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_shipments_in_order: Joi.number(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),
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

  static OrderList() {
    return Joi.object({
      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),

      filters: OrderModel.OrderFilters(),
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

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      resend_timer: Joi.number(),

      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),
    });
  }

  static VerifyOtp() {
    return Joi.object({
      otp_code: Joi.string().allow(""),

      request_id: Joi.string().allow(""),
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
      reasons: Joi.array().items(OrderModel.BagReasons()),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

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
      show_text_area: Joi.boolean(),

      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      priority: Joi.number(),

      reason_id: Joi.number(),

      feedback_type: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

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

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
