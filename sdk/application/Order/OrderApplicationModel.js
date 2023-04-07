const Joi = require("joi");

class OrderModel {
  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
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
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
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

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),
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

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
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

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      company_id: Joi.number(),
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

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
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

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      price_marked: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      fynd_credits: Joi.number(),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),
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
      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      price_marked: Joi.number(),

      value_of_good: Joi.number(),

      gst_fee: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      fynd_credits: Joi.number(),

      brand_calculated_amount: Joi.number(),

      item_name: Joi.string().allow(""),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      size: Joi.string().allow(""),

      total_units: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cod_charges: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      quantity: Joi.number(),

      can_return: Joi.boolean(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      item: OrderModel.Item(),

      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_cancel: Joi.boolean(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

  static Shipments() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      can_return: Joi.boolean(),

      total_details: OrderModel.ShipmentTotalDetails(),

      shipment_id: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      comment: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      shipment_status: OrderModel.ShipmentStatus(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      invoice: OrderModel.Invoice(),

      returnable_date: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      dp_name: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      size_info: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      refund_details: Joi.any(),

      need_help_url: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      payment: OrderModel.ShipmentPayment(),

      traking_no: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      beneficiary_details: Joi.boolean(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      can_break: Joi.any(),

      total_bags: Joi.number(),

      user_info: OrderModel.ShipmentUserInfo(),

      show_download_invoice: Joi.boolean(),

      awb_no: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      total_shipments_in_order: Joi.number(),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.number(),

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
      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

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

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),
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

      feedback_type: Joi.string().allow(""),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      reason_text: Joi.string().allow(""),
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
      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
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

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
