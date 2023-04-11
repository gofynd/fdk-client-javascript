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

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      id: Joi.number(),

      l3_category: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      total_shipment_bags: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      can_cancel: Joi.boolean(),

      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_created_at: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      shipment_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

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

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      id: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
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
      forward_affiliate_order_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      formatted: OrderModel.Formatted(),

      due_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      dp_name: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      debug_info: OrderModel.DebugInfo(),

      bag_weight: Joi.any(),

      same_store_available: Joi.boolean().required(),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      ewaybill_info: Joi.any().allow(null),

      return_awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_store_node: Joi.number(),

      awb_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      external: Joi.any(),

      dp_options: Joi.any(),

      weight: Joi.number().required(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_details: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      store_invoice_updated_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      forward_affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      credit_note_url: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      size_level_total_qty: Joi.number().allow(null),

      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      country: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
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
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow("").allow(null),

      bag_id: Joi.number(),

      current_status_id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      phone: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      cod_charges: Joi.number().required(),

      gst_fee: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      transfer_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback: Joi.number().required(),

      amount_paid: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      total_units: Joi.number().required(),

      price_effective: Joi.number().required(),

      refund_credit: Joi.number().required(),

      coupon_value: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_configs: OrderModel.BagConfigs(),

      article: OrderModel.OrderBagArticle(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      identifier: Joi.string().allow(""),

      can_return: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      current_status: OrderModel.CurrentStatus(),

      brand: OrderModel.OrderBrandName(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      item: OrderModel.PlatformItem(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: OrderModel.FinancialBreakup(),

      gst_details: OrderModel.BagGST(),

      bag_id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      delivery_partner_id: Joi.number().allow(null),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      bsh_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      forward: Joi.boolean().allow(null),

      app_display_name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      ordering_store_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      manufacturer_address: Joi.any(),

      company_name: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel_logo: Joi.any(),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      priority_text: Joi.string().allow("").allow(null),

      picked_date: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      fulfilment_priority: Joi.number(),

      fulfilling_store: OrderModel.FulfillingStore(),

      total_bags: Joi.number(),

      operational_status: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      user: OrderModel.UserDataInfo(),

      billing_details: OrderModel.UserDetailsData(),

      lock_status: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      shipment_quantity: Joi.number(),

      meta: OrderModel.Meta(),

      delivery_details: OrderModel.UserDetailsData(),

      coupon: Joi.any(),

      invoice_id: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      enable_dp_tracking: Joi.boolean(),

      invoice: OrderModel.InvoiceInfo(),

      total_items: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      forward_shipment_id: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.OrderBags()),

      status: OrderModel.ShipmentStatusData(),

      gst_details: OrderModel.GSTDetailsData(),

      payment_methods: Joi.any(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      user_agent: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      order: OrderModel.OrderDetailsData(),

      shipment_status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      status: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),
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
      order_type: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      order_tags: Joi.array().items(Joi.any()),

      files: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      company_logo: Joi.string().allow(""),

      staff: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_platform: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      ordering_store: Joi.number(),

      comment: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static TaxDetails() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      tax_details: OrderModel.TaxDetails(),
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
      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      total_items: Joi.number(),

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
      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      channel: OrderModel.PlatformChannel(),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_created_time: Joi.string().allow(""),

      total_order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      success: Joi.boolean(),

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
      options: Joi.array().items(OrderModel.Options()),

      key: Joi.string().allow("").required(),

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
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      meta: Joi.any(),

      last_location_recieved_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),
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
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),
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
      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

      label: Joi.any(),

      data: Joi.any(),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      namespace: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      content_type: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_id: Joi.number(),

      company_id: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      excel_url: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),

      processing: Joi.number(),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      total: Joi.number(),

      user_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      status: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

      total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
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

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

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
      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      success: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
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
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      return_config: OrderModel.ReturnConfig(),

      _id: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      weight: OrderModel.Weight(),

      seller_identifier: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),
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

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      start_date: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l2_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      item_id: Joi.number().required(),

      meta: Joi.any(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      brand_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      brand: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      gender: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      attributes: OrderModel.Attributes().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      sgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),

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

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),
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

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),

      display_name: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      store_active_from: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      contact_person: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      parent_store_id: Joi.number(),

      meta: OrderModel.StoreMeta().required(),

      vat_no: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      mall_area: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      login_username: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      mall_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      country: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      restore_promos: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article: OrderModel.Article().required(),

      operational_status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      b_id: Joi.number().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      reasons: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      qc_required: Joi.any(),

      b_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      current_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      order_integration_id: Joi.string().allow("").allow(null),

      restore_coupon: Joi.boolean(),

      brand: OrderModel.Brand().required(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      item: OrderModel.Item().required(),

      no_of_bags_order: Joi.number(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      bag_update_time: Joi.number(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      article_details: OrderModel.ArticleDetails(),

      bag_status_history: OrderModel.BagStatusHistory(),

      ordering_store: OrderModel.Store(),

      tags: Joi.array().items(Joi.string().allow("")),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),
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

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),
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

      status: Joi.number(),

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
      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

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
      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      is_shipment_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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
      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),
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
      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

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
      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      status: Joi.number(),

      final_state: Joi.any(),

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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),
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
      owner: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

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
      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
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

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      item_size: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      company_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      identifier: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

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
      quantity: Joi.number().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      shipping_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      delivery_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      items: Joi.any().required(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      payment: Joi.any(),

      billing_address: OrderModel.OrderUser().required(),

      user: OrderModel.UserData().required(),

      shipment: OrderModel.ShipmentData(),

      cod_charges: Joi.number().required(),

      order_value: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_config: OrderModel.OrderConfig().required(),

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
      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

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
      type: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

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
      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

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

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),
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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),
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
      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      geo_location: Joi.any(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      meta: Joi.any(),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

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
      external_creation_date: Joi.string().allow(""),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      info: Joi.any(),

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
      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),

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

      is_inserted: Joi.boolean(),

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
      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
