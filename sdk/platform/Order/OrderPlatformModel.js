const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      cod_charges: Joi.number(),

      fynd_credits: Joi.number(),

      price_marked: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      id: Joi.number(),

      can_return: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),
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

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      sla: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      prices: OrderModel.Prices(),

      id: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_shipments_in_order: Joi.number().required(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      payment_methods: Joi.any(),

      created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      channel: Joi.any(),

      shipment_created_at: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

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

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      bag_id: Joi.number(),

      bsh_id: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
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
      company: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      bag_id: Joi.number(),

      store_id: Joi.number(),
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

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      refund_credit: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      total_units: Joi.number().required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      gst_tag: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      cod_charges: Joi.number().required(),

      gst_fee: Joi.number().required(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      item_name: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number().required(),

      delivery_charge: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      article: OrderModel.OrderBagArticle(),

      entity_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      item: OrderModel.PlatformItem(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      bag_id: Joi.number().required(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      vertical: Joi.string().allow("").allow(null),

      order_created_time: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      is_fynd_coupon: Joi.boolean().required(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow("").required(),

      beneficiary_details: Joi.boolean(),

      forward_order_status: Joi.array().items(Joi.any()),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      email_id: Joi.string().allow("").required(),

      dp_details: OrderModel.DPDetailsData(),

      due_date: Joi.string().allow(""),

      escalation: Joi.any(),

      is_invoiced: Joi.boolean().required(),

      is_packaging_order: Joi.boolean().required(),

      order_status: Joi.any().required(),

      invoice: Joi.any().required(),

      can_cancel: Joi.boolean(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      payment_mode: Joi.string().allow(""),

      pay_button: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      kirana_store_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      picked_date: Joi.string().allow(""),

      forward_tracking_list: Joi.array().items(Joi.any()),

      delivery_status: Joi.array().items(Joi.any()).required(),

      ordering_store: Joi.any().required(),

      refund_details: Joi.any(),

      total_bags: Joi.number(),

      bank_data: Joi.any(),

      replacement_details: Joi.string().allow(""),

      can_break: Joi.string().allow("").required(),

      platform_logo: Joi.boolean().required(),

      secured_delivery_flag: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      delivery_details: OrderModel.UserDetailsData(),

      can_return: Joi.boolean(),

      delivery_slot: Joi.any(),

      is_not_fynd_source: Joi.boolean().required(),

      enable_dp_tracking: Joi.boolean(),

      priority_text: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      status_progress: Joi.number().required(),

      refund_text: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      items: Joi.array().items(Joi.any()).required(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      billing_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      company: Joi.any().required(),

      tracking_url: Joi.string().allow("").required(),

      user_info: Joi.any(),

      enable_tracking: Joi.boolean(),

      mid: Joi.string().allow(""),

      coupon: Joi.any(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      go_green: Joi.boolean(),

      is_pdsr: Joi.string().allow(""),

      credit_note_id: Joi.string().allow("").required(),

      lock_status: Joi.string().allow("").required(),

      payments: OrderModel.ShipmentPayments(),

      status: OrderModel.ShipmentStatusData(),

      fyndstore_emp: Joi.any().required(),

      current_shipment_status: Joi.any().required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      is_fynd_store: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      staff: Joi.any(),

      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_tags: Joi.array().items(Joi.any()),

      files: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      ordering_store: Joi.number(),

      customer_note: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      comment: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      vertical: Joi.string().allow("").allow(null),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      payment_mode: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow("").required(),

      picked_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      platform_logo: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      delivery_details: OrderModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      enable_dp_tracking: Joi.boolean(),

      priority_text: Joi.string().allow("").allow(null),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      coupon: Joi.any(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      payments: OrderModel.ShipmentPayments(),

      status: OrderModel.ShipmentStatusData(),

      fulfilling_store: OrderModel.FulfillingStore(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      order: OrderModel.OrderDict(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      total_items: Joi.number(),

      value: Joi.string().allow(""),

      index: Joi.number(),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
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

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      meta: Joi.any(),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      user_info: OrderModel.UserDataInfo(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),
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

      options: Joi.array().items(OrderModel.Options()),

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
      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),

      results: Joi.array().items(OrderModel.PlatformTrack()),
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

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
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
      batch_id: Joi.string().allow("").required(),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      data: Joi.any(),

      label: Joi.any(),

      store_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),
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

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      file_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      total: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      excel_url: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful: Joi.number(),

      store_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      processing: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),
    });
  }

  static DateRange() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),
    });
  }

  static ManifestFilter() {
    return Joi.object({
      lane: Joi.string().allow(""),

      stores: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),

      sales_channel_name: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      manifest_id: Joi.string().allow(""),

      filters: OrderModel.ManifestFilter(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      created_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_by: Joi.string().allow(""),
    });
  }

  static ManifestPage() {
    return Joi.object({
      size: Joi.string().allow(""),

      current: Joi.string().allow(""),

      total: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
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

      order_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      shipment_id: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),
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
      total_shipment_prices_count: OrderModel.ManifestDetailTotalShipmentPricesCount(),

      filters: OrderModel.ManifestFilter(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      uid: Joi.number(),

      manifest_id: Joi.string().allow(""),

      filters: OrderModel.ManifestFilter(),

      user_id: Joi.number(),

      meta: OrderModel.ManifestDetailMeta(),

      id: Joi.number(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      created_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_by: Joi.string().allow(""),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      page: OrderModel.ManifestPage(),

      additional_shipment_count: Joi.number(),

      items: Joi.array().items(OrderModel.ManifestDetailItem()),

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

      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),
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
      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      length: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      a_set: Joi.any().allow(null),

      raw_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      child_details: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      esp_modified: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      company: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      pickup_location: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

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

  static StoreMeta() {
    return Joi.object({
      gst_number: Joi.string().allow(""),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      country_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      area: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      s_id: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      city: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      store_address_json: OrderModel.StoreAddress(),

      brand_id: Joi.any(),

      is_active: Joi.boolean(),

      latitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      is_archived: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      vat_no: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      parent_store_id: Joi.number(),

      phone: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      mall_area: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      item_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      branch_url: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      attributes: OrderModel.Attributes().required(),

      gender: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      can_return: Joi.boolean(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      department_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      same_store_available: Joi.boolean().required(),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      return_details: Joi.any(),

      due_date: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_name: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      debug_info: OrderModel.DebugInfo(),

      bag_weight: Joi.any(),

      lock_data: OrderModel.LockData(),

      shipment_volumetric_weight: Joi.number(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      external: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      weight: Joi.number().required(),

      awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      packaging_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      return_store_node: Joi.number(),

      shipment_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      assign_dp_from_sb: Joi.boolean(),

      return_affiliate_order_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      channel_shipment_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_status_history: OrderModel.BagStatusHistory(),

      b_id: Joi.number().required(),

      line_number: Joi.number(),

      meta: OrderModel.BagMeta(),

      article: OrderModel.Article().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      current_status: OrderModel.BagStatusHistory().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      reasons: Joi.array().items(Joi.any()),

      parent_promo_bags: Joi.any(),

      shipment_id: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      ordering_store: OrderModel.Store(),

      item: OrderModel.Item().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      quantity: Joi.number(),

      display_name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      restore_coupon: Joi.boolean(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      dates: OrderModel.Dates(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      restore_promos: Joi.any(),

      qc_required: Joi.any(),

      no_of_bags_order: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_update_time: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),
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
      current: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

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
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      affiliate_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      set_id: Joi.string().allow("").allow(null),
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
      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),
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
      affiliate_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      check_response: Joi.array().items(OrderModel.CheckResponse()),

      success: Joi.boolean(),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),
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

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),
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
      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),
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
      address2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mobile: Joi.number().required(),

      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
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
      affiliate_meta: Joi.any().required(),

      fynd_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      unit_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      item_size: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      discount: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      quantity: Joi.number().required(),

      price_effective: Joi.number().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipments: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      delivery_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      coupon: Joi.string().allow("").allow(null),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      items: Joi.any().required(),

      billing_address: OrderModel.OrderUser().required(),

      discount: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      shipment: OrderModel.ShipmentData(),

      cod_charges: Joi.number().required(),

      order_value: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      payment: Joi.any(),
    });
  }

  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      token: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),
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
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),
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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_info: OrderModel.OrderInfo().required(),

      order_config: OrderModel.OrderConfig().required(),
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

      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      bag_id: Joi.number(),
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
      order_id: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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
      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta().required(),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),
    });
  }

  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      order_details: OrderModel.OrderDetails().required(),
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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      priority: Joi.number(),

      location_id: Joi.number().required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      title: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      shipping_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      landmark: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),
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

  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

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
      location_reassignment: Joi.boolean(),

      logo_url: Joi.any(),

      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),
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

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
