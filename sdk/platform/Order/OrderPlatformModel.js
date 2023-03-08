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

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      discount: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      department_id: Joi.number(),

      id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      l3_category: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      item_quantity: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      user: OrderModel.UserDataInfo(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      payment_methods: Joi.any(),

      id: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      channel: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      sla: Joi.any(),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      company: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      shipment_created_at: Joi.number().required(),
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

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      cod_charges: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
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
      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      state_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      current_status_id: Joi.number().required(),

      created_at: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      updated_at: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      coupon_value: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      gst_fee: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      amount_paid: Joi.number().required(),

      refund_credit: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      tax_collected_at_source: Joi.number(),

      cashback_applied: Joi.number().required(),

      transfer_price: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      bag_configs: OrderModel.BagConfigs(),

      brand: OrderModel.OrderBrandName(),

      article: OrderModel.OrderBagArticle(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: OrderModel.FinancialBreakup(),

      bag_id: Joi.number().required(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      can_cancel: Joi.boolean(),

      gst_details: OrderModel.BagGST(),

      entity_type: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      irn: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
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

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
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

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      assign_dp_from_sb: Joi.boolean(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      debug_info: OrderModel.DebugInfo(),

      dp_options: Joi.any(),

      return_details: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      shipment_weight: Joi.number(),

      dp_name: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      return_store_node: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      b2c_buyer_details: Joi.any().allow(null),

      ewaybill_info: Joi.any().allow(null),

      external: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_awb_number: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      po_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      lock_data: OrderModel.LockData(),

      forward_affiliate_order_id: Joi.string().allow(""),

      bag_weight: Joi.any(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      credit_note_url: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      forward: Joi.boolean().allow(null),

      delivery_awb_number: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      bsh_id: Joi.number(),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      vertical: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      enable_dp_tracking: Joi.boolean(),

      payments: OrderModel.ShipmentPayments(),

      invoice_id: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      shipment_quantity: Joi.number(),

      journey_type: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      priority_text: Joi.string().allow("").allow(null),

      coupon: Joi.any(),

      status: OrderModel.ShipmentStatusData(),

      shipment_status: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      billing_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      payment_mode: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      fulfilment_priority: Joi.number(),

      total_bags: Joi.number(),

      platform_logo: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      custom_meta: Joi.array().items(Joi.any()),

      picked_date: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      invoice: OrderModel.EinvoiceInfo(),

      gst_details: OrderModel.GSTDetailsData(),

      total_items: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      delivery_slot: Joi.any(),
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

      customer_note: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      employee_id: Joi.number(),

      mongo_cart_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),

      files: Joi.array().items(Joi.any()),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_platform: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      tax_details: Joi.any(),

      payment_methods: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order: OrderModel.OrderDict(),
    });
  }

  static SubLane() {
    return Joi.object({
      value: Joi.string().allow(""),

      index: Joi.number(),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),
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
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: OrderModel.Page(),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

      success: Joi.boolean(),
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

      key: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      awb: Joi.string().allow(""),
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
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),
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
      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

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
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),
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
      company_id: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

      data: Joi.any(),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),
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
      file_path: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      method: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      store_id: Joi.number(),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful: Joi.number(),

      failed: Joi.number(),

      user_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      store_code: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),

      company_id: Joi.number(),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),
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

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

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

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      start_date: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      company: Joi.string().allow("").required(),
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
      _id: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      return_config: OrderModel.ReturnConfig(),

      is_set: Joi.boolean(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      weight: OrderModel.Weight(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      l1_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      name: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      item_id: Joi.number().required(),

      l3_category: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      webstore_product_url: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
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

  static StoreMeta() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      documents: OrderModel.StoreDocuments(),

      gst_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(Joi.any()),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address_category: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      meta: OrderModel.StoreMeta().required(),

      is_enabled_for_recon: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      latitude: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      packaging_material_count: Joi.number(),

      order_integration_id: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      contact_person: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      store_address_json: OrderModel.StoreAddress(),

      code: Joi.string().allow(""),

      brand_id: Joi.any(),

      updated_at: Joi.string().allow("").allow(null),

      s_id: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      is_archived: Joi.boolean(),

      login_username: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tag: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_fee: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_update_time: Joi.number(),

      prices: OrderModel.Prices().required(),

      meta: OrderModel.BagMeta(),

      operational_status: Joi.string().allow(""),

      b_id: Joi.number().required(),

      brand: OrderModel.Brand().required(),

      article: OrderModel.Article().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      seller_identifier: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      qc_required: Joi.any(),

      applied_promos: Joi.array().items(Joi.any()),

      restore_coupon: Joi.boolean(),

      identifier: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      restore_promos: Joi.any(),

      current_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      parent_promo_bags: Joi.any(),

      order_integration_id: Joi.string().allow("").allow(null),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      no_of_bags_order: Joi.number(),

      line_number: Joi.number(),

      ordering_store: OrderModel.Store(),

      quantity: Joi.number(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      article_details: OrderModel.ArticleDetails(),

      dates: OrderModel.Dates(),

      affiliate_details: OrderModel.AffiliateDetails(),

      gst_details: OrderModel.BagGSTDetails().required(),

      entity_type: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      bag_status_history: OrderModel.BagStatusHistory(),
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
      item_total: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

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
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      store_id: Joi.number().required(),

      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),
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
      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
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
      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

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
      bags: Joi.array().items(OrderModel.Bags()),

      is_shipment_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number().required(),

      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

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
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      description: Joi.string().allow(""),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      created_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

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

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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
      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

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
      quantity: Joi.number().required(),

      price_marked: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      identifier: Joi.any().required(),

      item_size: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      hsn_code_id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      discount: Joi.number().required(),

      avl_qty: Joi.number().required(),

      transfer_price: Joi.number().required(),

      unit_price: Joi.number().required(),

      store_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      item_id: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),
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
      meta: Joi.any(),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
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
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      items: Joi.any().required(),

      affiliate_order_id: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      user: OrderModel.UserData().required(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      shipment: OrderModel.ShipmentData(),

      billing_address: OrderModel.OrderUser().required(),

      discount: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      payment: Joi.any(),
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
      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PostActivityHistory() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.PostHistoryFilters()).required(),

      data: OrderModel.PostHistoryData().required(),
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
      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      phone_number: Joi.number().required(),

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
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
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
      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      order_details: OrderModel.OrderDetails().required(),

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

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),
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
      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
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
      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

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
      shipping_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      currency_info: Joi.any(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
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
      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),
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
      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),

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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
