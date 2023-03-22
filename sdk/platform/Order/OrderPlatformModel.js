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
      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      transfer_price: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      promotion_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),
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
      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      image: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      department_id: Joi.number(),

      l3_category: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      total_shipments_in_order: Joi.number().required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      application: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      shipment_created_at: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      shipment_id: Joi.string().allow(""),

      sla: Joi.any(),

      total_bags_count: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_methods: Joi.any(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),
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
      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      bs_id: Joi.number().required(),

      state_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      delivery_partner_id: Joi.number().allow(null),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      updated_at: Joi.string().allow(""),

      bsh_id: Joi.number(),

      state_type: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
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
      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_qr_code: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      irn: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      return_details: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      return_store_node: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      bag_weight: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      dp_name: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      b2c_buyer_details: Joi.any().allow(null),

      assign_dp_from_sb: Joi.boolean(),

      dp_id: Joi.string().allow("").allow(null),

      formatted: OrderModel.Formatted(),

      external: Joi.any(),

      weight: Joi.number().required(),

      ewaybill_info: Joi.any().allow(null),

      due_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      return_awb_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      marketplace_store_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      forward_affiliate_order_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      dp_options: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      longitude: Joi.number(),

      phone: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

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
      identifiers: OrderModel.Identifier().required(),

      item_name: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      cashback_applied: Joi.number().required(),

      value_of_good: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      cod_charges: Joi.number().required(),

      coupon_value: Joi.number().required(),

      transfer_price: Joi.number().required(),

      cashback: Joi.number().required(),

      amount_paid: Joi.number().required(),

      size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),
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
      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      line_number: Joi.number(),

      bag_configs: OrderModel.BagConfigs(),

      entity_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      gst_details: OrderModel.BagGST(),

      financial_breakup: OrderModel.FinancialBreakup(),

      article: OrderModel.OrderBagArticle(),

      parent_promo_bags: Joi.any(),

      item: OrderModel.PlatformItem(),

      brand: OrderModel.OrderBrandName(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      meta: OrderModel.Meta(),

      order: OrderModel.OrderDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices(),

      user_agent: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      operational_status: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      delivery_details: OrderModel.UserDetailsData(),

      invoice_id: Joi.string().allow(""),

      coupon: Joi.any(),

      packaging_type: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow("").allow(null),

      ordering_store: OrderModel.OrderingStoreDetails(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_quantity: Joi.number(),

      shipment_status: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      payment_mode: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      platform_logo: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      enable_dp_tracking: Joi.boolean(),

      lock_status: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      forward_shipment_id: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      dp_details: OrderModel.DPDetailsData(),

      fulfilment_priority: Joi.number(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      total_items: Joi.number(),

      total_bags: Joi.number(),

      picked_date: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      payment_methods: Joi.any(),
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
      staff: Joi.any(),

      ordering_store: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_platform: Joi.string().allow(""),

      cart_id: Joi.number(),

      employee_id: Joi.number(),

      comment: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      extra_meta: Joi.any(),
    });
  }

  static OrderDict() {
    return Joi.object({
      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),

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

      index: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

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

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      total_order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      success: Joi.boolean(),

      lane: Joi.string().allow(""),
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

      text: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      status: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
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
      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

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
      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      label: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      store_id: Joi.string().allow(""),

      data: Joi.any(),

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
      size: Joi.number(),

      file_path: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      successful: Joi.number(),

      total: Joi.number(),

      store_id: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      processing: Joi.number(),

      status: Joi.string().allow(""),

      company_id: Joi.number(),

      failed: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),
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

      display_name: Joi.string().allow(""),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
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

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      longitude: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      version: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      meta: OrderModel.StoreMeta().required(),

      parent_store_id: Joi.number(),

      country: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      city: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      order_integration_id: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      phone: Joi.number().required(),

      company_id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      mall_area: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      created_at: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      s_id: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      sgst_tax_percentage: Joi.number().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),

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
      weight: OrderModel.Weight(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      a_set: Joi.any().allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_address: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      l3_category: Joi.number(),

      item_id: Joi.number().required(),

      branch_url: Joi.string().allow("").allow(null),

      l2_category_id: Joi.number(),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      last_updated_at: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.number().required(),
    });
  }

  static Brand() {
    return Joi.object({
      script_last_ran: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      modified_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      company: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      meta: OrderModel.BagMeta(),

      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      b_id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      quantity: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      line_number: Joi.number(),

      original_bag_list: Joi.array().items(Joi.number()),

      entity_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      ordering_store: OrderModel.Store(),

      order_integration_id: Joi.string().allow("").allow(null),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      dates: OrderModel.Dates(),

      reasons: Joi.array().items(Joi.any()),

      article: OrderModel.Article().required(),

      qc_required: Joi.any(),

      restore_coupon: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      parent_promo_bags: Joi.any(),

      restore_promos: Joi.any(),

      item: OrderModel.Item().required(),

      brand: OrderModel.Brand().required(),

      b_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      no_of_bags_order: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      article_details: OrderModel.ArticleDetails(),
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

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

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
      error: Joi.string().allow(""),

      status: Joi.number(),

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
      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      fynd_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

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

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
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
      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

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
      is_bag_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      is_shipment_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      company_id: Joi.number(),

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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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
      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),
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

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      quantity: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      avl_qty: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      identifier: Joi.any().required(),

      store_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      company_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      item_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      address2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mobile: Joi.number().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),
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

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      journey: Joi.string().allow("").required(),
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
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      order_priority: OrderModel.OrderPriority(),

      payment: Joi.any(),

      coupon: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      user: OrderModel.UserData().required(),

      order_value: Joi.number().required(),

      items: Joi.any().required(),

      discount: Joi.number().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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
      description: Joi.string().allow(""),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

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
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderModel.OrderInfo().required(),

      affiliate_id: Joi.string().allow("").required(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

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
      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      bag_id: Joi.number(),
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
      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),
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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

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

      amount: Joi.any().required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      geo_location: Joi.any(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),
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
      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),
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

      billing_info: OrderModel.BillingInfo().required(),

      currency_info: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      external_creation_date: Joi.string().allow(""),

      meta: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),
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

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),

      logo_url: Joi.any(),

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

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
