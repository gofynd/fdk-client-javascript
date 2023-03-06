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

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      is_anonymous_user: Joi.boolean(),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),

      tax_collected_at_source: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      id: Joi.number(),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      can_cancel: Joi.boolean(),
    });
  }

  static BagUnit() {
    return Joi.object({
      ordering_channel: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),

      shipment_id: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      can_return: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      sla: Joi.any(),

      total_bags_count: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      shipment_created_at: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      channel: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      prices: OrderModel.Prices(),

      company: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      application: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
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
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      amount_paid: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      brand_calculated_amount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      refund_credit: Joi.number().required(),

      value_of_good: Joi.number().required(),

      total_units: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      cashback_applied: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      cod_charges: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
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
      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_name: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      state_type: Joi.string().allow(""),

      store_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      updated_at: Joi.number(),

      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      bag_id: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      article: OrderModel.OrderBagArticle(),

      identifier: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_return: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      quantity: Joi.number(),

      prices: OrderModel.Prices(),

      bag_configs: OrderModel.BagConfigs(),

      line_number: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      brand: OrderModel.OrderBrandName(),

      current_status: OrderModel.CurrentStatus(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      item: OrderModel.PlatformItem(),

      parent_promo_bags: Joi.any(),

      bag_id: Joi.number().required(),

      gst_details: OrderModel.BagGST(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_no: Joi.number(),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),
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

  static ShipmentMeta() {
    return Joi.object({
      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_name: Joi.string().allow(""),

      weight: Joi.number().required(),

      forward_affiliate_order_id: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      ewaybill_info: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      b2c_buyer_details: Joi.any().allow(null),

      dp_sort_key: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any(),

      formatted: OrderModel.Formatted(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      awb_number: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      external: Joi.any(),

      due_date: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      packaging_name: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      lock_data: OrderModel.LockData(),

      assign_dp_from_sb: Joi.boolean(),

      return_affiliate_order_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      return_details: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      bag_weight: Joi.any(),

      debug_info: OrderModel.DebugInfo(),

      return_affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      delivery_partner_id: Joi.number().allow(null),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      reasons: Joi.array().items(Joi.any()),

      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bsh_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      platform_logo: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_status: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      priority_text: Joi.string().allow("").allow(null),

      user_agent: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      fulfilling_store: OrderModel.FulfillingStore(),

      order: OrderModel.OrderDetailsData(),

      coupon: Joi.any(),

      vertical: Joi.string().allow("").allow(null),

      payments: OrderModel.ShipmentPayments(),

      fulfilment_priority: Joi.number(),

      total_items: Joi.number(),

      status: OrderModel.ShipmentStatusData(),

      operational_status: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      invoice: OrderModel.EinvoiceInfo(),

      delivery_slot: Joi.any(),

      picked_date: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      journey_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      invoice_id: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      payment_mode: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      affiliate_details: OrderModel.AffiliateDetails(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      gst_details: OrderModel.GSTDetailsData(),

      dp_details: OrderModel.DPDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      ordering_store: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      extra_meta: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      staff: Joi.any(),

      currency_symbol: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: Joi.any(),

      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),
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
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

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

      meta: Joi.any(),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      total_order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      lane: Joi.string().allow(""),

      message: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

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
      value: Joi.number().required(),

      text: Joi.string().allow("").required(),

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
      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
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

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),
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

      store_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      data: Joi.any(),

      label: Joi.any(),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),
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

      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      namespace: Joi.string().allow(""),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      store_id: Joi.number(),

      id: Joi.string().allow(""),

      failed: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      failed_shipments: Joi.array().items(Joi.any()),

      successful: Joi.number(),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      status: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      total: Joi.number(),

      batch_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

      error: Joi.string().allow(""),

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
      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      code: Joi.string().allow(""),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      uid: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      return_config: OrderModel.ReturnConfig(),

      is_set: Joi.boolean(),

      size: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),
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

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),
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
      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      ewaybill_portal_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_number: Joi.string().allow(""),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      company_id: Joi.number().required(),

      order_integration_id: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      login_username: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      latitude: Joi.number().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      is_archived: Joi.boolean(),

      code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      packaging_material_count: Joi.number(),

      country: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      address2: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      store_active_from: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      brand_id: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      brand_id: Joi.number().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      slug_key: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      meta: Joi.any(),

      color: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      brand: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      l1_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.number().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      order_integration_id: Joi.string().allow("").allow(null),

      article: OrderModel.Article().required(),

      restore_promos: Joi.any(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      meta: OrderModel.BagMeta(),

      identifier: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      entity_type: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      display_name: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      qc_required: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      original_bag_list: Joi.array().items(Joi.number()),

      quantity: Joi.number(),

      operational_status: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      bag_update_time: Joi.number(),

      line_number: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      b_id: Joi.number().required(),

      brand: OrderModel.Brand().required(),

      reasons: Joi.array().items(Joi.any()),

      journey_type: Joi.string().allow("").required(),

      restore_coupon: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      item: OrderModel.Item().required(),

      dates: OrderModel.Dates(),

      parent_promo_bags: Joi.any(),

      affiliate_details: OrderModel.AffiliateDetails(),

      bag_status_history: OrderModel.BagStatusHistory(),

      gst_details: OrderModel.BagGSTDetails().required(),

      seller_identifier: Joi.string().allow(""),

      b_type: Joi.string().allow(""),
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

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

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
      error: Joi.string().allow(""),

      status: Joi.number(),

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
      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

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
      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

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

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

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
      id: Joi.number().required(),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      title: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
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
      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      final_state: Joi.any(),

      meta: Joi.any(),

      stack_trace: Joi.string().allow(""),
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
      last_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      shipments: Joi.number().required(),
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
      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
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
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      pdf_links: OrderModel.MarketPlacePdf(),

      item_size: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      quantity: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      identifier: Joi.any().required(),

      price_marked: Joi.number().required(),

      amount_paid: Joi.number().required(),

      avl_qty: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      discount: Joi.number().required(),

      order_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      user: OrderModel.UserData().required(),

      items: Joi.any().required(),

      shipment: OrderModel.ShipmentData(),

      payment: Joi.any(),

      coupon: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      shipping_address: OrderModel.OrderUser().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      token: Joi.string().allow("").required(),

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
      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),
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
      id: Joi.number().required(),

      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

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

  static HistoryDict() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l2_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),
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

  static SmsDataPayload() {
    return Joi.object({
      phone_number: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),

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
      id: Joi.number().required(),

      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      title: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      slot: Joi.array().items(Joi.any()),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      title: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      gender: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),

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
      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      priority: Joi.number(),

      meta: Joi.any(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

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
      currency_info: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      tax_info: OrderModel.TaxInfo(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
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
      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),
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
      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
