const Joi = require("joi");

class OrderModel {
  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
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

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      item_name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_fee: Joi.number(),

      price_marked: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      total_units: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      gst_tax_percentage: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      hsn_code: Joi.string().allow(""),

      identifiers: OrderModel.Identifiers(),

      coupon_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),
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
      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      seller_identifier: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_value: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      gst_tax_percentage: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      coupon_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
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
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_cancel: Joi.boolean(),

      id: Joi.number(),

      item: OrderModel.Item(),

      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_passed: Joi.boolean(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
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

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      track_url: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      size_info: Joi.any(),

      total_details: OrderModel.ShipmentTotalDetails(),

      custom_meta: Joi.array().items(Joi.any()),

      payment: OrderModel.ShipmentPayment(),

      need_help_url: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      returnable_date: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      bags: Joi.array().items(OrderModel.Bags()),

      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      can_break: Joi.any(),

      show_download_invoice: Joi.boolean(),

      order_type: Joi.string().allow(""),

      can_return: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      order_id: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      promise: OrderModel.Promise(),

      beneficiary_details: Joi.boolean(),

      traking_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      refund_details: Joi.any(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      shipment_status: OrderModel.ShipmentStatus(),

      delivery_address: OrderModel.DeliveryAddress(),
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
      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      quantity: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipments()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_shipments_in_order: Joi.number(),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      current: Joi.number(),

      item_total: Joi.number(),
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
      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_time: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      resend_timer: Joi.number(),

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

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      meta: OrderModel.BagReasonMeta(),
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
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),

      priority: Joi.number(),

      show_text_area: Joi.boolean(),

      flow: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),
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

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
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
