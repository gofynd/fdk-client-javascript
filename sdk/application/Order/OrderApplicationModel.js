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

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      created_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),
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

  static ShipmentPayment() {
    return Joi.object({
      mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      status: Joi.string().allow(""),

      mop: Joi.string().allow(""),
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

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),
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
      cod_charges: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      gst_fee: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      coupon_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      hsn_code: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      size: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      gst_tag: Joi.string().allow(""),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      total_units: Joi.number(),

      item_name: Joi.string().allow(""),

      coupon_value: Joi.number(),

      brand_calculated_amount: Joi.number(),
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
      id: Joi.number(),

      size: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      coupon_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      coupon_value: Joi.number(),

      brand_calculated_amount: Joi.number(),
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
      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      id: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      delivery_date: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      item: OrderModel.Item(),

      prices: OrderModel.Prices(),

      seller_identifier: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
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

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      can_return: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      dp_name: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      fulfilling_store: OrderModel.FulfillingStore(),

      returnable_date: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      beneficiary_details: Joi.boolean(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      awb_no: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      traking_no: Joi.string().allow(""),

      size_info: Joi.any(),

      can_break: Joi.any(),

      need_help_url: Joi.string().allow(""),

      total_bags: Joi.number(),

      track_url: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      custom_meta: Joi.array().items(Joi.any()),

      refund_details: Joi.any(),

      bags: Joi.array().items(OrderModel.Bags()),

      promise: OrderModel.Promise(),

      total_details: OrderModel.ShipmentTotalDetails(),

      invoice: OrderModel.Invoice(),

      show_download_invoice: Joi.boolean(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      comment: Joi.string().allow(""),
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

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      item_id: Joi.number(),

      quantity: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipments()),

      user_info: OrderModel.UserInfo(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),
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

      presigned_url: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Track() {
    return Joi.object({
      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

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

      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      resend_timer: Joi.number(),

      message: Joi.string().allow(""),

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
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),
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

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates1()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
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
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest1()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

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
      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.number(),
    });
  }

  static Products1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
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

  static ProductsReasonsData1() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
    });
  }

  static ProductsReasons1() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData1(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters1()),
    });
  }

  static EntityReasonData1() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static EntitiesReasons1() {
    return Joi.object({
      data: OrderModel.EntityReasonData1(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons1()),

      entities: Joi.array().items(OrderModel.EntitiesReasons1()),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products1()),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData1(),
    });
  }
}
module.exports = OrderModel;
