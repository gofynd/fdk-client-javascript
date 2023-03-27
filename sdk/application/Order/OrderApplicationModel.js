const Joi = require("joi");

class OrderModel {
  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      transfer_price: Joi.number(),

      price_effective: Joi.number(),

      gst_tax_percentage: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      longitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
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
      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      transfer_price: Joi.number(),

      price_effective: Joi.number(),

      gst_tax_percentage: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      item_name: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback: Joi.number(),

      gst_tag: Joi.string().allow(""),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      gst_fee: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      total_units: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      size: Joi.string().allow(""),

      identifiers: OrderModel.Identifiers(),

      amount_paid: Joi.number(),

      hsn_code: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      id: Joi.number(),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.ItemBrand(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      seller_identifier: Joi.string().allow(""),

      id: Joi.number(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      delivery_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      user_info: OrderModel.ShipmentUserInfo(),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      traking_no: Joi.string().allow(""),

      can_break: Joi.any(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      order_type: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      need_help_url: Joi.string().allow(""),

      can_return: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      awb_no: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      track_url: Joi.string().allow(""),

      refund_details: Joi.any(),

      dp_name: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      promise: OrderModel.Promise(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      comment: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      show_track_link: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_created_at: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      size_info: Joi.any(),

      bags: Joi.array().items(OrderModel.Bags()),

      order_id: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),
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
      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      total_shipments_in_order: Joi.number(),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      type: Joi.string().allow(""),

      item_total: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
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

  static OrderList() {
    return Joi.object({
      items: Joi.array().items(OrderModel.OrderSchema()),

      page: OrderModel.OrderPage(),

      filters: OrderModel.OrderFilters(),
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
      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      phone: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

      success: Joi.boolean(),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static BagReasons() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      meta: OrderModel.BagReasonMeta(),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      qc_type: Joi.array().items(Joi.string().allow("")),
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
      priority: Joi.number(),

      flow: Joi.string().allow(""),

      reason_id: Joi.number(),

      show_text_area: Joi.boolean(),

      reason_text: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),
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
      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.number(),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
