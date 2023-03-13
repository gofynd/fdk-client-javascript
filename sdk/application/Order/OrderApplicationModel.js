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

      current: Joi.number(),

      size: Joi.number(),
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

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
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
      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),
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

  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      image: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      brand_calculated_amount: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      transfer_price: Joi.number(),
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
      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      gst_fee: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      value_of_good: Joi.number(),

      total_units: Joi.number(),

      gst_tag: Joi.string().allow(""),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      item_name: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      size: Joi.string().allow(""),

      refund_credit: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      transfer_price: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      id: Joi.number(),

      item: OrderModel.Item(),

      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      returnable_date: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
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

  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      longitude: Joi.number(),

      address: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      user_info: OrderModel.ShipmentUserInfo(),

      can_cancel: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      fulfilling_company: OrderModel.FulfillingCompany(),

      delivery_date: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      dp_name: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      beneficiary_details: Joi.boolean(),

      total_bags: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      size_info: Joi.any(),

      refund_details: Joi.any(),

      invoice: OrderModel.Invoice(),

      order_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      traking_no: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      can_break: Joi.any(),

      returnable_date: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      promise: OrderModel.Promise(),

      payment: OrderModel.ShipmentPayment(),

      shipment_created_at: Joi.string().allow(""),

      can_return: Joi.boolean(),

      delivery_address: OrderModel.DeliveryAddress(),

      awb_no: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      total_shipments_in_order: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),
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

      shipment_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_time: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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
      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasons() {
    return Joi.object({
      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      meta: OrderModel.BagReasonMeta(),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
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
      flow: Joi.string().allow(""),

      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      priority: Joi.number(),

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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),
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

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

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
      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
