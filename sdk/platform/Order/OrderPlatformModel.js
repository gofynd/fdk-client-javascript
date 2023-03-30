const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      size: Joi.string().allow(""),

      l3_category: Joi.number(),

      color: Joi.string().allow("").allow(null),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),

      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      prices: OrderModel.Prices(),
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

  static ShipmentItem() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_shipments_in_order: Joi.number().required(),

      id: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      channel: Joi.any(),

      created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      application: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      prices: OrderModel.Prices(),
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
      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

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

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),

      manufacturer_address: Joi.any(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

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

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      display_name: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      created_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      kafka_sync: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),
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

      price_effective: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      cod_charges: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      cashback: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      refund_credit: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),
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
      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static OrderBags() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      seller_identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      line_number: Joi.number(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      article: OrderModel.OrderBagArticle(),

      current_status: OrderModel.CurrentStatus(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      entity_type: Joi.string().allow(""),

      can_return: Joi.boolean(),

      bag_configs: OrderModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      brand: OrderModel.OrderBrandName(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGST(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
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
      packaging_name: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      ewaybill_info: Joi.any().allow(null),

      same_store_available: Joi.boolean().required(),

      bag_weight: Joi.any(),

      marketplace_store_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      return_store_node: Joi.number(),

      return_affiliate_order_id: Joi.string().allow(""),

      return_details: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      awb_number: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      formatted: OrderModel.Formatted(),

      po_number: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      dp_options: Joi.any(),

      dp_sort_key: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      shipment_weight: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      dp_name: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      external: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      loyalty_discount: Joi.number(),

      is_priority: Joi.boolean(),

      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      status: OrderModel.ShipmentStatusData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      coupon: Joi.any(),

      dp_details: OrderModel.DPDetailsData(),

      company_details: OrderModel.CompanyDetails(),

      meta: OrderModel.Meta(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      payments: OrderModel.ShipmentPayments(),

      payment_methods: Joi.any(),

      shipment_quantity: Joi.number(),

      fulfilling_store: OrderModel.FulfillingStore(),

      shipment_id: Joi.string().allow("").required(),

      enable_dp_tracking: Joi.boolean(),

      total_items: Joi.number(),

      delivery_slot: Joi.any(),

      vertical: Joi.string().allow("").allow(null),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      prices: OrderModel.Prices(),

      forward_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      platform_logo: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      user: OrderModel.UserDataInfo(),

      lock_status: Joi.boolean(),

      delivery_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      user_agent: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      picked_date: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      packaging_type: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      total_bags: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      status: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      staff_id: Joi.number(),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      transaction_data: OrderModel.TransactionData(),

      ordering_store: Joi.number(),

      employee_id: Joi.number(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      files: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      extra_meta: Joi.any(),

      cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      staff: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      currency_symbol: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_type: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: OrderModel.TaxDetails(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),
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
      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

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

      order_created_time: Joi.string().allow(""),

      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

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

      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),

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
      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

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
      company_id: Joi.string().allow(""),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

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
      expiry: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      cdn: OrderModel.URL(),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      status: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),

      id: Joi.string().allow(""),

      successful: Joi.number(),

      user_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

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
      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),

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

      display_name: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      stage: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      company_id: Joi.number().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      parent_store_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      created_at: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      is_enabled_for_recon: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      is_archived: Joi.boolean(),

      updated_at: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      packaging_material_count: Joi.number(),

      latitude: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      s_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      contact_person: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_address: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      code: Joi.string().allow(""),

      last_updated_at: Joi.string().allow(""),

      item_id: Joi.number().required(),

      meta: Joi.any(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      gender: Joi.string().allow("").allow(null),

      color: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l1_category_id: Joi.number(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      l2_category_id: Joi.number(),

      l3_category: Joi.number(),

      brand: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      attributes: OrderModel.Attributes().required(),

      size: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

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
      code: Joi.string().allow(""),

      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      uid: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      invoice_prefix: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_id: Joi.number().required(),

      logo: Joi.string().allow(""),

      credit_note_expiry_days: Joi.number().allow(null),

      credit_note_allowed: Joi.boolean(),

      modified_on: Joi.number(),
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

      brand_calculated_amount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      igst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      status: OrderModel.BagReturnableCancelableStatus().required(),

      no_of_bags_order: Joi.number(),

      restore_coupon: Joi.boolean(),

      display_name: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      order_integration_id: Joi.string().allow("").allow(null),

      meta: OrderModel.BagMeta(),

      ordering_store: OrderModel.Store(),

      seller_identifier: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      qc_required: Joi.any(),

      shipment_id: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      quantity: Joi.number(),

      item: OrderModel.Item().required(),

      line_number: Joi.number(),

      bag_update_time: Joi.number(),

      bag_status_history: OrderModel.BagStatusHistory(),

      prices: OrderModel.Prices().required(),

      article: OrderModel.Article().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      applied_promos: Joi.array().items(Joi.any()),

      entity_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      restore_promos: Joi.any(),

      operational_status: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      journey_type: Joi.string().allow("").required(),

      original_bag_list: Joi.array().items(Joi.number()),

      b_type: Joi.string().allow(""),

      b_id: Joi.number().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

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

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),

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
      fynd_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

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
      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

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
      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),
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

      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      logo_url: Joi.string().allow(""),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

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
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),
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
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      token: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

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
      sku: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      company_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      store_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      item_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),
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

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      discount: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      affiliate_order_id: Joi.string().allow(""),

      items: Joi.any().required(),

      payment_mode: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      order_value: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      payment: Joi.any(),

      shipment: OrderModel.ShipmentData(),

      order_priority: OrderModel.OrderPriority(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),

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
      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),
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

  static SmsDataPayload() {
    return Joi.object({
      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),

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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),

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

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

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

  static BillingInfo() {
    return Joi.object({
      floor_no: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state_code: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      floor_no: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      geo_location: Joi.any(),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      address2: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      charges: Joi.array().items(OrderModel.Charge()),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

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
      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

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

  static CreateChannelConfig() {
    return Joi.object({
      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

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
      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
