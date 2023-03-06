const Joi = require("joi");

class OrderModel {
  static UserInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      sizes: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mop: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      refund_credit: Joi.number(),

      coupon_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cashback: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      transfer_price: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      refund_credit: Joi.number(),

      gst_tag: Joi.string().allow(""),

      coupon_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      cashback: Joi.number(),

      size: Joi.string().allow(""),

      amount_paid: Joi.number(),

      hsn_code: Joi.string().allow(""),

      total_units: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      item_name: Joi.string().allow(""),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_fee: Joi.number(),

      discount: Joi.number(),

      transfer_price: Joi.number(),
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
      code: Joi.string().allow(""),

      id: Joi.number(),

      size: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      id: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      current_status: OrderModel.CurrentStatus(),

      can_return: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      quantity: Joi.number(),

      line_number: Joi.number(),

      item: OrderModel.Item(),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),
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
      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      company_name: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static Shipments() {
    return Joi.object({
      track_url: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      dp_name: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      delivery_address: OrderModel.DeliveryAddress(),

      traking_no: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      shipment_created_at: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      delivery_date: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      awb_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      total_bags: Joi.number(),

      invoice: OrderModel.Invoice(),

      user_info: OrderModel.ShipmentUserInfo(),

      need_help_url: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      order_id: Joi.string().allow(""),

      size_info: Joi.any(),

      show_track_link: Joi.boolean(),

      can_break: Joi.any(),

      refund_details: Joi.any(),
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

      store_id: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
    });
  }

  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
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
      items: Joi.array().items(OrderModel.OrderSchema()),

      page: OrderModel.OrderPage(),

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
      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
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

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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

      id: Joi.number(),

      meta: OrderModel.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),

      priority: Joi.number(),

      flow: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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
      quantity: Joi.number(),

      line_number: Joi.number(),

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

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

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
      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
