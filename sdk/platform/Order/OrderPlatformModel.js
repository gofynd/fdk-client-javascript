const Joi = require("joi");

class OrderModel {
  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l3_category_name: Joi.string().allow(""),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      item_quantity: Joi.number().required(),
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
      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
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
      user: OrderModel.UserDataInfo(),

      shipment_created_at: Joi.number().required(),

      total_bags_count: Joi.number().required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_methods: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      shipment_status: OrderModel.ShipmentStatus(),

      sla: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      company: Joi.any(),

      channel: Joi.any(),

      total_shipments_in_order: Joi.number().required(),
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
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      total_units: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number().required(),

      refund_credit: Joi.number().required(),

      price_effective: Joi.number().required(),

      transfer_price: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      price_marked: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      amount_paid: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow("").required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),
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
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      latitude: Joi.number(),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      current_status_id: Joi.number().required(),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      updated_at: Joi.number(),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      quantity: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      item: OrderModel.PlatformItem(),

      identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      gst_details: OrderModel.BagGST(),

      prices: OrderModel.Prices(),

      current_status: OrderModel.CurrentStatus(),

      article: OrderModel.OrderBagArticle(),

      line_number: Joi.number(),

      bag_configs: OrderModel.BagConfigs(),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      display_name: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      id: Joi.number(),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

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

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_partner_id: Joi.number().allow(null),

      state_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      forward: Joi.boolean().allow(null),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      display_name: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      channel_order_id: Joi.string().allow("").allow(null),
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

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      bag_weight: Joi.any(),

      due_date: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      dp_name: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      external: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      packaging_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      return_affiliate_order_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      lock_data: OrderModel.LockData(),

      debug_info: OrderModel.DebugInfo(),

      return_awb_number: Joi.string().allow(""),

      dp_options: Joi.any(),

      ewaybill_info: Joi.any().allow(null),

      return_details: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_sort_key: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipment_volumetric_weight: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      formatted: OrderModel.Formatted(),

      awb_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      order_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      total_bags: Joi.number(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      enable_dp_tracking: Joi.boolean(),

      delivery_details: OrderModel.UserDetailsData(),

      payments: OrderModel.ShipmentPayments(),

      status: OrderModel.ShipmentStatusData(),

      custom_meta: Joi.array().items(Joi.any()),

      vertical: Joi.string().allow("").allow(null),

      journey_type: Joi.string().allow(""),

      total_items: Joi.number(),

      gst_details: OrderModel.GSTDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      packaging_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      shipment_status: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      user_agent: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      coupon: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      invoice: OrderModel.EinvoiceInfo(),

      fulfilling_store: OrderModel.FulfillingStore(),

      payment_mode: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      invoice_id: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      billing_details: OrderModel.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      meta: OrderModel.Meta(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      delivery_slot: Joi.any(),

      affiliate_details: OrderModel.AffiliateDetails(),
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
      extra_meta: Joi.any(),

      order_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      order_tags: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      customer_note: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      tax_details: Joi.any(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),
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

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

      user_info: OrderModel.UserDataInfo(),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      total_count: Joi.number(),
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
      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.PlatformTrack()),

      meta: Joi.any(),
    });
  }

  static AdvanceFilterInfo() {
    return Joi.object({
      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      global_filter: Joi.array().items(OrderModel.FiltersInfo()),

      advance_filter: OrderModel.AdvanceFilterInfo(),
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
      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

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

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      label: Joi.any(),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static FileResponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      namespace: Joi.string().allow(""),

      size: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      successful_shipments: Joi.array().items(Joi.any()),

      batch_id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      successful: Joi.number(),

      user_name: Joi.string().allow(""),

      processing: Joi.number(),

      total: Joi.number(),

      user_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      failed: Joi.number(),

      excel_url: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      store_name: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

      data: Joi.array().items(OrderModel.bulkListingData()),

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
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      id: Joi.number(),
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

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      created_on: Joi.number(),

      company: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l3_category: Joi.number(),

      brand_id: Joi.number().required(),

      can_return: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l2_category_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      attributes: OrderModel.Attributes().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      department_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      slug_key: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      created_at: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),
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
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      ewaybill_portal_details: Joi.any(),

      product_return_config: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      additional_contact_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      timing: Joi.array().items(Joi.any()),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      brand_id: Joi.any(),

      is_enabled_for_recon: Joi.boolean(),

      packaging_material_count: Joi.number(),

      phone: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      country: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      order_integration_id: Joi.string().allow(""),

      location_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      address1: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      parent_store_id: Joi.number(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      mall_area: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      code: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      login_username: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      store_email: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

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
      identifiers: OrderModel.Identifier().required(),

      esp_modified: Joi.any(),

      return_config: OrderModel.ReturnConfig(),

      a_set: Joi.any().allow(null),

      raw_meta: Joi.any(),

      code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      shipment_id: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      applied_promos: Joi.array().items(Joi.any()),

      brand: OrderModel.Brand().required(),

      quantity: Joi.number(),

      item: OrderModel.Item().required(),

      identifier: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      ordering_store: OrderModel.Store(),

      journey_type: Joi.string().allow("").required(),

      restore_coupon: Joi.boolean(),

      gst_details: OrderModel.BagGSTDetails().required(),

      restore_promos: Joi.any(),

      b_id: Joi.number().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      no_of_bags_order: Joi.number(),

      prices: OrderModel.Prices().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      b_type: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      article: OrderModel.Article().required(),

      line_number: Joi.number(),

      qc_required: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      article_details: OrderModel.ArticleDetails(),

      bag_update_time: Joi.number(),

      parent_promo_bags: Joi.any(),

      original_bag_list: Joi.array().items(Joi.number()),

      entity_type: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      bag_status_history: OrderModel.BagStatusHistory(),

      seller_identifier: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      display_name: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),
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

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),
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

      error: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

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

      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),
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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),
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

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

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
      company_id: Joi.number(),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

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
      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),

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

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      shipments: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),
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
      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
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
      company_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      transfer_price: Joi.number().required(),

      quantity: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      delivery_charge: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      order_value: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      shipment: OrderModel.ShipmentData(),

      user: OrderModel.UserData().required(),

      payment: Joi.any(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      coupon: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      discount: Joi.number().required(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

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
      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),
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

      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
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

      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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

  static HistoryDict() {
    return Joi.object({
      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
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

  static SmsDataPayload() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      phone_number: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),
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
      meta: OrderModel.Meta1().required(),

      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      status: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
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
      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),

      processing_dates: OrderModel.ProcessingDates(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      transaction_data: Joi.any(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      address_type: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),
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
      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

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
      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
