const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      item_total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
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
      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      latitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
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

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),
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
      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      gst_tax_percentage: Joi.number(),

      item_name: Joi.string().allow(""),

      identifiers: OrderModel.Identifiers(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      coupon_value: Joi.number(),

      gst_fee: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      brand_calculated_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      hsn_code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      total_units: Joi.number(),

      cod_charges: Joi.number(),

      coupon_effective_discount: Joi.number(),

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
      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      gst_tax_percentage: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      brand_calculated_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      coupon_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      quantity: Joi.number(),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      delivery_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      returnable_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),
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

  static Shipments() {
    return Joi.object({
      can_break: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      show_track_link: Joi.boolean(),

      dp_name: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      comment: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      delivery_address: OrderModel.DeliveryAddress(),

      can_cancel: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      total_details: OrderModel.ShipmentTotalDetails(),

      shipment_id: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      traking_no: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      shipment_created_at: Joi.string().allow(""),

      refund_details: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.Bags()),

      beneficiary_details: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      awb_no: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      size_info: Joi.any(),

      promise: OrderModel.Promise(),

      order_id: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      track_url: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      need_help_url: Joi.string().allow(""),
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
      store_id: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
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

  static OrderSchema() {
    return Joi.object({
      total_shipments_in_order: Joi.number(),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      user_info: OrderModel.UserInfo(),

      order_id: Joi.string().allow(""),
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
      shipment_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

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
      phone: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),

      priority: Joi.number(),

      show_text_area: Joi.boolean(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

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
      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

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
      status: Joi.number(),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
