const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),
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
      seller_id: Joi.number(),

      store_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

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

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
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

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number(),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      version: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),
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
      item_name: Joi.string().allow(""),

      price_marked: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      total_units: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      transfer_price: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number(),

      gst_tag: Joi.string().allow(""),

      size: Joi.string().allow(""),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      gst_fee: Joi.number(),

      coupon_effective_discount: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      gst_tax_percentage: Joi.number(),

      cashback: Joi.number(),

      coupon_value: Joi.number(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      transfer_price: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_effective_discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cashback: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),
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

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      id: Joi.number(),

      size: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      parent_promo_bags: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      returnable_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_return: Joi.boolean(),

      id: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      delivery_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      can_cancel: Joi.boolean(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      pieces: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      can_break: Joi.any(),

      invoice: OrderModel.Invoice(),

      comment: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      can_cancel: Joi.boolean(),

      show_track_link: Joi.boolean(),

      need_help_url: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      beneficiary_details: Joi.boolean(),

      shipment_created_at: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      awb_no: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_return: Joi.boolean(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      shipment_id: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      delivery_address: OrderModel.DeliveryAddress(),

      refund_details: Joi.any(),

      bags: Joi.array().items(OrderModel.Bags()),

      order_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      total_details: OrderModel.ShipmentTotalDetails(),

      returnable_date: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      size_info: Joi.any(),

      traking_no: Joi.string().allow(""),

      order_type: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      user_info: OrderModel.UserInfo(),

      shipments: Joi.array().items(OrderModel.Shipments()),
    });
  }

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
      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

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
      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      meta: OrderModel.BagReasonMeta(),
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

      flow: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      priority: Joi.number(),

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
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
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

      quantity: Joi.number(),

      line_number: Joi.number(),
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
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),
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

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),
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
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

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
      message: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      exception: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
