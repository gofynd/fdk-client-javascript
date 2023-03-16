const Joi = require("joi");

class OrderModel {
  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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

      item_id: Joi.number(),

      quantity: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),
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

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      name: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      brand: OrderModel.ItemBrand(),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      discount: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      refund_credit: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback: Joi.number(),

      coupon_value: Joi.number(),

      price_marked: Joi.number(),

      transfer_price: Joi.number(),
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
      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),
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
      discount: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      total_units: Joi.number(),

      value_of_good: Joi.number(),

      refund_credit: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_fee: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      cashback: Joi.number(),

      item_name: Joi.string().allow(""),

      coupon_value: Joi.number(),

      price_marked: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      transfer_price: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      item: OrderModel.Item(),

      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      can_cancel: Joi.boolean(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      company_name: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
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
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_passed: Joi.boolean(),
    });
  }

  static Shipments() {
    return Joi.object({
      returnable_date: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      need_help_url: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      user_info: OrderModel.ShipmentUserInfo(),

      traking_no: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      size_info: Joi.any(),

      shipment_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_bags: Joi.number(),

      delivery_date: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      payment: OrderModel.ShipmentPayment(),

      can_cancel: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      can_return: Joi.boolean(),

      refund_details: Joi.any(),

      delivery_address: OrderModel.DeliveryAddress(),

      comment: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      bags: Joi.array().items(OrderModel.Bags()),

      awb_no: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      shipment_created_at: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      invoice: OrderModel.Invoice(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      prices: OrderModel.Prices(),

      beneficiary_details: Joi.boolean(),

      order_id: Joi.string().allow(""),

      can_break: Joi.any(),

      track_url: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_shipments_in_order: Joi.number(),

      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      item_total: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      size: Joi.number(),
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

      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

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

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      success: Joi.boolean(),

      resend_timer: Joi.number(),

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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      meta: OrderModel.BagReasonMeta(),

      display_name: Joi.string().allow(""),

      id: Joi.number(),

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
      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      priority: Joi.number(),

      show_text_area: Joi.boolean(),

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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
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
      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

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
      message: Joi.string().allow("").allow(null),

      status: Joi.number(),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
