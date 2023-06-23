const Joi = require("joi");

class OrderModel {
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: Joi.any(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }
  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),
      article_quantity: Joi.number(),
      mrp_promotion: Joi.boolean(),
      promo_id: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
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
      id: Joi.number(),
      meta: OrderModel.BagReasonMeta(),
      qc_type: Joi.array().items(Joi.string().allow("")),
      question_set: Joi.array().items(OrderModel.QuestionSet()),
      reasons: Joi.array().items(Joi.link("#BagReasons")),
    }).id("BagReasons");
  }
  static Bags() {
    return Joi.object({
      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      current_status: OrderModel.CurrentStatus(),
      delivery_date: Joi.string().allow("").allow(null),
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
      id: Joi.number(),
      item: OrderModel.Item(),
      line_number: Joi.number(),
      parent_promo_bags: Joi.any(),
      prices: OrderModel.Prices(),
      quantity: Joi.number(),
      returnable_date: Joi.string().allow("").allow(null),
      seller_identifier: Joi.string().allow(""),
    });
  }
  static BagsForReorder() {
    return Joi.object({
      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
      item_id: Joi.number(),
      item_size: Joi.string().allow(""),
      quantity: Joi.number(),
      seller_id: Joi.number(),
      store_id: Joi.number(),
    });
  }
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }
  static BreakupValues() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static CustomerDetailsResponse() {
    return Joi.object({
      country: Joi.string().allow(""),
      name: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
    });
  }
  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }
  static DeliveryAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().allow(null),
      longitude: Joi.number().allow(null),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(Joi.any()),
    });
  }
  static EntitiesReasons() {
    return Joi.object({
      data: OrderModel.EntityReasonData(),
      filters: Joi.array().items(Joi.any()),
    });
  }
  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
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
  static FinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_fee: Joi.number(),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      hsn_code: Joi.string().allow(""),
      identifiers: OrderModel.Identifiers(),
      item_name: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      size: Joi.string().allow(""),
      total_units: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
    });
  }
  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
      updated_date: Joi.string().allow(""),
    });
  }
  static Item() {
    return Joi.object({
      brand: OrderModel.ItemBrand(),
      code: Joi.string().allow(""),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
    });
  }
  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
    });
  }
  static OrderById() {
    return Joi.object({
      order: OrderModel.OrderSchema(),
    });
  }
  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }
  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters(),
      items: Joi.array().items(OrderModel.OrderSchema()),
      page: OrderModel.OrderPage(),
    });
  }
  static OrderPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
      order_created_time: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.Shipments()),
      total_shipments_in_order: Joi.number(),
      user_info: OrderModel.UserInfo(),
    });
  }
  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      value: Joi.number(),
    });
  }
  static Prices() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_tax_percentage: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
    });
  }
  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }
  static ProductsDataUpdatesFilters() {
    return Joi.object({
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
  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }
  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
    });
  }
  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),
      timestamp: OrderModel.TimeStampData(),
    });
  }
  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }
  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),
      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }
  static ResponseGetInvoiceShipment() {
    return Joi.object({
      presigned_type: Joi.string().allow("").required(),
      presigned_url: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
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
  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatusesBodyResponse()),
    });
  }
  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.BagReasons()),
      success: Joi.boolean(),
    });
  }
  static ShipmentById() {
    return Joi.object({
      shipment: OrderModel.Shipments(),
    });
  }
  static ShipmentPayment() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      mop: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static ShipmentReason() {
    return Joi.object({
      feedback_type: Joi.string().allow(""),
      flow: Joi.string().allow(""),
      priority: Joi.number(),
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }
  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }
  static Shipments() {
    return Joi.object({
      awb_no: Joi.string().allow(""),
      bags: Joi.array().items(OrderModel.Bags()),
      beneficiary_details: Joi.boolean(),
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
      can_break: Joi.any(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      comment: Joi.string().allow(""),
      custom_meta: Joi.array().items(Joi.any()),
      delivery_address: OrderModel.DeliveryAddress(),
      delivery_date: Joi.string().allow("").allow(null),
      dp_name: Joi.string().allow(""),
      fulfilling_company: OrderModel.FulfillingCompany(),
      fulfilling_store: OrderModel.FulfillingStore(),
      invoice: OrderModel.Invoice(),
      need_help_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      order_type: Joi.string().allow("").allow(null),
      payment: OrderModel.ShipmentPayment(),
      prices: OrderModel.Prices(),
      promise: OrderModel.Promise(),
      refund_details: Joi.any(),
      return_meta: Joi.any(),
      returnable_date: Joi.string().allow("").allow(null),
      shipment_created_at: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      shipment_status: OrderModel.ShipmentStatus(),
      show_download_invoice: Joi.boolean(),
      show_track_link: Joi.boolean(),
      size_info: Joi.any(),
      total_bags: Joi.number(),
      total_details: OrderModel.ShipmentTotalDetails(),
      track_url: Joi.string().allow(""),
      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),
      traking_no: Joi.string().allow(""),
      user_info: OrderModel.ShipmentUserInfo(),
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
  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
      value: Joi.string().allow("").allow(null),
    });
  }
  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),
      sizes: Joi.number(),
      total_price: Joi.number(),
    });
  }
  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }
  static ShipmentUserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
      status: Joi.string().allow(""),
    });
  }
  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }
  static TimeStampData() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }
  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
    });
  }
  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
      value: Joi.string().allow("").allow(null),
    });
  }
  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderModel.StatuesRequest()),
      task: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }
  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
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
}
module.exports = OrderModel;
