const Joi = require("joi");

class OrderModel {
  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

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
      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      name: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      discount: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      coupon_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
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

      slug_key: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      size: Joi.string().allow(""),
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
      discount: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      gst_tag: Joi.string().allow(""),

      transfer_price: Joi.number(),

      item_name: Joi.string().allow(""),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      gst_fee: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      total_units: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      hsn_code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      cashback: Joi.number(),
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
      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      item: OrderModel.Item(),

      can_return: Joi.boolean(),

      quantity: Joi.number(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      delivery_date: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      line_number: Joi.number(),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),
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

  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      track_url: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      need_help_url: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      show_download_invoice: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      delivery_address: OrderModel.DeliveryAddress(),

      size_info: Joi.any(),

      total_bags: Joi.number(),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      can_cancel: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      order_type: Joi.string().allow(""),

      can_return: Joi.boolean(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      fulfilling_company: OrderModel.FulfillingCompany(),

      custom_meta: Joi.array().items(Joi.any()),

      total_details: OrderModel.ShipmentTotalDetails(),

      promise: OrderModel.Promise(),

      returnable_date: Joi.string().allow(""),

      can_break: Joi.any(),

      comment: Joi.string().allow(""),

      refund_details: Joi.any(),

      dp_name: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      show_track_link: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      delivery_date: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      traking_no: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_shipments_in_order: Joi.number(),

      user_info: OrderModel.UserInfo(),

      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

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

  static OrderPage() {
    return Joi.object({
      item_total: Joi.number(),

      current: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static OrderList() {
    return Joi.object({
      items: Joi.array().items(OrderModel.OrderSchema()),

      filters: OrderModel.OrderFilters(),

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

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

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
      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

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

      meta: OrderModel.BagReasonMeta(),

      id: Joi.number(),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),
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
      flow: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      show_text_area: Joi.boolean(),
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

      identifier: Joi.string().allow("").required(),

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
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

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
      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
