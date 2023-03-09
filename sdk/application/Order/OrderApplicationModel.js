const Joi = require("joi");

class OrderModel {
  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
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

  static ShipmentPayment() {
    return Joi.object({
      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      gst_tax_percentage: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      sizes: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      gst_tax_percentage: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string().allow(""),

      identifiers: OrderModel.Identifiers(),

      hsn_code: Joi.string().allow(""),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      gst_fee: Joi.number(),

      refund_amount: Joi.number(),

      size: Joi.string().allow(""),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      total_units: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),
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

      brand: OrderModel.ItemBrand(),

      name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),
    });
  }

  static Bags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      id: Joi.number(),

      delivery_date: Joi.string().allow(""),

      quantity: Joi.number(),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      line_number: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      seller_identifier: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_cancel: Joi.boolean(),
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
      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      payment: OrderModel.ShipmentPayment(),

      prices: OrderModel.Prices(),

      invoice: OrderModel.Invoice(),

      shipment_status: OrderModel.ShipmentStatus(),

      shipment_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      awb_no: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      total_bags: Joi.number(),

      beneficiary_details: Joi.boolean(),

      order_id: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      user_info: OrderModel.ShipmentUserInfo(),

      need_help_url: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      delivery_date: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      can_return: Joi.boolean(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      traking_no: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      order_type: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_break: Joi.any(),

      size_info: Joi.any(),

      bags: Joi.array().items(OrderModel.Bags()),

      show_download_invoice: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      refund_details: Joi.any(),

      promise: OrderModel.Promise(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),
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

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      store_id: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),
    });
  }

  static OrderPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),
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
      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      display_name: Joi.string().allow(""),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      meta: OrderModel.BagReasonMeta(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      reason_text: Joi.string().allow(""),

      flow: Joi.string().allow(""),

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
      quantity: Joi.number(),

      line_number: Joi.number(),

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
      quantity: Joi.number(),

      line_number: Joi.number(),

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

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

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
      status: Joi.number(),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
