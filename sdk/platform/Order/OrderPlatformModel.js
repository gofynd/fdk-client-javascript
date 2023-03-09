const Joi = require("joi");

class OrderModel {
  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      price_effective: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_return: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),

      can_cancel: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      identifier: Joi.string().allow("").required(),

      line_number: Joi.number().required(),

      bag_id: Joi.number().required(),

      group_id: Joi.string().allow(""),

      applied_promos: Joi.any(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number().required(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_bags_count: Joi.number().required(),

      sla: Joi.any(),

      id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      channel: Joi.any(),

      user: OrderModel.UserDataInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_status: OrderModel.ShipmentStatus(),

      created_at: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      shipment_created_at: Joi.number().required(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.BagUnit()),
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
      items: Joi.array().items(OrderModel.ShipmentItem()),

      page: Joi.any(),

      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bsh_id: Joi.number().required(),

      store_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper().required(),

      shipment_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      forward: Joi.boolean(),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number().required(),

      delivery_partner_id: Joi.number().allow(null),

      bag_id: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      app_display_name: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      display_name: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      added_to_fynd_cash: Joi.boolean().required(),

      discount: Joi.number().required(),

      total_units: Joi.number().required(),

      cashback: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      amount_paid: Joi.number().required(),

      transfer_price: Joi.number().required(),

      gst_fee: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      coupon_value: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      pm_price_split: Joi.any().required(),

      fynd_credits: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.number().required(),

      id: Joi.number().required(),

      modified_on: Joi.number(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      contact_person: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),
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
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static OrderBags() {
    return Joi.object({
      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      current_status: Joi.string().allow(""),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      entity_type: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      prices: OrderModel.Prices(),

      bag_configs: OrderModel.BagConfigs(),

      brand: OrderModel.OrderBrandName(),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      article: OrderModel.OrderBagArticle(),

      line_number: Joi.number(),

      bag_id: Joi.number().required(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      bank_data: Joi.any(),

      can_return: Joi.boolean(),

      order: OrderModel.OrderDetailsData(),

      packaging_type: Joi.string().allow(""),

      is_fynd_store: Joi.string().allow(""),

      order_status: Joi.any().required(),

      beneficiary_details: Joi.boolean(),

      status: OrderModel.ShipmentStatusData(),

      can_cancel: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      credit_note_id: Joi.string().allow("").required(),

      lock_status: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      fyndstore_emp: Joi.any().required(),

      shipment_status: Joi.string().allow(""),

      replacement_details: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      company: Joi.any().required(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      items: Joi.array().items(Joi.any()).required(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      billing_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      is_not_fynd_source: Joi.boolean().required(),

      payments: OrderModel.ShipmentPayments(),

      is_fynd_coupon: Joi.boolean().required(),

      coupon: Joi.any(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      forward_order_status: Joi.array().items(Joi.any()),

      affiliate_shipment_id: Joi.string().allow("").required(),

      priority_text: Joi.string().allow(""),

      email_id: Joi.string().allow("").required(),

      tracking_url: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      user_info: Joi.any(),

      platform_logo: Joi.boolean().required(),

      ordering_store: Joi.any().required(),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      total_items: Joi.number(),

      refund_text: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      secured_delivery_flag: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      invoice: Joi.any().required(),

      refund_details: Joi.any(),

      dp_details: OrderModel.DPDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      go_green: Joi.boolean(),

      can_break: Joi.string().allow("").required(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      is_invoiced: Joi.boolean().required(),

      enable_dp_tracking: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow("").required(),

      escalation: Joi.any(),

      shipment_quantity: Joi.number(),

      current_shipment_status: Joi.any().required(),

      operational_status: Joi.string().allow(""),

      total_bags: Joi.number(),

      kirana_store_id: Joi.string().allow(""),

      forward_tracking_list: Joi.array().items(Joi.any()),

      mid: Joi.string().allow(""),

      is_pdsr: Joi.string().allow(""),

      is_packaging_order: Joi.boolean().required(),

      order_created_time: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      pay_button: Joi.string().allow(""),

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
      order: OrderModel.OrderDetailsData(),

      packaging_type: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      payment_mode: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      shipment_status: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      bags: Joi.array().items(OrderModel.OrderBags()),

      billing_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      priority_text: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      platform_logo: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      total_items: Joi.number(),

      journey_type: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      enable_dp_tracking: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow("").required(),

      shipment_quantity: Joi.number(),

      operational_status: Joi.string().allow(""),

      total_bags: Joi.number(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      custom_meta: Joi.array().items(Joi.any()),

      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      meta: Joi.any(),
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
      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      total_count: Joi.number(),

      message: Joi.string().allow(""),

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
      options: Joi.array().items(OrderModel.Options()),

      text: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

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
      updated_time: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      meta: Joi.any(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),
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
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),
    });
  }

  static BulkInvoicingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static BulkInvoiceLabelResponse() {
    return Joi.object({
      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      data: Joi.any(),

      store_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      label: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      invoice: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),
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
      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      namespace: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      successful: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      store_id: Joi.number(),

      processing: Joi.number(),

      company_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),
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
      store_name: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      stores: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      sales_channel_name: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      is_active: Joi.boolean(),

      company_id: Joi.number(),

      filters: OrderModel.ManifestFilter(),

      status: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static ManifestPage() {
    return Joi.object({
      size: Joi.string().allow(""),

      current: Joi.string().allow(""),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),
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
      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      item_qty: Joi.number(),
    });
  }

  static ManifestDetailTotalShipmentPricesCount() {
    return Joi.object({
      total_price: Joi.number(),

      shipment_count: Joi.number(),
    });
  }

  static ManifestDetailMeta() {
    return Joi.object({
      total_shipment_prices_count: OrderModel.ManifestDetailTotalShipmentPricesCount(),

      filters: OrderModel.ManifestFilter(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      user_id: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      filters: OrderModel.ManifestFilter(),

      status: Joi.string().allow(""),

      id: Joi.number(),

      created_by: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      uid: Joi.number(),

      meta: OrderModel.ManifestDetailMeta(),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ManifestDetailItem()),

      additional_shipment_count: Joi.number(),

      manifest_details: Joi.array().items(OrderModel.ManifestDetail()),

      page: OrderModel.ManifestPage(),
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
      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
    });
  }

  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.Reason()),

      success: Joi.boolean(),
    });
  }

  static BulkActionPayload() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    });
  }

  static BulkActionResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      can_return: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_cancel: Joi.boolean(),

      branch_url: Joi.string().allow("").allow(null),

      attributes: OrderModel.Attributes().required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      item_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      size: Joi.string().allow("").required(),

      department_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

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

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      documents: OrderModel.StoreDocuments(),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      address_type: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      latitude: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      parent_store_id: Joi.number(),

      alohomora_user_id: Joi.number(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      phone: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      name: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      store_address_json: OrderModel.StoreAddress(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      location_type: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      store_active_from: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      brand_id: Joi.any(),

      order_integration_id: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      modified_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      return_config: OrderModel.ReturnConfig(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      credit_note_url: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_date: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      awb_number: Joi.string().allow(""),

      return_store_node: Joi.number(),

      formatted: OrderModel.Formatted(),

      bag_weight: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_details: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      po_number: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_options: Joi.any(),

      external: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      shipment_volumetric_weight: Joi.number(),

      packaging_name: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      dp_sort_key: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      marketplace_store_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      assign_dp_from_sb: Joi.boolean(),

      b2c_buyer_details: Joi.any().allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      status: OrderModel.BagReturnableCancelableStatus().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      quantity: Joi.number(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      restore_promos: Joi.any(),

      item: OrderModel.Item().required(),

      b_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      entity_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      prices: OrderModel.Prices().required(),

      ordering_store: OrderModel.Store(),

      article_details: OrderModel.ArticleDetails(),

      journey_type: Joi.string().allow("").required(),

      brand: OrderModel.Brand().required(),

      qc_required: Joi.any(),

      identifier: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      parent_promo_bags: Joi.any(),

      restore_coupon: Joi.boolean(),

      applied_promos: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      article: OrderModel.Article().required(),

      meta: OrderModel.BagMeta(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_id: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      b_id: Joi.number().required(),

      line_number: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      no_of_bags_order: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),
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
      size: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

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
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      shipment_id: Joi.string().allow(""),
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
      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),
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

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      bags: Joi.array().items(OrderModel.Bags()),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      check_response: Joi.array().items(OrderModel.CheckResponse()),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_name: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      to_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

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

  static ShipmentsResponse() {
    return Joi.object({
      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),
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

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      state: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      identifier: Joi.any().required(),

      price_effective: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      transfer_price: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      unit_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      discount: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      store_id: Joi.number().required(),

      quantity: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      affiliate_meta: Joi.any().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      payment: Joi.any(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      shipment: OrderModel.ShipmentData(),

      payment_mode: Joi.string().allow("").required(),

      coupon: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow(""),

      order_value: Joi.number().required(),

      items: Joi.any().required(),

      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      billing_address: OrderModel.OrderUser().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
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
      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      description: Joi.string().allow(""),
    });
  }

  static AffiliateConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryConfig(),

      app: OrderModel.AffiliateAppConfig(),
    });
  }

  static Affiliate() {
    return Joi.object({
      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderModel.OrderInfo().required(),

      order_config: OrderModel.OrderConfig().required(),

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
      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      ticket_url: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      phone_number: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      message: Joi.string().allow("").required(),
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
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.Meta().required(),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),
    });
  }

  static OrderStatusResult() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      floor_no: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      primary_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()).required(),

      tax_exempt: Joi.boolean().required(),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.number(),

      meta: Joi.any(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      floor_no: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipping_info: OrderModel.ShippingInfo().required(),

      application_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      currency_info: Joi.any().required(),

      meta: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      info: Joi.any(),

      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      location_reassignment: Joi.boolean(),

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),
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

      is_inserted: Joi.boolean(),

      is_upserted: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UploadConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),

      manifest_id: Joi.string().allow("").required(),
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
      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
