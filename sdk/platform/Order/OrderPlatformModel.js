const Joi = require("joi");

class OrderModel {
  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      price_marked: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),
    });
  }

  static BagUnit() {
    return Joi.object({
      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      status: Joi.any().required(),

      bag_id: Joi.number().required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      application: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      id: Joi.string().allow("").required(),

      channel: Joi.any(),

      shipment_id: Joi.string().allow(""),

      fulfilling_centre: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_mode_info: OrderModel.PaymentModeInfo(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_date: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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

  static ShipmentMeta() {
    return Joi.object({
      dp_sort_key: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      ewaybill_info: Joi.any().allow(null),

      packaging_name: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      external: Joi.any(),

      due_date: Joi.string().allow(""),

      return_details: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      shipment_volumetric_weight: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      bag_weight: Joi.any(),

      marketplace_store_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      shipment_weight: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      return_store_node: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      b2c_buyer_details: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      awb_number: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      po_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      order_item_id: Joi.string().allow(""),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      app_state_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      bsh_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      state_type: Joi.string().allow(""),

      store_id: Joi.number(),

      status: Joi.string().allow("").required(),

      reasons: Joi.array().items(Joi.any()),

      bag_id: Joi.number(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      cashback_applied: Joi.number().required(),

      total_units: Joi.number().required(),

      cod_charges: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      gst_tag: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_effective: Joi.number().required(),

      cashback: Joi.number().required(),

      value_of_good: Joi.number().required(),

      refund_credit: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      coupon_value: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      delivery_partner_id: Joi.number(),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      article: OrderModel.OrderBagArticle(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      brand: OrderModel.OrderBrandName(),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      gst_details: OrderModel.BagGST(),

      entity_type: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      display_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_status: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      order: OrderModel.OrderDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      payment_methods: Joi.any(),

      coupon: Joi.any(),

      shipment_id: Joi.string().allow("").required(),

      invoice_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      prices: OrderModel.Prices(),

      user_agent: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      fulfilment_priority: Joi.number(),

      priority_text: Joi.string().allow("").allow(null),

      ordering_store: OrderModel.OrderingStoreDetails(),

      total_items: Joi.number(),

      lock_status: Joi.boolean(),

      journey_type: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      invoice: OrderModel.InvoiceInfo(),

      operational_status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow("").allow(null),

      platform_logo: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      gst_details: OrderModel.GSTDetailsData(),

      enable_dp_tracking: Joi.boolean(),

      payments: OrderModel.ShipmentPayments(),

      forward_shipment_id: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      total_bags: Joi.number(),

      meta: OrderModel.Meta(),

      shipment_quantity: Joi.number(),

      status: OrderModel.ShipmentStatusData(),

      bags: Joi.array().items(OrderModel.OrderBags()),
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
      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      employee_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      ordering_store: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),
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
      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      total_items: Joi.number(),
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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),
    });
  }

  static Options() {
    return Joi.object({
      value: Joi.number(),

      text: Joi.string().allow(""),
    });
  }

  static MetricsCount() {
    return Joi.object({
      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),

      text: Joi.string().allow("").required(),

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
      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_requested_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_details: Joi.any(),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

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
      data: Joi.any(),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

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
      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      successful: Joi.number(),

      excel_url: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      store_id: Joi.number(),

      processing: Joi.number(),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      total: Joi.number(),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      store_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      error: Joi.string().allow(""),
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
      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

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
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

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

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      product_return_config: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      pincode: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      longitude: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      address2: Joi.string().allow(""),

      location_type: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      alohomora_user_id: Joi.number(),

      brand_id: Joi.any(),

      company_id: Joi.number().required(),

      latitude: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      store_active_from: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      updated_at: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      order_integration_id: Joi.string().allow(""),

      store_address_json: OrderModel.StoreAddress(),

      is_active: Joi.boolean(),

      is_enabled_for_recon: Joi.boolean(),

      longitude: Joi.number().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      a_set: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      size: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      identifiers: OrderModel.Identifier().required(),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      start_date: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      company: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      department_id: Joi.number(),

      item_id: Joi.number().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      name: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      brand: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      can_cancel: Joi.boolean(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      igst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      no_of_bags_order: Joi.number(),

      ordering_store: OrderModel.Store(),

      bag_update_time: Joi.number(),

      restore_promos: Joi.any(),

      b_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      reasons: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      article: OrderModel.Article().required(),

      display_name: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      operational_status: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      quantity: Joi.number(),

      qc_required: Joi.any(),

      item: OrderModel.Item().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      seller_identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      applied_promos: Joi.array().items(Joi.any()),

      b_type: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      parent_promo_bags: Joi.any(),

      bag_status_history: OrderModel.BagStatusHistory(),

      original_bag_list: Joi.array().items(Joi.number()),

      dates: OrderModel.Dates(),

      meta: OrderModel.BagMeta(),

      order_integration_id: Joi.string().allow("").allow(null),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      current_status: OrderModel.BagStatusHistory().required(),
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

      item_total: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

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
      status: Joi.number(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      item_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_id: Joi.string().allow("").allow(null),
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

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

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

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      title: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      created_at: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),

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

  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
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

      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),
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

      store_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      price_marked: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      unit_price: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      sku: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      phone: Joi.number().required(),

      mobile: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      coupon: Joi.string().allow("").allow(null),

      items: Joi.any().required(),

      order_value: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      affiliate_order_id: Joi.string().allow(""),

      shipment: OrderModel.ShipmentData(),

      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_config: OrderModel.OrderConfig().required(),

      affiliate_id: Joi.string().allow("").required(),

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
      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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
      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static Meta1() {
    return Joi.object({
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),
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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      shipping_type: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      pincode: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      priority: Joi.number(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

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

  static BillingInfo() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any(),

      meta: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      config: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
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
      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

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
      is_inserted: Joi.boolean(),

      is_upserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
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

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
