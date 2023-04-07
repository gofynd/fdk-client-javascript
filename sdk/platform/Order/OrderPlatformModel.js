const Joi = require("joi");

class OrderModel {
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

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      tax_collected_at_source: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      l3_category: Joi.number(),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      id: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      status: Joi.any().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      user: OrderModel.UserDataInfo(),

      channel: Joi.any(),

      payment_methods: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_created_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_shipments_in_order: Joi.number().required(),

      prices: OrderModel.Prices(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_bags_count: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      sla: Joi.any(),

      application: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      id: Joi.string().allow("").required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      fynd_credits: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_fee: Joi.number().required(),

      discount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cashback: Joi.number().required(),

      value_of_good: Joi.number().required(),

      coupon_value: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      item_name: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      total_units: Joi.number().required(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),
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

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static OrderBags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      current_status: OrderModel.CurrentStatus(),

      item: OrderModel.PlatformItem(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_cancel: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      prices: OrderModel.Prices(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
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
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_name: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      packaging_name: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      weight: Joi.number().required(),

      b2c_buyer_details: Joi.any().allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      bag_weight: Joi.any(),

      return_store_node: Joi.number(),

      external: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      formatted: OrderModel.Formatted(),

      debug_info: OrderModel.DebugInfo(),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      lock_data: OrderModel.LockData(),

      ewaybill_info: Joi.any().allow(null),

      same_store_available: Joi.boolean().required(),

      shipment_weight: Joi.number(),

      return_details: Joi.any(),

      po_number: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      awb_number: Joi.string().allow(""),

      dp_options: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      due_date: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      channel_shipment_id: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      quantity: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      created_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      bsh_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      order: OrderModel.OrderDetailsData(),

      meta: OrderModel.Meta(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      forward_shipment_id: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      coupon: Joi.any(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      payment_mode: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      invoice_id: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      custom_meta: Joi.array().items(Joi.any()),

      affiliate_details: OrderModel.AffiliateDetails(),

      billing_details: OrderModel.UserDetailsData(),

      lock_status: Joi.boolean(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      total_items: Joi.number(),

      total_bags: Joi.number(),

      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      shipment_status: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      fulfilment_priority: Joi.number(),

      delivery_slot: Joi.any(),

      invoice: OrderModel.InvoiceInfo(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      payment_methods: Joi.any(),

      status: OrderModel.ShipmentStatusData(),

      journey_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      platform_logo: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      fulfilling_store: OrderModel.FulfillingStore(),
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
      order_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      order_platform: Joi.string().allow(""),

      cart_id: Joi.number(),

      employee_id: Joi.number(),

      extra_meta: Joi.any(),

      customer_note: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),
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

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

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

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      meta: Joi.any(),

      order_id: Joi.string().allow(""),

      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),
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

      value: Joi.number().required(),

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
      updated_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

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
      report_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),
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
      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      label: Joi.any(),

      data: Joi.any(),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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
      content_type: Joi.string().allow(""),

      size: Joi.number(),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      operation: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      method: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      failed: Joi.number(),

      successful: Joi.number(),

      store_name: Joi.string().allow(""),

      company_id: Joi.number(),

      batch_id: Joi.string().allow(""),

      total: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      processing: Joi.number(),

      store_id: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      failed_shipments: Joi.array().items(Joi.any()),

      file_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

      error: Joi.string().allow(""),
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
      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      status: Joi.boolean(),

      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
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

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      size: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      branch_url: Joi.string().allow("").allow(null),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      last_updated_at: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      item_id: Joi.number().required(),

      department_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l1_category_id: Joi.number(),

      l2_category_id: Joi.number(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),
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
      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      packaging_material_count: Joi.number(),

      alohomora_user_id: Joi.number(),

      meta: OrderModel.StoreMeta().required(),

      contact_person: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      phone: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      s_id: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      is_active: Joi.boolean(),

      store_email: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      parent_store_id: Joi.number(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      latitude: Joi.number().required(),

      code: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      company: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
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
      a_set: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      esp_modified: Joi.any(),

      return_config: OrderModel.ReturnConfig(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      meta: OrderModel.BagMeta(),

      original_bag_list: Joi.array().items(Joi.number()),

      b_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      restore_promos: Joi.any(),

      entity_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      b_type: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      item: OrderModel.Item().required(),

      ordering_store: OrderModel.Store(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      no_of_bags_order: Joi.number(),

      bag_update_time: Joi.number(),

      restore_coupon: Joi.boolean(),

      brand: OrderModel.Brand().required(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      article_details: OrderModel.ArticleDetails(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      quantity: Joi.number(),

      bag_status_history: OrderModel.BagStatusHistory(),

      line_number: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      journey_type: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      operational_status: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      current_operational_status: OrderModel.BagStatusHistory().required(),
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

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      page_type: Joi.string().allow("").required(),
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
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

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
      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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
      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),
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
      bags: Joi.array().items(OrderModel.Bags()),

      is_bag_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      original_filter: OrderModel.OriginalFilter(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),

      check_response: Joi.array().items(OrderModel.CheckResponse()),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      id: Joi.number().required(),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      from_datetime: Joi.string().allow(""),
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
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
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

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),

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

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      unit_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      quantity: Joi.number().required(),

      transfer_price: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      price_effective: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      discount: Joi.number().required(),

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      coupon: Joi.string().allow("").allow(null),

      shipment: OrderModel.ShipmentData(),

      items: Joi.any().required(),

      delivery_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      affiliate_order_id: Joi.string().allow(""),

      user: OrderModel.UserData().required(),

      order_value: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      discount: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),
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

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

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
      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      token: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),
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
      article_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
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
      message: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()).required(),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
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
      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

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
      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),
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

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),
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
      state_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      floor_no: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      first_name: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),
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
      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      transaction_data: Joi.any(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
      state_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      meta: Joi.any(),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      currency_info: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),

      external_creation_date: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      stack_trace: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

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
      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),
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

      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),
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
      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
