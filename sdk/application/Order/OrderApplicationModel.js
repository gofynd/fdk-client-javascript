const Joi = require("joi");

class OrderModel {
  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      transfer_price: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_effective_discount: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      sizes: Joi.number(),

      pieces: Joi.number(),
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
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
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
      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),
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

      price_effective: Joi.number(),

      total_units: Joi.number(),

      price_marked: Joi.number(),

      hsn_code: Joi.string().allow(""),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      item_name: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      transfer_price: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cod_charges: Joi.number(),

      size: Joi.string().allow(""),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      identifiers: OrderModel.Identifiers(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_fee: Joi.number(),

      coupon_effective_discount: Joi.number(),
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
      name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
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

  static Bags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      delivery_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),

      returnable_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      current_status: OrderModel.CurrentStatus(),

      id: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      fulfilling_store: OrderModel.FulfillingStore(),

      order_id: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      shipment_status: OrderModel.ShipmentStatus(),

      user_info: OrderModel.ShipmentUserInfo(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      returnable_date: Joi.string().allow(""),

      traking_no: Joi.string().allow(""),

      can_break: Joi.any(),

      size_info: Joi.any(),

      delivery_date: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      can_return: Joi.boolean(),

      total_bags: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      prices: OrderModel.Prices(),

      invoice: OrderModel.Invoice(),

      beneficiary_details: Joi.boolean(),

      need_help_url: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      total_details: OrderModel.ShipmentTotalDetails(),

      dp_name: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      shipment_created_at: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      track_url: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      bags: Joi.array().items(OrderModel.Bags()),

      refund_details: Joi.any(),

      show_download_invoice: Joi.boolean(),
    });
  }

  static UserInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
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

  static OrderSchema() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),

      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_created_time: Joi.string().allow(""),
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
      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),
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
      success: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

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

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      qc_type: Joi.array().items(Joi.string().allow("")),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),
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

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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
      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

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
      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }
}
module.exports = OrderModel;
