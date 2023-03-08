const Joi = require("joi");

class OrderModel {
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      id: Joi.number(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number(),

      value_of_good: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      status: Joi.any().required(),

      can_return: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      line_number: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      total_shipment_bags: Joi.number().required(),

      applied_promos: Joi.any(),

      group_id: Joi.string().allow(""),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      created_at: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      channel: Joi.any(),

      shipment_created_at: Joi.number().required(),

      payment_methods: Joi.any(),

      id: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_shipments_in_order: Joi.number().required(),

      sla: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      user: OrderModel.UserDataInfo(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.number(),

      created_on: Joi.number().required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static ItemCriterias() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: OrderModel.ItemCriterias(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      price_effective: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      tax_collected_at_source: Joi.number(),

      fynd_credits: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      amount_paid: Joi.number().required(),

      refund_credit: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      price_marked: Joi.number().required(),

      total_units: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_fee: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      pm_price_split: Joi.any().required(),

      transfer_price: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      gst_details: OrderModel.BagGST(),

      entity_type: Joi.string().allow(""),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      display_name: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      bag_id: Joi.number().required(),

      article: OrderModel.OrderBagArticle(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      line_number: Joi.number(),

      current_status: Joi.string().allow(""),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      name: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      state_id: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      forward: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      status: Joi.string().allow("").required(),

      bag_state_mapper: OrderModel.BagStateMapper().required(),

      delivery_partner_id: Joi.number().allow(null),

      store_id: Joi.number().required(),

      app_display_name: Joi.boolean(),

      bsh_id: Joi.number().required(),

      display_name: Joi.boolean(),

      updated_at: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      is_invoiced: Joi.boolean().required(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      email_id: Joi.string().allow("").required(),

      ordering_store: Joi.any().required(),

      picked_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      gst_details: OrderModel.GSTDetailsData(),

      is_fynd_coupon: Joi.boolean().required(),

      beneficiary_details: Joi.boolean(),

      replacement_details: Joi.string().allow(""),

      pay_button: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      packaging_type: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      coupon: Joi.any(),

      enable_dp_tracking: Joi.string().allow(""),

      is_fynd_store: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      go_green: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      order: OrderModel.OrderDetailsData(),

      user_id: Joi.string().allow("").required(),

      user_info: Joi.any(),

      due_date: Joi.string().allow(""),

      fyndstore_emp: Joi.any().required(),

      refund_details: Joi.any(),

      forward_order_status: Joi.array().items(Joi.any()),

      current_shipment_status: Joi.any().required(),

      order_status: Joi.any().required(),

      user_agent: Joi.string().allow(""),

      escalation: Joi.any(),

      vertical: Joi.string().allow(""),

      total_items: Joi.number(),

      is_not_fynd_source: Joi.boolean().required(),

      bank_data: Joi.any(),

      dp_details: OrderModel.DPDetailsData(),

      mid: Joi.string().allow(""),

      refund_text: Joi.string().allow(""),

      invoice: Joi.any().required(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      shipment_status: Joi.string().allow(""),

      company: Joi.any().required(),

      billing_details: OrderModel.UserDetailsData(),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_url: Joi.string().allow("").required(),

      operational_status: Joi.string().allow(""),

      is_packaging_order: Joi.boolean().required(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      enable_tracking: Joi.boolean(),

      items: Joi.array().items(Joi.any()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_quantity: Joi.number(),

      is_pdsr: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      can_break: Joi.string().allow("").required(),

      kirana_store_id: Joi.string().allow(""),

      secured_delivery_flag: Joi.string().allow(""),

      forward_shipment_status: Joi.array().items(Joi.any()),

      status: OrderModel.ShipmentStatusData(),

      can_return: Joi.boolean(),

      order_created_time: Joi.string().allow(""),

      lock_status: Joi.string().allow("").required(),

      forward_tracking_list: Joi.array().items(Joi.any()),

      platform_logo: Joi.boolean().required(),

      credit_note_id: Joi.string().allow("").required(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      order_type: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      status_progress: Joi.number().required(),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      shipment_count: Joi.number().required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      picked_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      gst_details: OrderModel.GSTDetailsData(),

      payments: OrderModel.ShipmentPayments(),

      packaging_type: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      enable_dp_tracking: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      vertical: Joi.string().allow(""),

      total_items: Joi.number(),

      dp_details: OrderModel.DPDetailsData(),

      shipment_status: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      delivery_details: OrderModel.UserDetailsData(),

      operational_status: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_quantity: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      status: OrderModel.ShipmentStatusData(),

      platform_logo: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      payment_mode: Joi.string().allow(""),

      delivery_slot: Joi.any(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      custom_meta: Joi.array().items(Joi.any()),

      order: OrderModel.OrderDict(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      total_items: Joi.number(),

      value: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      user_info: OrderModel.UserDataInfo(),

      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      meta: Joi.any(),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),
    });
  }

  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static MetricsCount() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.Options()),

      text: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.PlatformTrack()),

      meta: Joi.any(),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      advance: Joi.array().items(Joi.any()),
    });
  }

  static Success() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(OrderModel.JioCodeUpsertDataSet()),
    });
  }

  static NestedErrorSchemaDataSet() {
    return Joi.object({
      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
    });
  }

  static BulkInvoicingResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static BulkInvoiceLabelResponse() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      data: Joi.any(),

      store_id: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      file_name: Joi.string().allow(""),

      size: Joi.number(),

      namespace: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      cdn: OrderModel.URL(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      user_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      file_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      user_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      total: Joi.number(),

      processing: Joi.number(),

      status: Joi.string().allow(""),

      failed: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

      error: Joi.string().allow(""),
    });
  }

  static DateRange() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),
    });
  }

  static ManifestFilter() {
    return Joi.object({
      dp_name: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      stores: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      sales_channel_name: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      company_id: Joi.number(),

      created_by: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      is_active: Joi.boolean(),

      filters: OrderModel.ManifestFilter(),

      status: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),
    });
  }

  static ManifestPage() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),
    });
  }

  static GeneratedManifestResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.GeneratedManifestItem()),

      page: OrderModel.ManifestPage(),
    });
  }

  static ManifestDetailItem() {
    return Joi.object({
      awb: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      order_id: Joi.string().allow(""),
    });
  }

  static ManifestDetailTotalShipmentPricesCount() {
    return Joi.object({
      shipment_count: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static ManifestDetailMeta() {
    return Joi.object({
      filters: OrderModel.ManifestFilter(),

      total_shipment_prices_count: OrderModel.ManifestDetailTotalShipmentPricesCount(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      company_id: Joi.number(),

      created_by: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.number(),

      id: Joi.number(),

      filters: OrderModel.ManifestFilter(),

      status: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      meta: OrderModel.ManifestDetailMeta(),

      uid: Joi.number(),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ManifestDetailItem()),

      additional_shipment_count: Joi.number(),

      page: OrderModel.ManifestPage(),

      manifest_details: Joi.array().items(OrderModel.ManifestDetail()),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),
    });
  }

  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      success: Joi.boolean(),

      reasons: Joi.array().items(OrderModel.Reason()),
    });
  }

  static BulkActionPayload() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    });
  }

  static BulkActionResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      status: Joi.boolean(),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_invoice: OrderModel.StoreEinvoice(),

      e_waybill: OrderModel.StoreEwaybill(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      timing: Joi.array().items(Joi.any()),

      stage: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_number: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      company_id: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      alohomora_user_id: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      s_id: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      location_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      parent_store_id: Joi.number(),

      contact_person: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      meta: OrderModel.StoreMeta().required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      phone: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      packaging_material_count: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      gender: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      l2_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      meta: Joi.any(),

      can_cancel: Joi.boolean(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      can_return: Joi.boolean(),

      webstore_product_url: Joi.string().allow("").allow(null),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      created_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      raw_meta: Joi.any(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      esp_modified: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      due_date: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      is_priority: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_date: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      irn: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      return_store_node: Joi.number(),

      return_awb_number: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      external: Joi.any(),

      due_date: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      weight: Joi.number().required(),

      shipment_volumetric_weight: Joi.number(),

      return_details: Joi.any(),

      lock_data: OrderModel.LockData(),

      bag_weight: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      debug_info: OrderModel.DebugInfo(),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      awb_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      packaging_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      shipment_weight: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      same_store_available: Joi.boolean().required(),

      dp_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      article_details: OrderModel.ArticleDetails(),

      ordering_store: OrderModel.Store(),

      original_bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      entity_type: Joi.string().allow(""),

      quantity: Joi.number(),

      bag_update_time: Joi.number(),

      item: OrderModel.Item().required(),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      dates: OrderModel.Dates(),

      tags: Joi.array().items(Joi.string().allow("")),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      no_of_bags_order: Joi.number(),

      article: OrderModel.Article().required(),

      reasons: Joi.array().items(Joi.any()),

      operational_status: Joi.string().allow(""),

      b_id: Joi.number().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      meta: OrderModel.BagMeta(),

      line_number: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      qc_required: Joi.any(),

      restore_promos: Joi.any(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      b_type: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      applied_promos: Joi.array().items(Joi.any()),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Page1() {
    return Joi.object({
      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),
    });
  }

  static GetBagsPlatformResponse() {
    return Joi.object({
      items: Joi.array()
        .items(OrderModel.BagDetailsPlatformResponse())
        .required(),

      page: OrderModel.Page1().required(),
    });
  }

  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      status: Joi.number(),

      shipment_id: Joi.string().allow(""),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static InvalidateShipmentCacheResponse() {
    return Joi.object({
      response: Joi.array().items(
        OrderModel.InvalidateShipmentCacheNestedResponse()
      ),
    });
  }

  static ErrorResponse1() {
    return Joi.object({
      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      item_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),
    });
  }

  static StoreReassignResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static Entities() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_shipment_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),
    });
  }

  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(OrderModel.AnnouncementResponse()),
    });
  }

  static BaseResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

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
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
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
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
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
      line_number: Joi.number(),

      quantity: Joi.number(),

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

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      meta: Joi.any(),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static StatuesResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsResponse()),
    });
  }

  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesResponse()),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),
    });
  }

  static AffiliateConfig() {
    return Joi.object({
      app: OrderModel.AffiliateAppConfig(),

      inventory: OrderModel.AffiliateInventoryConfig(),
    });
  }

  static Affiliate() {
    return Joi.object({
      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      source: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      quantity: Joi.number().required(),

      amount_paid: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      store_id: Joi.number().required(),

      discount: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      affiliate_meta: Joi.any().required(),

      hsn_code_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      company_id: Joi.number().required(),

      avl_qty: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static OrderInfo() {
    return Joi.object({
      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      shipment: OrderModel.ShipmentData(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      user: OrderModel.UserData().required(),

      coupon: Joi.string().allow("").allow(null),

      items: Joi.any().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      order_value: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_config: OrderModel.OrderConfig().required(),

      order_info: OrderModel.OrderInfo().required(),

      affiliate_id: Joi.string().allow("").required(),
    });
  }

  static CreateOrderResponse() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static DispatchManifest() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      phone_number: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      meta: OrderModel.Meta().required(),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderStatusResult() {
    return Joi.object({
      result: Joi.array().items(OrderModel.OrderStatusData()),

      success: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BillingInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      house_no: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      state_code: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()).required(),

      tax_exempt: Joi.boolean().required(),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      tax: OrderModel.Tax().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      quantity: Joi.number(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      external_shipment_id: Joi.number(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      country_code: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      state_code: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      billing_info: OrderModel.BillingInfo().required(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      tax_info: OrderModel.TaxInfo(),

      external_creation_date: Joi.string().allow(""),

      application_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      currency_info: Joi.any().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      info: Joi.any(),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UploadConsent() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),

      consent_url: Joi.string().allow("").required(),
    });
  }

  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }

  static ResponseDetail() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderStatus() {
    return Joi.object({
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
