const Joi = require("joi");

class OrderModel {
  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      refund_credit: Joi.number(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      name: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      department_id: Joi.number(),

      id: Joi.number(),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      total_shipment_bags: Joi.number().required(),

      item_quantity: Joi.number().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),
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
      avis_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_created_at: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      channel: Joi.any(),

      user: OrderModel.UserDataInfo(),

      payment_methods: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      fulfilling_centre: Joi.string().allow("").required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
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

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      ordering_store_id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      refund_credit: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      amount_paid: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_value: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      cashback: Joi.number().required(),

      total_units: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),
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
      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      area: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      current_status_id: Joi.number().required(),

      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      bag_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      financial_breakup: OrderModel.FinancialBreakup(),

      bag_id: Joi.number().required(),

      article: OrderModel.OrderBagArticle(),

      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      display_name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      entity_type: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      item: OrderModel.PlatformItem(),

      current_status: OrderModel.CurrentStatus(),

      gst_details: OrderModel.BagGST(),

      can_return: Joi.boolean(),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      is_default: Joi.boolean(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      store_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      bsh_id: Joi.number(),

      state_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      bag_id: Joi.number(),

      created_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      dp_options: Joi.any(),

      shipment_weight: Joi.number(),

      same_store_available: Joi.boolean().required(),

      ewaybill_info: Joi.any().allow(null),

      external: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      order_type: Joi.string().allow("").allow(null),

      dp_name: Joi.string().allow(""),

      return_store_node: Joi.number(),

      shipment_volumetric_weight: Joi.number(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      weight: Joi.number().required(),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      packaging_name: Joi.string().allow(""),

      return_details: Joi.any(),

      bag_weight: Joi.any(),

      po_number: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      quantity: Joi.number(),

      employee_discount: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      company_affiliate_tag: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      id: Joi.number(),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      status: OrderModel.ShipmentStatusData(),

      billing_details: OrderModel.UserDetailsData(),

      order: OrderModel.OrderDetailsData(),

      forward_shipment_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      enable_dp_tracking: Joi.boolean(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      operational_status: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      invoice: OrderModel.InvoiceInfo(),

      payments: OrderModel.ShipmentPayments(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      delivery_slot: Joi.any(),

      meta: OrderModel.Meta(),

      shipment_id: Joi.string().allow("").required(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      packaging_type: Joi.string().allow(""),

      payment_methods: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow("").allow(null),

      priority_text: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number(),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      payment_mode: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      total_items: Joi.number(),

      invoice_id: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      picked_date: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      coupon: Joi.any(),

      dp_details: OrderModel.DPDetailsData(),

      lock_status: Joi.boolean(),

      gst_details: OrderModel.GSTDetailsData(),

      platform_logo: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static OrderMeta() {
    return Joi.object({
      customer_note: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      staff: Joi.any(),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      extra_meta: Joi.any(),

      files: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      total_items: Joi.number(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
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

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

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
      text: Joi.string().allow("").required(),

      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),

      key: Joi.string().allow("").required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),
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
      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

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
      label: Joi.any(),

      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      company_id: Joi.string().allow(""),

      invoice: Joi.any(),

      data: Joi.any(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string().allow(""),
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

      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      status: Joi.string().allow(""),

      successful: Joi.number(),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      store_id: Joi.number(),

      excel_url: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      total: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),
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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),
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

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      documents: OrderModel.StoreDocuments(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static Store() {
    return Joi.object({
      store_email: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      city: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      phone: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      store_active_from: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      name: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      brand_id: Joi.any(),

      pincode: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      alohomora_user_id: Joi.number(),

      location_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      fulfillment_channel: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      is_active: Joi.boolean(),

      code: Joi.string().allow(""),

      s_id: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      company_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      is_set: Joi.boolean(),

      esp_modified: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      return_config: OrderModel.ReturnConfig(),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      child_details: Joi.any().allow(null),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      pickup_location: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      invoice_prefix: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      company: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      brand_id: Joi.number().required(),

      last_updated_at: Joi.string().allow(""),

      department_id: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      l2_category_id: Joi.number(),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      status: OrderModel.BagReturnableCancelableStatus().required(),

      b_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      no_of_bags_order: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      operational_status: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      article: OrderModel.Article().required(),

      meta: OrderModel.BagMeta(),

      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      qc_required: Joi.any(),

      original_bag_list: Joi.array().items(Joi.number()),

      restore_coupon: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      bag_status_history: OrderModel.BagStatusHistory(),

      prices: OrderModel.Prices().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      restore_promos: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      display_name: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      dates: OrderModel.Dates(),

      reasons: Joi.array().items(Joi.any()),

      article_details: OrderModel.ArticleDetails(),

      seller_identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),

      b_id: Joi.number().required(),

      brand: OrderModel.Brand().required(),

      item: OrderModel.Item().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      gst_details: OrderModel.BagGSTDetails().required(),
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
      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

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
      shipment_id: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

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
      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      reason_ids: Joi.array().items(Joi.number()),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),
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
      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),
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
      platform_name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      from_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

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
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

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

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),
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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
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

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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
      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),
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
      item_size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      transfer_price: Joi.number().required(),

      store_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      unit_price: Joi.number().required(),

      quantity: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      address1: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

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
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static OrderInfo() {
    return Joi.object({
      items: Joi.any().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      discount: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      payment: Joi.any(),

      shipment: OrderModel.ShipmentData(),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      user: OrderModel.UserData().required(),

      order_priority: OrderModel.OrderPriority(),

      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),
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
      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()).required(),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),

      line_number: Joi.string().allow(""),
    });
  }

  static PostActivityHistory() {
    return Joi.object({
      data: OrderModel.PostHistoryData().required(),

      filters: Joi.array().items(OrderModel.PostHistoryFilters()).required(),
    });
  }

  static PostHistoryDict() {
    return Joi.object({
      activity_history: OrderModel.PostActivityHistory().required(),
    });
  }

  static PostShipmentHistory() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.PostHistoryDict()),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
    });
  }

  static Meta1() {
    return Joi.object({
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      id: Joi.number().required(),

      bag_list: Joi.array().items(Joi.number()),
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
      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),

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
      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),
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
      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      state_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      payment_info: OrderModel.PaymentInfo().required(),

      meta: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),

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
      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),
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
