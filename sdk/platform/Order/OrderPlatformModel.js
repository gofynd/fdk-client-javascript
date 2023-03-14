const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      department_id: Joi.number(),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      code: Joi.string().allow(""),

      can_return: Joi.boolean(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      discount: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),

      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      gst: OrderModel.GSTDetailsData(),

      can_cancel: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      status: Joi.any().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),

      channel: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      created_at: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_bags_count: Joi.number().required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_centre: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      shipment_created_at: Joi.number().required(),

      prices: OrderModel.Prices(),

      sla: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      page: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      id: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),
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

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      coupon_value: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      amount_paid: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      tax_collected_at_source: Joi.number(),

      cod_charges: Joi.number().required(),

      gst_fee: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      total_units: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      pm_price_split: Joi.any().required(),

      amount_paid_roundoff: Joi.number(),

      refund_credit: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),

      id: Joi.number().required(),

      modified_on: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      current_status: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      line_number: Joi.number(),

      item: OrderModel.PlatformItem(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      article: OrderModel.OrderBagArticle(),

      identifier: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      can_return: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      display_name: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      delivery_awb_number: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      reasons: Joi.array().items(Joi.any()),

      state_id: Joi.number().required(),

      forward: Joi.boolean(),

      bag_state_mapper: OrderModel.BagStateMapper().required(),

      updated_at: Joi.string().allow(""),

      bsh_id: Joi.number().required(),

      app_display_name: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.number()),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      status_progress: Joi.number().required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      refund_details: Joi.any(),

      go_green: Joi.boolean(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      email_id: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow("").required(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      forward_tracking_list: Joi.array().items(Joi.any()),

      is_fynd_coupon: Joi.boolean().required(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      is_packaging_order: Joi.boolean().required(),

      priority_text: Joi.string().allow(""),

      is_invoiced: Joi.boolean().required(),

      delivery_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      enable_tracking: Joi.boolean(),

      replacement_details: Joi.string().allow(""),

      is_not_fynd_source: Joi.boolean().required(),

      is_pdsr: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      fyndstore_emp: Joi.any().required(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      kirana_store_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow("").required(),

      user_info: Joi.any(),

      company: Joi.any().required(),

      invoice: Joi.any().required(),

      can_break: Joi.string().allow("").required(),

      refund_text: Joi.string().allow(""),

      total_bags: Joi.number(),

      platform_logo: Joi.boolean().required(),

      enable_dp_tracking: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      due_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      status: OrderModel.ShipmentStatusData(),

      user_id: Joi.string().allow("").required(),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      current_shipment_status: Joi.any().required(),

      shipment_id: Joi.string().allow("").required(),

      pay_button: Joi.string().allow(""),

      coupon: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      items: Joi.array().items(Joi.any()).required(),

      shipment_quantity: Joi.number(),

      ordering_store: Joi.any().required(),

      lock_status: Joi.string().allow("").required(),

      secured_delivery_flag: Joi.string().allow(""),

      can_return: Joi.boolean(),

      bank_data: Joi.any(),

      gst_details: OrderModel.GSTDetailsData(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_status: Joi.string().allow(""),

      escalation: Joi.any(),

      is_fynd_store: Joi.string().allow(""),

      delivery_status: Joi.array().items(Joi.any()).required(),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      order_status: Joi.any().required(),

      packaging_type: Joi.string().allow(""),

      total_items: Joi.number(),

      mid: Joi.string().allow(""),

      forward_order_status: Joi.array().items(Joi.any()),

      dp_details: OrderModel.DPDetailsData(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      beneficiary_details: Joi.boolean(),

      order_created_time: Joi.string().allow(""),
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
      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      total_bags: Joi.number(),

      platform_logo: Joi.string().allow(""),

      enable_dp_tracking: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      status: OrderModel.ShipmentStatusData(),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      coupon: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      shipment_quantity: Joi.number(),

      gst_details: OrderModel.GSTDetailsData(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_status: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      packaging_type: Joi.string().allow(""),

      total_items: Joi.number(),

      dp_details: OrderModel.DPDetailsData(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),

      custom_meta: Joi.array().items(Joi.any()),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      order_value: Joi.number(),

      meta: Joi.any(),

      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

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

      text: Joi.string().allow("").required(),

      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),
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

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      meta: Joi.any(),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      report_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),
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

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
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

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      label: Joi.any(),
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
      namespace: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      excel_url: Joi.string().allow(""),

      failed: Joi.number(),

      store_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      successful: Joi.number(),

      user_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      status: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      total: Joi.number(),

      id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      processing: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      store_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

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
      lane: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),

      dp_name: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      sales_channel_name: Joi.string().allow(""),

      stores: Joi.string().allow(""),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      company_id: Joi.number(),

      created_at: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      filters: OrderModel.ManifestFilter(),

      created_by: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static ManifestPage() {
    return Joi.object({
      total: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.string().allow(""),

      size: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static GeneratedManifestResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.GeneratedManifestItem()),

      page: OrderModel.ManifestPage(),
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
      filters: OrderModel.ManifestFilter(),

      total_shipment_prices_count: OrderModel.ManifestDetailTotalShipmentPricesCount(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      company_id: Joi.number(),

      user_id: Joi.number(),

      created_at: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      filters: OrderModel.ManifestFilter(),

      meta: OrderModel.ManifestDetailMeta(),

      id: Joi.number(),

      created_by: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static ManifestDetailItem() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      order_id: Joi.string().allow(""),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      manifest_details: Joi.array().items(OrderModel.ManifestDetail()),

      additional_shipment_count: Joi.number(),

      items: Joi.array().items(OrderModel.ManifestDetailItem()),

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
      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),
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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      success: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      l3_category_name: Joi.string().allow(""),

      meta: Joi.any(),

      l1_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      department_id: Joi.number(),

      brand_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_cancel: Joi.boolean(),

      gender: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      last_updated_at: Joi.string().allow(""),

      can_return: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      l2_category_id: Joi.number(),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number().required(),

      slug_key: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

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
      loyalty_discount: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      size_level_total_qty: Joi.number().allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),

      width: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      return_config: OrderModel.ReturnConfig(),

      weight: OrderModel.Weight(),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      size: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      identifiers: OrderModel.Identifier().required(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      code: Joi.string().allow(""),

      child_details: Joi.any().allow(null),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_qr_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      lock_data: OrderModel.LockData(),

      packaging_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      formatted: OrderModel.Formatted(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      external: Joi.any(),

      po_number: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      bag_weight: Joi.any(),

      marketplace_store_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      return_store_node: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_details: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      assign_dp_from_sb: Joi.boolean(),

      shipment_volumetric_weight: Joi.number(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      debug_info: OrderModel.DebugInfo(),

      awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      dp_name: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),
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
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static Store() {
    return Joi.object({
      store_address_json: OrderModel.StoreAddress(),

      parent_store_id: Joi.number(),

      packaging_material_count: Joi.number(),

      created_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      address2: Joi.string().allow(""),

      location_type: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      brand_id: Joi.any(),

      alohomora_user_id: Joi.number(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      code: Joi.string().allow(""),

      order_integration_id: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),

      logo: Joi.string().allow(""),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      is_default_hsn_code: Joi.boolean(),

      hsn_code_id: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      current_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      applied_promos: Joi.array().items(Joi.any()),

      line_number: Joi.number(),

      item: OrderModel.Item().required(),

      meta: OrderModel.BagMeta(),

      no_of_bags_order: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      bag_status_history: OrderModel.BagStatusHistory(),

      quantity: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      reasons: Joi.array().items(Joi.any()),

      article_details: OrderModel.ArticleDetails(),

      restore_promos: Joi.any(),

      prices: OrderModel.Prices().required(),

      article: OrderModel.Article().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      journey_type: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),

      qc_required: Joi.any(),

      b_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_id: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      order_integration_id: Joi.string().allow("").allow(null),

      brand: OrderModel.Brand().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      operational_status: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      restore_coupon: Joi.boolean(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      b_id: Joi.number().required(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      error: Joi.string().allow("").required(),
    });
  }

  static Page1() {
    return Joi.object({
      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
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

      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),
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
      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),
    });
  }

  static StoreReassignResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static Entities() {
    return Joi.object({
      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      affiliate_shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      is_shipment_locked: Joi.boolean(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      check_response: Joi.array().items(OrderModel.CheckResponse()),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),
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
      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      final_state: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
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

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),
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
      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
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
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
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
      amount_paid: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      delivery_charge: Joi.number().required(),

      quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      avl_qty: Joi.number().required(),

      unit_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      identifier: Joi.any().required(),

      hsn_code_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      company_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),
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
      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      to_pincode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      shipping_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      user: OrderModel.UserData().required(),

      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_config: OrderModel.OrderConfig().required(),

      order_info: OrderModel.OrderInfo().required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

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

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      createdat: Joi.string().allow("").required(),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),
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

      id: Joi.number().required(),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

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
      qc_required: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
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
      country_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      title: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      slot: Joi.array().items(Joi.any()),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      title: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_creation_date: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      payment_info: OrderModel.PaymentInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      external_order_id: Joi.string().allow(""),

      billing_info: OrderModel.BillingInfo().required(),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      meta: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

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
      message: Joi.array().items(Joi.string().allow("")),

      success: Joi.boolean(),
    });
  }

  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderStatus() {
    return Joi.object({
      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
