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
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      code: Joi.string().allow(""),

      department_id: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      cashback: Joi.number(),

      coupon_value: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      cod_charges: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      price_marked: Joi.number(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      item_quantity: Joi.number().required(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      application: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_bags_count: Joi.number().required(),

      channel: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      created_at: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      sla: Joi.any(),

      shipment_created_at: Joi.number().required(),

      id: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      id: Joi.number().required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
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
      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      current_status_id: Joi.number().required(),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      state_id: Joi.number(),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      updated_at: Joi.number(),

      bag_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),
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

      item_name: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cod_charges: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      size: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      total_units: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      longitude: Joi.number(),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      quantity: Joi.number(),

      bag_id: Joi.number().required(),

      gst_details: OrderModel.BagGST(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      current_status: OrderModel.CurrentStatus(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      can_return: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      prices: OrderModel.Prices(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      forward: Joi.boolean().allow(null),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      state_id: Joi.number(),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      bsh_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      created_at: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      pay_button: Joi.string().allow(""),

      order_status: Joi.any().required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      order_created_time: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      is_packaging_order: Joi.boolean().required(),

      is_not_fynd_source: Joi.boolean().required(),

      payments: OrderModel.ShipmentPayments(),

      user_id: Joi.string().allow("").required(),

      tracking_url: Joi.string().allow("").required(),

      forward_order_status: Joi.array().items(Joi.any()),

      credit_note_id: Joi.string().allow("").required(),

      coupon: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      is_fynd_coupon: Joi.boolean().required(),

      is_invoiced: Joi.boolean().required(),

      refund_text: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      forward_tracking_list: Joi.array().items(Joi.any()),

      platform_logo: Joi.boolean().required(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      lock_status: Joi.string().allow("").required(),

      shipment_status: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      picked_date: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      secured_delivery_flag: Joi.string().allow(""),

      current_shipment_status: Joi.any().required(),

      user_agent: Joi.string().allow(""),

      email_id: Joi.string().allow("").required(),

      billing_details: OrderModel.UserDetailsData(),

      escalation: Joi.any(),

      ordering_store: Joi.any().required(),

      enable_dp_tracking: Joi.boolean(),

      can_cancel: Joi.boolean(),

      is_fynd_store: Joi.string().allow(""),

      status_progress: Joi.number().required(),

      packaging_type: Joi.string().allow(""),

      refund_details: Joi.any(),

      delivery_slot: Joi.any(),

      vertical: Joi.string().allow("").allow(null),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      can_break: Joi.string().allow("").required(),

      mid: Joi.string().allow(""),

      items: Joi.array().items(Joi.any()).required(),

      enable_tracking: Joi.boolean(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      order_type: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      is_pdsr: Joi.string().allow(""),

      invoice: Joi.any().required(),

      bank_data: Joi.any(),

      fyndstore_emp: Joi.any().required(),

      kirana_store_id: Joi.string().allow(""),

      total_items: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      beneficiary_details: Joi.boolean(),

      user_info: Joi.any(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      custom_meta: Joi.array().items(Joi.any()),

      dp_details: OrderModel.DPDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      total_bags: Joi.number(),

      company: Joi.any().required(),

      journey_type: Joi.string().allow(""),

      go_green: Joi.boolean(),

      replacement_details: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      operational_status: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      payments: OrderModel.ShipmentPayments(),

      coupon: Joi.any(),

      payment_mode: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      platform_logo: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      picked_date: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      enable_dp_tracking: Joi.boolean(),

      packaging_type: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      vertical: Joi.string().allow("").allow(null),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      total_items: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(Joi.any()),

      dp_details: OrderModel.DPDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      total_bags: Joi.number(),

      journey_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      operational_status: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      comment: Joi.string().allow(""),

      ordering_store: Joi.number(),

      mongo_cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      customer_note: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      employee_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      extra_meta: Joi.any(),
    });
  }

  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      order: OrderModel.OrderDict(),
    });
  }

  static SubLane() {
    return Joi.object({
      text: Joi.string().allow(""),

      total_items: Joi.number(),

      value: Joi.string().allow(""),

      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      total_items: Joi.number(),

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

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      meta: Joi.any(),

      order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

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
      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),

      key: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
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

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
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
      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_requested_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),
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

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      data: Joi.any(),

      invoice: Joi.any(),

      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      operation: Joi.string().allow(""),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      store_id: Joi.number(),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      store_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      successful: Joi.number(),

      id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      total: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

      data: Joi.array().items(OrderModel.bulkListingData()),
    });
  }

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Reason() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),
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
      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),
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
      length: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),
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
      raw_meta: Joi.any(),

      child_details: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      esp_modified: Joi.any(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_invoice: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      ewaybill_info: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      bag_weight: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      dp_name: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      weight: Joi.number().required(),

      awb_number: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      return_awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      return_store_node: Joi.number(),

      shipment_weight: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      external: Joi.any(),

      return_details: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_sort_key: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any(),

      debug_info: OrderModel.DebugInfo(),

      formatted: OrderModel.Formatted(),

      b2c_buyer_details: Joi.any().allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),
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

      enabled: Joi.boolean().required(),

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
      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      stage: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      ewaybill_portal_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      product_return_config: Joi.any(),

      gst_number: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      store_address_json: OrderModel.StoreAddress(),

      order_integration_id: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      is_archived: Joi.boolean(),

      alohomora_user_id: Joi.number(),

      is_active: Joi.boolean(),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      packaging_material_count: Joi.number(),

      vat_no: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      contact_person: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      store_email: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      s_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow("").allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l2_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      l1_category_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      item_id: Joi.number().required(),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      meta: Joi.any(),

      can_return: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
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
      credit_note_allowed: Joi.boolean(),

      is_virtual_invoice: Joi.boolean().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      qc_required: Joi.any(),

      order_integration_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      quantity: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      no_of_bags_order: Joi.number(),

      b_type: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      article_details: OrderModel.ArticleDetails(),

      affiliate_details: OrderModel.AffiliateDetails(),

      bag_status_history: OrderModel.BagStatusHistory(),

      b_id: Joi.number().required(),

      restore_promos: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_update_time: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      ordering_store: OrderModel.Store(),

      item: OrderModel.Item().required(),

      meta: OrderModel.BagMeta(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      dates: OrderModel.Dates(),

      restore_coupon: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      journey_type: Joi.string().allow("").required(),

      prices: OrderModel.Prices().required(),

      operational_status: Joi.string().allow(""),
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

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static GetBagsPlatformResponse() {
    return Joi.object({
      page: OrderModel.Page1().required(),

      items: Joi.array()
        .items(OrderModel.BagDetailsPlatformResponse())
        .required(),
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

      status: Joi.number(),

      shipment_id: Joi.string().allow(""),

      error: Joi.string().allow(""),
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
      store_id: Joi.number().required(),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      set_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

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
      status: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),
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
      logo_url: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),
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

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      exception: Joi.string().allow(""),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),
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
      secret: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),
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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      phone: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      address2: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
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
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
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
      avl_qty: Joi.number().required(),

      store_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      identifier: Joi.any().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      price_effective: Joi.number().required(),

      item_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      discount: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      price_marked: Joi.number().required(),

      company_id: Joi.number().required(),

      transfer_price: Joi.number().required(),

      quantity: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

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
      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

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
      cod_charges: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipment: OrderModel.ShipmentData(),

      payment_mode: Joi.string().allow("").required(),

      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      shipping_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      order_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),
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
      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

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
      ticket_id: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),
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

      payment_mode: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),
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
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta().required(),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      errors: Joi.array().items(Joi.string().allow("")),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),
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
      qc_required: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      state_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      primary_mobile_number: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static BillingInfo() {
    return Joi.object({
      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      shipment_assignment: Joi.string().allow(""),

      dp_configuration: OrderModel.DpConfiguration(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      is_upserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

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
      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
