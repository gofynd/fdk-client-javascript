const Joi = require("joi");

class OrderModel {
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

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
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

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cod_charges: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      coupon_effective_discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      brand_calculated_amount: Joi.number(),

      discount: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      price_effective: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),
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
      hsn_code: Joi.string().allow(""),

      amount_paid: Joi.number(),

      item_name: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      coupon_effective_discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      size: Joi.string().allow(""),

      delivery_charge: Joi.number(),

      brand_calculated_amount: Joi.number(),

      total_units: Joi.number(),

      discount: Joi.number(),

      refund_amount: Joi.number(),

      gst_fee: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      gst_tag: Joi.string().allow(""),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      price_effective: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      item: OrderModel.Item(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      can_cancel: Joi.boolean(),

      line_number: Joi.number(),

      returnable_date: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      delivery_date: Joi.string().allow(""),

      id: Joi.number(),

      prices: OrderModel.Prices(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_category: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
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

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
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
      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static Shipments() {
    return Joi.object({
      returnable_date: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      invoice: OrderModel.Invoice(),

      order_type: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      total_bags: Joi.number(),

      traking_no: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      total_details: OrderModel.ShipmentTotalDetails(),

      track_url: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      dp_name: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      beneficiary_details: Joi.boolean(),

      comment: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_return: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      can_break: Joi.any(),

      bags: Joi.array().items(OrderModel.Bags()),

      delivery_address: OrderModel.DeliveryAddress(),

      user_info: OrderModel.ShipmentUserInfo(),

      promise: OrderModel.Promise(),

      size_info: Joi.any(),

      awb_no: Joi.string().allow(""),

      refund_details: Joi.any(),

      show_track_link: Joi.boolean(),

      order_id: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipment_id: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      need_help_url: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_shipments_in_order: Joi.number(),

      user_info: OrderModel.UserInfo(),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.number(),
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

      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),
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
      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Track() {
    return Joi.object({
      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

      success: Joi.boolean(),
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
      meta: OrderModel.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
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
      feedback_type: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      reason_id: Joi.number(),

      priority: Joi.number(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
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
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

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
      message: Joi.string().allow("").allow(null),

      status: Joi.number(),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
