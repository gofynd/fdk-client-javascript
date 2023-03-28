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

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
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
      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
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
      cod_charges: Joi.number(),

      gst_fee: Joi.number(),

      fynd_credits: Joi.number(),

      transfer_price: Joi.number(),

      size: Joi.string().allow(""),

      amount_paid: Joi.number(),

      total_units: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      price_effective: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      refund_credit: Joi.number(),

      delivery_charge: Joi.number(),

      item_name: Joi.string().allow(""),

      discount: Joi.number(),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      fynd_credits: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      discount: Joi.number(),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      can_return: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      line_number: Joi.number(),

      item: OrderModel.Item(),

      can_cancel: Joi.boolean(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      delivery_date: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      id: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      version: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      name: Joi.string().allow(""),

      longitude: Joi.number(),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),
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
      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),
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
      total_price: Joi.number(),

      pieces: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      total_bags: Joi.number(),

      order_id: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      returnable_date: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      refund_details: Joi.any(),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      traking_no: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      fulfilling_company: OrderModel.FulfillingCompany(),

      total_details: OrderModel.ShipmentTotalDetails(),

      size_info: Joi.any(),

      need_help_url: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      shipment_id: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_store: OrderModel.FulfillingStore(),

      track_url: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      user_info: OrderModel.ShipmentUserInfo(),

      can_cancel: Joi.boolean(),

      can_break: Joi.any(),

      show_track_link: Joi.boolean(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),
    });
  }

  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      item_total: Joi.number(),

      current: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters(),

      items: Joi.array().items(OrderModel.OrderSchema()),

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

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),

      reasons: Joi.array().items(OrderModel.BagReasons()),

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

      flow: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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
      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

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

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      code: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
