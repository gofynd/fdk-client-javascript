const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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
      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      name: Joi.string().allow(""),

      department_id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),

      cod_charges: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      company: Joi.any(),

      total_bags_count: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      id: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_created_at: Joi.number().required(),

      payment_methods: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_centre: Joi.string().allow("").required(),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      application: Joi.any(),

      total_shipments_in_order: Joi.number().required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

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
      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      length: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      meta: Joi.any().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_partner_id: Joi.number().allow(null),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bsh_id: Joi.number(),

      store_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),
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

  static BuyerDetails() {
    return Joi.object({
      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      external: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      awb_number: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_id: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      assign_dp_from_sb: Joi.boolean(),

      shipment_weight: Joi.number(),

      po_number: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      formatted: OrderModel.Formatted(),

      weight: Joi.number().required(),

      lock_data: OrderModel.LockData(),

      marketplace_store_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      return_store_node: Joi.number(),

      dp_options: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      bag_weight: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      return_details: Joi.any(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      po_invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      due_date: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      quantity: Joi.number(),

      loyalty_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      coupon_code: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      shipment_meta: OrderModel.ShipmentMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),
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
      cart_conditions: Joi.any(),

      item_criteria: OrderModel.ItemCriterias(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      return_config: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_partner_id: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.number(),

      store_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),
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

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      size: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      brand_calculated_amount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      total_units: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      transfer_price: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_effective: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      amount_paid: Joi.number().required(),

      coupon_value: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cashback: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),

      seller_identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      article: OrderModel.OrderBagArticle(),

      parent_promo_bags: Joi.any(),

      item: OrderModel.PlatformItem(),

      display_name: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      gst_details: OrderModel.BagGST(),

      can_cancel: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      bag_configs: OrderModel.BagConfigs(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      order: OrderModel.OrderDetailsData(),

      picked_date: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilment_priority: Joi.number(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      vertical: Joi.string().allow("").allow(null),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      invoice_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      journey_type: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      invoice: OrderModel.EinvoiceInfo(),

      shipment_status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      total_bags: Joi.number(),

      coupon: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_quantity: Joi.number(),

      total_items: Joi.number(),

      user_agent: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      delivery_slot: Joi.any(),

      meta: OrderModel.Meta(),

      fulfilling_store: OrderModel.FulfillingStore(),

      status: OrderModel.ShipmentStatusData(),

      enable_dp_tracking: Joi.boolean(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      affiliate_details: OrderModel.AffiliateDetails(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      packaging_type: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      platform_logo: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      customer_note: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      files: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      employee_id: Joi.number(),

      cart_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      extra_meta: Joi.any(),

      mongo_cart_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: Joi.any(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),
    });
  }

  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      index: Joi.number(),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      text: Joi.string().allow("").required(),
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
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_created_time: Joi.string().allow(""),

      meta: Joi.any(),

      order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      channel: OrderModel.PlatformChannel(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      success: Joi.boolean(),

      page: OrderModel.Page(),

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
      key: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),

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
      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),
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
      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

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
      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

      store_code: Joi.string().allow(""),

      invoice: Joi.any(),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      company_id: Joi.string().allow(""),
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

      operation: Joi.string().allow(""),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      successful: Joi.number(),

      user_name: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      company_id: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number(),

      user_id: Joi.string().allow(""),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      status: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

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

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      latitude: Joi.number().required(),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),
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

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),
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

      product_return_config: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      ewaybill_portal_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      stage: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      gst_number: Joi.string().allow(""),

      additional_contact_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Store() {
    return Joi.object({
      s_id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      vat_no: Joi.string().allow("").allow(null),

      login_username: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      parent_store_id: Joi.number(),

      company_id: Joi.number().required(),

      brand_id: Joi.any(),

      contact_person: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      packaging_material_count: Joi.number(),

      is_enabled_for_recon: Joi.boolean(),

      is_archived: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      longitude: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      size: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      return_config: OrderModel.ReturnConfig(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      branch_url: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      brand_id: Joi.number().required(),

      last_updated_at: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      name: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      script_last_ran: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      pickup_location: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      brand_id: Joi.number().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tag: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow("").allow(null),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),
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

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      line_number: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      ordering_store: OrderModel.Store(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      prices: OrderModel.Prices().required(),

      article_details: OrderModel.ArticleDetails(),

      journey_type: Joi.string().allow("").required(),

      no_of_bags_order: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      b_type: Joi.string().allow(""),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      article: OrderModel.Article().required(),

      parent_promo_bags: Joi.any(),

      item: OrderModel.Item().required(),

      restore_promos: Joi.any(),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      brand: OrderModel.Brand().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      identifier: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      b_id: Joi.number().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      meta: OrderModel.BagMeta(),

      bag_update_time: Joi.number(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      qc_required: Joi.any(),

      affiliate_details: OrderModel.AffiliateDetails(),

      restore_coupon: Joi.boolean(),

      dates: OrderModel.Dates(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      current_status: OrderModel.BagStatusHistory().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      shipment_id: Joi.string().allow(""),
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

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),
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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),

      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),
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

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

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

      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),
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

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
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

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),
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

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

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
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
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
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

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

  static OrderUser() {
    return Joi.object({
      address2: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
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
      category: Joi.any().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),
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

      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
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
      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      company_id: Joi.number().required(),

      item_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      affiliate_meta: Joi.any().required(),

      identifier: Joi.any().required(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      user: OrderModel.UserData().required(),

      shipping_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      coupon: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      payment: Joi.any(),

      cod_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      discount: Joi.number().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
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

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

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
      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

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
      message: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

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
      shipment_id: Joi.number().required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),
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
      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),

      transaction_data: Joi.any(),
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

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      first_name: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      charges: Joi.array().items(OrderModel.Charge()),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      billing_info: OrderModel.BillingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),
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

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
