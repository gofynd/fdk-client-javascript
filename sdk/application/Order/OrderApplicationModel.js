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

  static OrderPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      cashback: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      discount: Joi.number(),

      price_marked: Joi.number(),

      coupon_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      cod_charges: Joi.number(),

      transfer_price: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number(),

      company_name: Joi.string().allow(""),
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

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      phone: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
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
      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      price_marked: Joi.number(),

      total_units: Joi.number(),

      discount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      gst_tag: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      transfer_price: Joi.number(),

      value_of_good: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow(""),

      cashback_applied: Joi.number(),
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

      name: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      code: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),
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

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      seller_identifier: Joi.string().allow(""),

      item: OrderModel.Item(),

      delivery_date: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      prices: OrderModel.Prices(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      total_bags: Joi.number(),

      show_download_invoice: Joi.boolean(),

      beneficiary_details: Joi.boolean(),

      traking_no: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      shipment_id: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      shipment_status: OrderModel.ShipmentStatus(),

      can_return: Joi.boolean(),

      total_details: OrderModel.ShipmentTotalDetails(),

      dp_name: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      custom_meta: Joi.array().items(Joi.any()),

      size_info: Joi.any(),

      awb_no: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      promise: OrderModel.Promise(),

      need_help_url: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      show_track_link: Joi.boolean(),

      delivery_address: OrderModel.DeliveryAddress(),

      can_cancel: Joi.boolean(),

      can_break: Joi.any(),

      refund_details: Joi.any(),

      invoice: OrderModel.Invoice(),

      track_url: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      fulfilling_company: OrderModel.FulfillingCompany(),
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

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),
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
      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

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

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      resend_timer: Joi.number(),

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
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),

      id: Joi.number(),

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

      feedback_type: Joi.string().allow(""),

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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
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

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
