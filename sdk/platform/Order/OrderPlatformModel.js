const Joi = require("joi");

class OrderModel {
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_value: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_credit: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      refund_amount: Joi.number(),
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

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagUnit() {
    return Joi.object({
      item_quantity: Joi.number().required(),

      bag_id: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      id: Joi.string().allow("").required(),

      application: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      prices: OrderModel.Prices(),

      total_bags_count: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_centre: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      channel: Joi.any(),
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

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_id: Joi.number(),

      company_cin: Joi.string().allow(""),

      manufacturer_address: Joi.any(),

      company_name: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_facing: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      bs_id: Joi.number().required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      display_name: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bsh_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),

      store_id: Joi.number(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      quantity: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      formatted: OrderModel.Formatted(),

      b2c_buyer_details: Joi.any().allow(null),

      dp_name: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      bag_weight: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      return_details: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      packaging_name: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      external: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_store_node: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      po_number: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      same_store_available: Joi.boolean().required(),

      return_affiliate_order_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      lock_data: OrderModel.LockData(),

      debug_info: OrderModel.DebugInfo(),

      box_type: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      phone: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      price_marked: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cod_charges: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      value_of_good: Joi.number().required(),

      amount_paid: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      refund_credit: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cashback: Joi.number().required(),

      total_units: Joi.number().required(),

      discount: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
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
      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      financial_breakup: OrderModel.FinancialBreakup(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      invoice: OrderModel.InvoiceInfo(),

      custom_meta: Joi.array().items(Joi.any()),

      payment_methods: Joi.any(),

      order: OrderModel.OrderDetailsData(),

      lock_status: Joi.boolean(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      delivery_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      fulfilling_store: OrderModel.FulfillingStore(),

      operational_status: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      company_details: OrderModel.CompanyDetails(),

      priority_text: Joi.string().allow("").allow(null),

      packaging_type: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      coupon: Joi.any(),

      shipment_quantity: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      payments: OrderModel.ShipmentPayments(),

      total_items: Joi.number(),

      forward_shipment_id: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      user: OrderModel.UserDataInfo(),

      affiliate_details: OrderModel.AffiliateDetails(),

      delivery_slot: Joi.any(),

      gst_details: OrderModel.GSTDetailsData(),

      shipment_status: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.ShipmentStatusData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      fulfilment_priority: Joi.number(),

      picked_date: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
    });
  }

  static TaxDetails() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      status: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      transaction_data: OrderModel.TransactionData(),

      cart_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      comment: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),

      staff: Joi.any(),

      mongo_cart_id: Joi.number(),

      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      files: Joi.array().items(Joi.any()),

      order_platform: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      tax_details: OrderModel.TaxDetails(),

      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),
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
      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      total_items: Joi.number(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
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
      order_value: Joi.number(),

      total_order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),
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

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

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
      key: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      value: Joi.number().required(),

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

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),
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
      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

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
      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      data: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),

      store_id: Joi.string().allow(""),
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

      namespace: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      method: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      excel_url: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      total: Joi.number(),

      store_id: Joi.number(),

      successful: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      processing: Joi.number(),

      id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

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
      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
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
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      area: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
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

  static StoreMeta() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      additional_contact_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      ewaybill_portal_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      gst_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),

      product_return_config: Joi.any(),
    });
  }

  static Store() {
    return Joi.object({
      store_active_from: Joi.string().allow("").allow(null),

      store_address_json: OrderModel.StoreAddress(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      mall_name: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      latitude: Joi.number().required(),

      store_email: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      login_username: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      brand_id: Joi.any(),

      address2: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      order_integration_id: Joi.string().allow(""),

      code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      longitude: Joi.number().required(),

      parent_store_id: Joi.number(),

      phone: Joi.number().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      branch_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      l3_category: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      attributes: OrderModel.Attributes().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      item_id: Joi.number().required(),

      l2_category_id: Joi.number(),

      department_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),
    });
  }

  static Brand() {
    return Joi.object({
      script_last_ran: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      logo: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      credit_note_expiry_days: Joi.number().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      shipping: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      a_set: Joi.any().allow(null),

      child_details: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      esp_modified: Joi.any(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow("").allow(null),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      dates: OrderModel.Dates(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      prices: OrderModel.Prices().required(),

      reasons: Joi.array().items(Joi.any()),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      b_type: Joi.string().allow(""),

      b_id: Joi.number().required(),

      operational_status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      ordering_store: OrderModel.Store(),

      parent_promo_bags: Joi.any(),

      bag_status_history: OrderModel.BagStatusHistory(),

      no_of_bags_order: Joi.number(),

      entity_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      bag_update_time: Joi.number(),

      identifier: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      qc_required: Joi.any(),

      meta: OrderModel.BagMeta(),

      order_integration_id: Joi.string().allow("").allow(null),

      restore_promos: Joi.any(),

      affiliate_details: OrderModel.AffiliateDetails(),

      item: OrderModel.Item().required(),

      brand: OrderModel.Brand().required(),

      article: OrderModel.Article().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      applied_promos: Joi.array().items(Joi.any()),

      status: OrderModel.BagReturnableCancelableStatus().required(),
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

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

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

  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      shipment_id: Joi.string().allow(""),

      error: Joi.string().allow(""),
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
      store_id: Joi.number().required(),

      item_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),
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

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
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

      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

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
      is_shipment_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),
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
      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      to_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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
      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),

      final_state: Joi.any(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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
      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
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
      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),
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
      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      journey: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
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
      fynd_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      discount: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      company_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      amount_paid: Joi.number().required(),

      unit_price: Joi.number().required(),

      identifier: Joi.any().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      discount: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      coupon: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      payment: Joi.any(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      cod_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      items: Joi.any().required(),

      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      order_value: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),
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
      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
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
      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

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
      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      createdat: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),

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

  static SmsDataPayload() {
    return Joi.object({
      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

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

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),

      bag_list: Joi.array().items(Joi.number()),
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

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),
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
      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),
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
      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      shipping_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      billing_info: OrderModel.BillingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      currency_info: Joi.any(),

      meta: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

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

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),
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
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
