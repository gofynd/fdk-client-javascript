const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

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

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      store_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      item_name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      cashback: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      size: Joi.string().allow(""),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid: Joi.number(),

      gst_fee: Joi.number(),

      total_units: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid_roundoff: Joi.number(),
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

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      cashback: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid_roundoff: Joi.number(),
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
      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      current_status: OrderModel.CurrentStatus(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      can_return: Joi.boolean(),

      item: OrderModel.Item(),

      quantity: Joi.number(),

      returnable_date: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      id: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),
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

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      address: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      total_bags: Joi.number(),

      refund_details: Joi.any(),

      comment: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      traking_no: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      bags: Joi.array().items(OrderModel.Bags()),

      can_cancel: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      order_type: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      show_track_link: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      invoice: OrderModel.Invoice(),

      can_break: Joi.any(),

      fulfilling_store: OrderModel.FulfillingStore(),

      promise: OrderModel.Promise(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      shipment_status: OrderModel.ShipmentStatus(),

      size_info: Joi.any(),

      can_return: Joi.boolean(),

      beneficiary_details: Joi.boolean(),

      returnable_date: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      delivery_date: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      custom_meta: Joi.array().items(Joi.any()),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      order_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),
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
      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      show_text_area: Joi.boolean(),

      flow: Joi.string().allow(""),

      priority: Joi.number(),

      feedback_type: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

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
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
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
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates1()),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

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
      shipments: Joi.array().items(OrderModel.ShipmentsRequest1()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

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
      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number(),

      message: Joi.string().allow("").allow(null),
    });
  }

  static ProductsDataUpdatesFilters1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsDataUpdates1() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters1()),
    });
  }

  static EntityReasonData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons1() {
    return Joi.object({
      data: OrderModel.EntityReasonData1(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ProductsReasonsData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasons1() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData1(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters1()),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons1()),

      products: Joi.array().items(OrderModel.ProductsReasons1()),
    });
  }

  static Products1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData1(),

      products: Joi.array().items(OrderModel.Products1()),
    });
  }
}
module.exports = OrderModel;
