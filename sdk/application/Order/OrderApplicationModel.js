const Joi = require("joi");

class OrderModel {
  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

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

      seller_id: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),
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

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
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
      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_credit: Joi.number(),

      discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cod_charges: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      cashback: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),
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

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),
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
      delivery_charge: Joi.number(),

      gst_fee: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      total_units: Joi.number(),

      brand_calculated_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_credit: Joi.number(),

      discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      hsn_code: Joi.string().allow(""),

      added_to_fynd_cash: Joi.boolean(),

      cod_charges: Joi.number(),

      gst_tax_percentage: Joi.number(),

      item_name: Joi.string().allow(""),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      price_marked: Joi.number(),

      cashback: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      transfer_price: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      id: Joi.number(),

      can_return: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      delivery_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      item: OrderModel.Item(),

      returnable_date: Joi.string().allow(""),

      line_number: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      parent_promo_bags: Joi.any(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),
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

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      latitude: Joi.number(),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
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
      id: Joi.number(),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      refund_details: Joi.any(),

      total_details: OrderModel.ShipmentTotalDetails(),

      shipment_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      bags: Joi.array().items(OrderModel.Bags()),

      traking_no: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      can_return: Joi.boolean(),

      size_info: Joi.any(),

      beneficiary_details: Joi.boolean(),

      dp_name: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      show_download_invoice: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_bags: Joi.number(),

      delivery_date: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      custom_meta: Joi.array().items(Joi.any()),

      returnable_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      show_track_link: Joi.boolean(),

      shipment_created_at: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      delivery_address: OrderModel.DeliveryAddress(),

      invoice: OrderModel.Invoice(),

      can_break: Joi.any(),

      order_id: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      fulfilling_store: OrderModel.FulfillingStore(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      user_info: OrderModel.UserInfo(),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      is_selected: Joi.boolean(),

      value: Joi.number(),

      display: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      current: Joi.number(),

      item_total: Joi.number(),

      size: Joi.number(),
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
      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

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
      phone: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
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
      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      meta: OrderModel.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(OrderModel.BagReasons()),
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

      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),

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
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates1()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static Products() {
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

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest1()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

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

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }

  static ProductsReasonsFilters1() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsReasonsData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasons1() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters1()),

      data: OrderModel.ProductsReasonsData1(),
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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData1(),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons1()),

      entities: Joi.array().items(OrderModel.EntitiesReasons1()),
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
      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters1()),

      data: Joi.any(),
    });
  }

  static Products1() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      reasons: OrderModel.ReasonsData1(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products1()),

      identifier: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
