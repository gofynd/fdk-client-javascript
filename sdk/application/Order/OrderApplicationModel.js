const Joi = require("joi");

class OrderModel {
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      seller_id: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback_applied: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      fynd_credits: Joi.number(),

      coupon_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
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

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

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

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),
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
      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      size: Joi.string().allow(""),

      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      hsn_code: Joi.string().allow(""),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      fynd_credits: Joi.number(),

      coupon_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      total_units: Joi.number(),

      item_name: Joi.string().allow(""),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      id: Joi.number(),

      item: OrderModel.Item(),

      returnable_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      can_cancel: Joi.boolean(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      seller_identifier: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      line_number: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      address: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      prices: OrderModel.Prices(),

      need_help_url: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      order_type: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      beneficiary_details: Joi.boolean(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      can_break: Joi.any(),

      shipment_created_at: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      user_info: OrderModel.ShipmentUserInfo(),

      bags: Joi.array().items(OrderModel.Bags()),

      size_info: Joi.any(),

      traking_no: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      show_download_invoice: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      fulfilling_store: OrderModel.FulfillingStore(),

      order_id: Joi.string().allow(""),

      refund_details: Joi.any(),

      can_return: Joi.boolean(),

      invoice: OrderModel.Invoice(),

      shipment_id: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      comment: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      dp_name: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      custom_meta: Joi.array().items(Joi.any()),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      total_bags: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      total_shipments_in_order: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
    });
  }

  static OrderPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),

      item_total: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

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
      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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
      shipment_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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

      meta: OrderModel.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),
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

      show_text_area: Joi.boolean(),

      priority: Joi.number(),

      feedback_type: Joi.string().allow(""),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

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

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

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
      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.number(),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
