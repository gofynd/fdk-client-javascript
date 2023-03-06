const Joi = require("joi");

class OrderModel {
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      seller_id: Joi.number(),

      store_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      article_quantity: Joi.number(),
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

      identifiers: OrderModel.Identifiers(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      item_name: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      total_units: Joi.number(),

      refund_amount: Joi.number(),

      cashback: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      refund_credit: Joi.number(),

      transfer_price: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      hsn_code: Joi.string().allow(""),

      delivery_charge: Joi.number(),

      size: Joi.string().allow(""),

      cod_charges: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      cashback: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      refund_credit: Joi.number(),

      transfer_price: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),
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
      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),
    });
  }

  static Bags() {
    return Joi.object({
      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      returnable_date: Joi.string().allow(""),

      id: Joi.number(),

      line_number: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      item: OrderModel.Item(),

      parent_promo_bags: Joi.any(),

      delivery_date: Joi.string().allow(""),

      can_return: Joi.boolean(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
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
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      can_break: Joi.any(),

      traking_no: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      custom_meta: Joi.array().items(Joi.any()),

      bags: Joi.array().items(OrderModel.Bags()),

      order_type: Joi.string().allow(""),

      size_info: Joi.any(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      comment: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      user_info: OrderModel.ShipmentUserInfo(),

      delivery_address: OrderModel.DeliveryAddress(),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      order_id: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      refund_details: Joi.any(),

      delivery_date: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      invoice: OrderModel.Invoice(),

      returnable_date: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      can_cancel: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      can_return: Joi.boolean(),

      show_download_invoice: Joi.boolean(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),
    });
  }

  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),
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
      presigned_url: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

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
      phone: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      id: Joi.number(),

      meta: OrderModel.BagReasonMeta(),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),
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
      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),
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
      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

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
      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
