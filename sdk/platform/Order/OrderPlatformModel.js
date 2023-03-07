const Joi = require("joi");

class OrderModel {
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

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

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
      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_created_at: Joi.number().required(),

      company: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      application: Joi.any(),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),
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
      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_qr_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static DiscountRules() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),
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

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      store_id: Joi.number(),

      delivery_partner_id: Joi.number(),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      total_units: Joi.number().required(),

      refund_credit: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      price_effective: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      value_of_good: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      amount_paid: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      cashback_applied: Joi.number().required(),

      coupon_value: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      size: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      gst_fee: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      entity_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      bag_id: Joi.number().required(),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      brand: OrderModel.OrderBrandName(),

      can_return: Joi.boolean(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      article: OrderModel.OrderBagArticle(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      prices: OrderModel.Prices(),

      gst_details: OrderModel.BagGST(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_value: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      created_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      bsh_id: Joi.number(),

      store_id: Joi.number(),

      delivery_partner_id: Joi.number().allow(null),

      display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      reasons: Joi.array().items(Joi.any()),

      app_display_name: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice: Joi.string().allow(""),
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

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      ewaybill_info: Joi.any().allow(null),

      external: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      same_store_available: Joi.boolean().required(),

      awb_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      weight: Joi.number().required(),

      formatted: OrderModel.Formatted(),

      return_details: Joi.any(),

      bag_weight: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      shipment_volumetric_weight: Joi.number(),

      dp_options: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      b2c_buyer_details: Joi.any().allow(null),

      marketplace_store_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      dp_sort_key: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_id: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_name: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      quantity: Joi.number(),

      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),
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

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      picked_date: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      total_bags: Joi.number(),

      fulfilling_store: OrderModel.FulfillingStore(),

      journey_type: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      invoice: OrderModel.EinvoiceInfo(),

      platform_logo: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      dp_details: OrderModel.DPDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.OrderBags()),

      user_agent: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      order: OrderModel.OrderDetailsData(),

      total_items: Joi.number(),

      vertical: Joi.string().allow("").allow(null),

      coupon: Joi.any(),

      shipment_status: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      payment_mode: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      billing_details: OrderModel.UserDetailsData(),

      packaging_type: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_quantity: Joi.number(),

      enable_dp_tracking: Joi.boolean(),

      prices: OrderModel.Prices(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      gst_details: OrderModel.GSTDetailsData(),

      meta: OrderModel.Meta(),

      delivery_details: OrderModel.UserDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static OrderMeta() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      files: Joi.array().items(Joi.any()),

      order_platform: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_type: Joi.string().allow(""),

      staff: Joi.any(),

      employee_id: Joi.number(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      ordering_store: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      customer_note: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      tax_details: Joi.any(),

      meta: OrderModel.OrderMeta(),
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

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),
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
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

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
      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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
      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      advance_filter: OrderModel.AdvanceFilterInfo(),

      global_filter: Joi.array().items(OrderModel.FiltersInfo()),
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

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

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
      data: Joi.any(),

      store_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),
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
      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      file_path: Joi.string().allow(""),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      namespace: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      successful: Joi.number(),

      id: Joi.string().allow(""),

      processing: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),
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
      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      status: Joi.boolean(),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      brand_id: Joi.number().required(),

      l2_category_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      l1_category_id: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      item_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      company: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
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

  static Article() {
    return Joi.object({
      return_config: OrderModel.ReturnConfig(),

      dimensions: OrderModel.Dimensions(),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      child_details: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      code: Joi.string().allow(""),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),
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

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null).required(),

      contact_person: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),

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

      display_name: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static Store() {
    return Joi.object({
      phone: Joi.number().required(),

      company_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      parent_store_id: Joi.number(),

      store_address_json: OrderModel.StoreAddress(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

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

  static BagDetailsPlatformResponse() {
    return Joi.object({
      qc_required: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      entity_type: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      operational_status: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      reasons: Joi.array().items(Joi.any()),

      original_bag_list: Joi.array().items(Joi.number()),

      brand: OrderModel.Brand().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      b_type: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      applied_promos: Joi.array().items(Joi.any()),

      article: OrderModel.Article().required(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      restore_promos: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      parent_promo_bags: Joi.any(),

      bag_update_time: Joi.number(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article_details: OrderModel.ArticleDetails(),

      prices: OrderModel.Prices().required(),

      ordering_store: OrderModel.Store(),

      gst_details: OrderModel.BagGSTDetails().required(),

      b_id: Joi.number().required(),

      meta: OrderModel.BagMeta(),

      no_of_bags_order: Joi.number(),
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

      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),
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
      shipment_id: Joi.string().allow(""),

      status: Joi.number(),

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
      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      is_locked: Joi.boolean(),
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
      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
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
      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

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
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      status: Joi.number(),

      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),

      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

  static OrderUser() {
    return Joi.object({
      address2: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mobile: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),
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

      pdf_links: OrderModel.MarketPlacePdf(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      price_marked: Joi.number().required(),

      store_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      transfer_price: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      avl_qty: Joi.number().required(),

      discount: Joi.number().required(),

      identifier: Joi.any().required(),

      amount_paid: Joi.number().required(),
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
      weight: Joi.any().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      category: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
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
      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      items: Joi.any().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      order_priority: OrderModel.OrderPriority(),

      shipment: OrderModel.ShipmentData(),

      user: OrderModel.UserData().required(),

      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      discount: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      shipping_address: OrderModel.OrderUser().required(),
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

      owner: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),
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
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

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

      config: OrderModel.AffiliateConfig(),

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
      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),

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
      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

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

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),
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

  static PostHistoryFilters() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),

      line_number: Joi.string().allow(""),
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
      country_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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

      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),
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
      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),
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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

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
      rate: Joi.number().required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      meta: Joi.any(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      title: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      external_customer_code: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      address2: Joi.string().allow(""),

      title: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),
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
      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_creation_date: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_order_id: Joi.string().allow(""),

      currency_info: Joi.any(),

      meta: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
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
      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      location_reassignment: Joi.boolean(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      shipment_assignment: Joi.string().allow(""),
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

      acknowledged: Joi.boolean(),

      is_inserted: Joi.boolean(),
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

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
