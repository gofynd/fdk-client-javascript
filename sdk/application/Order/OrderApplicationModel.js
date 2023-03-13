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

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      quantity: Joi.number(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      coupon_value: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      hsn_code: Joi.string().allow(""),

      added_to_fynd_cash: Joi.boolean(),

      delivery_charge: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      total_units: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cashback: Joi.number(),

      gst_fee: Joi.number(),

      refund_credit: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_marked: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid: Joi.number(),

      item_name: Joi.string().allow(""),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_value: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      delivery_charge: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_marked: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid: Joi.number(),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),
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

      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_return: Joi.boolean(),

      id: Joi.number(),

      quantity: Joi.number(),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      item: OrderModel.Item(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
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

  static DeliveryAddress() {
    return Joi.object({
      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      country: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      refund_details: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      can_break: Joi.any(),

      show_track_link: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      user_info: OrderModel.ShipmentUserInfo(),

      order_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      payment: OrderModel.ShipmentPayment(),

      traking_no: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      prices: OrderModel.Prices(),

      total_details: OrderModel.ShipmentTotalDetails(),

      invoice: OrderModel.Invoice(),

      size_info: Joi.any(),

      total_bags: Joi.number(),

      need_help_url: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      awb_no: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      shipment_created_at: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      user_info: OrderModel.UserInfo(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),
    });
  }

  static OrderPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),
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
      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

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
      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      success: Joi.boolean(),

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

      reasons: Joi.array().items(OrderModel.BagReasons()),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      meta: OrderModel.BagReasonMeta(),

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

      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      reason_id: Joi.number(),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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
      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),
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
      message: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number(),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
