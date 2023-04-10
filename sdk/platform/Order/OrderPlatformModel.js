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
      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      item_quantity: Joi.number().required(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      status: Joi.any().required(),

      bag_id: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_shipments_in_order: Joi.number().required(),

      prices: OrderModel.Prices(),

      channel: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_id: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      application: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      shipment_status: OrderModel.ShipmentStatus(),

      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),
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

      fynd_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_facing: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bsh_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      state_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      bag_id: Joi.number(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      company_cin: Joi.string().allow(""),

      manufacturer_address: Joi.any(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      height: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      width: Joi.number(),
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

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address: Joi.string().allow("").allow(null).required(),

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

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      return_details: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      debug_info: OrderModel.DebugInfo(),

      shipment_volumetric_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      weight: Joi.number().required(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      same_store_available: Joi.boolean().required(),

      lock_data: OrderModel.LockData(),

      external: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_store_node: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      dp_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      formatted: OrderModel.Formatted(),

      order_type: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      due_date: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      credit_note_url: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      due_date: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      coupon_code: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),
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

      promotion_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      total_units: Joi.number().required(),

      size: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      value_of_good: Joi.number().required(),

      price_marked: Joi.number().required(),

      coupon_value: Joi.number().required(),

      gst_fee: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      price_effective: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cashback: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),
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

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      store_id: Joi.number(),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      brand: OrderModel.OrderBrandName(),

      can_cancel: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      article: OrderModel.OrderBagArticle(),

      gst_details: OrderModel.BagGST(),

      item: OrderModel.PlatformItem(),

      line_number: Joi.number(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      current_status: OrderModel.CurrentStatus(),

      identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      bag_id: Joi.number().required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      order: OrderModel.OrderDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      lock_status: Joi.boolean(),

      platform_logo: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      priority_text: Joi.string().allow("").allow(null),

      company_details: OrderModel.CompanyDetails(),

      gst_details: OrderModel.GSTDetailsData(),

      meta: OrderModel.Meta(),

      billing_details: OrderModel.UserDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      affiliate_details: OrderModel.AffiliateDetails(),

      status: OrderModel.ShipmentStatusData(),

      payment_methods: Joi.any(),

      payment_mode: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      fulfilling_store: OrderModel.FulfillingStore(),

      fulfilment_priority: Joi.number(),

      vertical: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow("").required(),

      coupon: Joi.any(),

      forward_shipment_id: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      user: OrderModel.UserDataInfo(),

      delivery_slot: Joi.any(),

      total_bags: Joi.number(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      packaging_type: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      total_items: Joi.number(),

      shipment_quantity: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      dp_details: OrderModel.DPDetailsData(),

      invoice: OrderModel.InvoiceInfo(),

      enable_dp_tracking: Joi.boolean(),

      journey_type: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      unique_reference_number: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      currency: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      cart_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      company_logo: Joi.string().allow(""),

      staff: Joi.any(),

      transaction_data: OrderModel.TransactionData(),

      extra_meta: Joi.any(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      files: Joi.array().items(Joi.any()),

      order_tags: Joi.array().items(Joi.any()),

      currency_symbol: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      employee_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      payment_type: Joi.string().allow(""),
    });
  }

  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),
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
      index: Joi.number(),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

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
      value: Joi.number().required(),

      key: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

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
      last_location_recieved_at: Joi.string().allow(""),

      meta: Joi.any(),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),
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
      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

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

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      label: Joi.any(),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

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
      content_type: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.number(),

      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_id: Joi.number(),

      store_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      successful: Joi.number(),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      processing: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      user_name: Joi.string().allow(""),
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

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),
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
      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      credit_note_expiry_days: Joi.number().allow(null),

      modified_on: Joi.number(),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      pickup_location: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),
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
      raw_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      esp_modified: Joi.any(),

      uid: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      return_config: OrderModel.ReturnConfig(),

      is_set: Joi.boolean(),

      identifiers: OrderModel.Identifier().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Attributes() {
    return Joi.object({
      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      webstore_product_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      brand: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      attributes: OrderModel.Attributes().required(),

      meta: Joi.any(),

      l1_category_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      gender: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      size: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      item_id: Joi.number().required(),

      department_id: Joi.number(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
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

  static StoreAddress() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      area: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),
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

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static Store() {
    return Joi.object({
      is_archived: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      packaging_material_count: Joi.number(),

      address1: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      longitude: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      state: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      parent_store_id: Joi.number(),

      contact_person: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      is_enabled_for_recon: Joi.boolean(),

      brand_id: Joi.any(),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").allow(null),

      mall_area: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_status_history: OrderModel.BagStatusHistory(),

      brand: OrderModel.Brand().required(),

      restore_coupon: Joi.boolean(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      article: OrderModel.Article().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      meta: OrderModel.BagMeta(),

      item: OrderModel.Item().required(),

      line_number: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      affiliate_details: OrderModel.AffiliateDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      no_of_bags_order: Joi.number(),

      b_id: Joi.number().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(Joi.any()),

      qc_required: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      original_bag_list: Joi.array().items(Joi.number()),

      order_integration_id: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      entity_type: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      display_name: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      restore_promos: Joi.any(),

      b_type: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      identifier: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      bag_update_time: Joi.number(),

      journey_type: Joi.string().allow("").required(),
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
      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      bag_id: Joi.number().allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      mongo_article_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),
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

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),
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

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

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

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),

      message: Joi.string().allow(""),

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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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
      updated_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

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
      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      mobile: Joi.number().required(),

      email: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

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

      weight: Joi.any().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      shipments: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
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

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      company_id: Joi.number().required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_id: Joi.number().required(),

      identifier: Joi.any().required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      amount_paid: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      sku: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      quantity: Joi.number().required(),

      unit_price: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      discount: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      user: OrderModel.UserData().required(),

      payment: Joi.any(),

      shipment: OrderModel.ShipmentData(),

      order_priority: OrderModel.OrderPriority(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      order_value: Joi.number().required(),

      items: Joi.any().required(),

      payment_mode: Joi.string().allow("").required(),

      shipping_address: OrderModel.OrderUser().required(),
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
      id: Joi.number().required(),

      description: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

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
      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
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
      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

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

  static PaymentMethod() {
    return Joi.object({
      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
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
      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      tax: OrderModel.Tax(),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      geo_location: Joi.any(),

      house_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      title: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      title: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      currency_info: Joi.any(),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      billing_info: OrderModel.BillingInfo().required(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      info: Joi.any(),

      message: Joi.string().allow("").required(),

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
      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

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
