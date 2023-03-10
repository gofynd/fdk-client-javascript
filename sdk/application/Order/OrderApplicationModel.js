const Joi = require("joi");

class OrderModel {
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
      item_total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      value_of_good: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      gst_tax_percentage: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      transfer_price: Joi.number(),

      cashback_applied: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),
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
      timestamp: OrderModel.TimeStampData(),

      show_promise: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
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
      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),

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
      price_marked: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      total_units: Joi.number(),

      amount_paid: Joi.number(),

      item_name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      size: Joi.string().allow(""),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      gst_tax_percentage: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      coupon_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      transfer_price: Joi.number(),

      cashback_applied: Joi.number(),
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
      brand: OrderModel.ItemBrand(),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      size: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      current_status: OrderModel.CurrentStatus(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      can_cancel: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      quantity: Joi.number(),

      line_number: Joi.number(),

      id: Joi.number(),

      item: OrderModel.Item(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      longitude: Joi.number(),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      refund_details: Joi.any(),

      fulfilling_store: OrderModel.FulfillingStore(),

      promise: OrderModel.Promise(),

      bags: Joi.array().items(OrderModel.Bags()),

      payment: OrderModel.ShipmentPayment(),

      returnable_date: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      order_type: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      shipment_status: OrderModel.ShipmentStatus(),

      show_download_invoice: Joi.boolean(),

      user_info: OrderModel.ShipmentUserInfo(),

      beneficiary_details: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      dp_name: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      traking_no: Joi.string().allow(""),

      total_bags: Joi.number(),

      total_details: OrderModel.ShipmentTotalDetails(),

      show_track_link: Joi.boolean(),

      can_break: Joi.any(),

      order_id: Joi.string().allow(""),

      size_info: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      delivery_address: OrderModel.DeliveryAddress(),

      comment: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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
      item_id: Joi.number(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipments()),

      user_info: OrderModel.UserInfo(),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

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

      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
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

      country: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

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

      id: Joi.number(),

      meta: OrderModel.BagReasonMeta(),

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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),
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
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

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
      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
