const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),
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

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      address_category: Joi.string().allow(""),

      address: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_value: Joi.number(),

      cashback: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      transfer_price: Joi.number(),

      promotion_effective_discount: Joi.number(),
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
      show_promise: Joi.boolean(),

      timestamp: OrderModel.TimeStampData(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      slug_key: Joi.string().allow(""),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.ItemBrand(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

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
      gst_fee: Joi.number(),

      item_name: Joi.string().allow(""),

      coupon_value: Joi.number(),

      cashback: Joi.number(),

      cod_charges: Joi.number(),

      gst_tag: Joi.string().allow(""),

      price_marked: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      total_units: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      size: Joi.string().allow(""),

      coupon_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      identifiers: OrderModel.Identifiers(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      discount: Joi.number(),

      transfer_price: Joi.number(),

      promotion_effective_discount: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      quantity: Joi.number(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      line_number: Joi.number(),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      returnable_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      item: OrderModel.Item(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      seller_identifier: Joi.string().allow(""),

      id: Joi.number(),

      delivery_date: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      dp_name: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      size_info: Joi.any(),

      awb_no: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      can_return: Joi.boolean(),

      total_bags: Joi.number(),

      order_type: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      refund_details: Joi.any(),

      delivery_date: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      delivery_address: OrderModel.DeliveryAddress(),

      can_break: Joi.any(),

      beneficiary_details: Joi.boolean(),

      payment: OrderModel.ShipmentPayment(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      show_track_link: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      prices: OrderModel.Prices(),

      promise: OrderModel.Promise(),

      traking_no: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      user_info: OrderModel.ShipmentUserInfo(),

      need_help_url: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      return_meta: Joi.any(),

      show_download_invoice: Joi.boolean(),

      invoice: OrderModel.Invoice(),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      total_shipments_in_order: Joi.number(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
    });
  }

  static OrderList() {
    return Joi.object({
      page: OrderModel.OrderPage(),

      filters: OrderModel.OrderFilters(),

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
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

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

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      meta: OrderModel.BagReasonMeta(),

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
      priority: Joi.number(),

      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      flow: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
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

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      task: Joi.boolean(),

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
      status: Joi.number(),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
