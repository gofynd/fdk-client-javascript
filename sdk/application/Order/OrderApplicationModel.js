const Joi = require("joi");

class OrderModel {
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

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),
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

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),
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
      pincode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      version: Joi.string().allow(""),

      state: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      address_category: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),
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
      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      promotion_effective_discount: Joi.number(),

      cashback: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
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
      brand_calculated_amount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string().allow(""),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      coupon_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      transfer_price: Joi.number(),

      gst_fee: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      hsn_code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      cashback_applied: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      total_units: Joi.number(),

      promotion_effective_discount: Joi.number(),

      size: Joi.string().allow(""),

      cashback: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      returnable_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      item: OrderModel.Item(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      id: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
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
      name: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      returnable_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      refund_details: Joi.any(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      custom_meta: Joi.array().items(Joi.any()),

      size_info: Joi.any(),

      order_id: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      traking_no: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      promise: OrderModel.Promise(),

      awb_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      need_help_url: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      shipment_created_at: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      fulfilling_store: OrderModel.FulfillingStore(),

      user_info: OrderModel.ShipmentUserInfo(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      track_url: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      beneficiary_details: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      can_break: Joi.any(),

      invoice: OrderModel.Invoice(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      show_track_link: Joi.boolean(),

      total_bags: Joi.number(),

      total_details: OrderModel.ShipmentTotalDetails(),

      dp_name: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      user_info: OrderModel.UserInfo(),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
    });
  }

  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

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

      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

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

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static BagReasons() {
    return Joi.object({
      meta: OrderModel.BagReasonMeta(),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      id: Joi.number(),

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
      show_text_area: Joi.boolean(),

      priority: Joi.number(),

      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),

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
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),
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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

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
      code: Joi.string().allow("").allow(null),

      status: Joi.number(),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
