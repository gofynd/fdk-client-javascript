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

  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

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
      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      transfer_price: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      coupon_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      fynd_credits: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
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
      slug_key: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),
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
      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      item_name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      total_units: Joi.number(),

      transfer_price: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback_applied: Joi.number(),

      gst_tag: Joi.string().allow(""),

      coupon_value: Joi.number(),

      gst_fee: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      coupon_effective_discount: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      added_to_fynd_cash: Joi.boolean(),

      fynd_credits: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),
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

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      item: OrderModel.Item(),

      line_number: Joi.number(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      can_return: Joi.boolean(),

      id: Joi.number(),

      parent_promo_bags: Joi.any(),

      delivery_date: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
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
      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      invoice: OrderModel.Invoice(),

      can_break: Joi.any(),

      fulfilling_store: OrderModel.FulfillingStore(),

      comment: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      shipment_status: OrderModel.ShipmentStatus(),

      track_url: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      shipment_created_at: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      user_info: OrderModel.ShipmentUserInfo(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      order_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      refund_details: Joi.any(),

      dp_name: Joi.string().allow(""),

      total_bags: Joi.number(),

      can_cancel: Joi.boolean(),

      show_track_link: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      size_info: Joi.any(),

      returnable_date: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      beneficiary_details: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      order_type: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      delivery_date: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      total_details: OrderModel.ShipmentTotalDetails(),

      traking_no: Joi.string().allow(""),
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
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),

      user_info: OrderModel.UserInfo(),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),
    });
  }

  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters(),

      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),
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
      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      resend_timer: Joi.number(),

      message: Joi.string().allow(""),

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
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static BagReasons() {
    return Joi.object({
      meta: OrderModel.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),
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

      reason_id: Joi.number(),

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),
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

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),

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
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

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

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
