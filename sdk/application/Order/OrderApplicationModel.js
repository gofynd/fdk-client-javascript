const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      item_total: Joi.number(),
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

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      price_marked: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cod_charges: Joi.number(),

      refund_amount: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mop: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
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
      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),

      gst_fee: Joi.number(),

      amount_paid: Joi.number(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      hsn_code: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      fynd_credits: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback: Joi.number(),

      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      refund_amount: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow(""),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      total_units: Joi.number(),
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

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      name: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      item: OrderModel.Item(),

      current_status: OrderModel.CurrentStatus(),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      promise: OrderModel.Promise(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      prices: OrderModel.Prices(),

      total_details: OrderModel.ShipmentTotalDetails(),

      can_return: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_created_at: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      can_cancel: Joi.boolean(),

      comment: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      show_track_link: Joi.boolean(),

      order_id: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      refund_details: Joi.any(),

      delivery_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      show_download_invoice: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      traking_no: Joi.string().allow(""),

      can_break: Joi.any(),

      order_type: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      dp_name: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      shipment_id: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      need_help_url: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      size_info: Joi.any(),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

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

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipments()),

      user_info: OrderModel.UserInfo(),

      order_created_time: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
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
      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),

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

      shipment_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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

      phone: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

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
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      meta: OrderModel.BagReasonMeta(),

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

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      reason_id: Joi.number(),

      feedback_type: Joi.string().allow(""),

      flow: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

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
      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
