const Joi = require("joi");

class OrderModel {
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_return: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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
      channel: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      sla: Joi.any(),

      prices: OrderModel.Prices(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_methods: Joi.any(),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_centre: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      id: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      shipment_created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

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

  static FulfillingStore() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address: Joi.string().allow("").allow(null).required(),
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

  static ShipmentMeta() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      dp_sort_key: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      bag_weight: Joi.any(),

      po_number: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      return_details: Joi.any(),

      due_date: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      marketplace_store_id: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      b2c_buyer_details: Joi.any().allow(null),

      dp_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      ewaybill_info: Joi.any().allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      external: Joi.any(),

      assign_dp_from_sb: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      return_store_node: Joi.number(),

      weight: Joi.number().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      same_store_available: Joi.boolean().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      forward_affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      credit_note_url: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      quantity: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      manufacturer_address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      id: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      bs_id: Joi.number().required(),

      notify_customer: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      store_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),

      bsh_id: Joi.number(),
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

  static PlatformDeliveryAddress() {
    return Joi.object({
      state: Joi.string().allow(""),

      latitude: Joi.number(),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

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
      cashback_applied: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cashback: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      price_marked: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      identifiers: OrderModel.Identifier().required(),

      gst_tag: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      delivery_charge: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      transfer_price: Joi.number().required(),

      value_of_good: Joi.number().required(),
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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      store_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      current_status_id: Joi.number().required(),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      gst_fee: Joi.number(),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      article: OrderModel.OrderBagArticle(),

      item: OrderModel.PlatformItem(),

      prices: OrderModel.Prices(),

      brand: OrderModel.OrderBrandName(),

      display_name: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      current_status: OrderModel.CurrentStatus(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      bag_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGST(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      entity_type: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      fulfilling_store: OrderModel.FulfillingStore(),

      payments: OrderModel.ShipmentPayments(),

      shipment_status: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      total_items: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      journey_type: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      company_details: OrderModel.CompanyDetails(),

      order: OrderModel.OrderDetailsData(),

      forward_shipment_id: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number(),

      operational_status: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      payment_mode: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      platform_logo: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      gst_details: OrderModel.GSTDetailsData(),

      lock_status: Joi.boolean(),

      shipment_quantity: Joi.number(),

      picked_date: Joi.string().allow(""),

      payment_methods: Joi.any(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      bags: Joi.array().items(OrderModel.OrderBags()),

      enable_dp_tracking: Joi.boolean(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      meta: OrderModel.Meta(),

      custom_meta: Joi.array().items(Joi.any()),

      invoice: OrderModel.InvoiceInfo(),

      delivery_slot: Joi.any(),

      user_agent: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      total_bags: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      billing_details: OrderModel.UserDetailsData(),

      coupon: Joi.any(),
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
      entity: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      order_platform: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      cart_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      transaction_data: OrderModel.TransactionData(),

      comment: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      files: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      customer_note: Joi.string().allow(""),

      ordering_store: Joi.number(),

      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),
    });
  }

  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),
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

      index: Joi.number(),

      total_items: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

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
      channel: OrderModel.PlatformChannel(),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      meta: Joi.any(),

      total_order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      total_count: Joi.number(),

      message: Joi.string().allow(""),
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

      options: Joi.array().items(OrderModel.Options()),

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
      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: Joi.any(),

      updated_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),
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
      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),
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
      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

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
      label: Joi.any(),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),
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
      content_type: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      tags: Joi.array().items(Joi.string().allow("")),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      user_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      store_id: Joi.number(),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      processing: Joi.number(),

      id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      successful: Joi.number(),

      store_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(OrderModel.bulkListingData()),

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

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),
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
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      uid: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      code: Joi.string().allow(""),

      identifiers: OrderModel.Identifier().required(),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      child_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      brand_id: Joi.number().required(),

      l2_category_id: Joi.number(),

      name: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      meta: Joi.any(),

      color: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      start_date: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      script_last_ran: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      company: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      is_virtual_invoice: Joi.boolean().allow(null),

      created_on: Joi.number(),

      brand_name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      value_of_good: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

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
      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      product_return_config: Joi.any(),

      stage: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      documents: OrderModel.StoreDocuments(),

      additional_contact_details: Joi.any(),
    });
  }

  static Store() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      login_username: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      brand_id: Joi.any(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      packaging_material_count: Joi.number(),

      city: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      phone: Joi.number().required(),

      store_email: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      article: OrderModel.Article().required(),

      item: OrderModel.Item().required(),

      prices: OrderModel.Prices().required(),

      restore_coupon: Joi.boolean(),

      affiliate_details: OrderModel.AffiliateDetails(),

      brand: OrderModel.Brand().required(),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      original_bag_list: Joi.array().items(Joi.number()),

      quantity: Joi.number(),

      restore_promos: Joi.any(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      applied_promos: Joi.array().items(Joi.any()),

      b_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      qc_required: Joi.any(),

      current_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      dates: OrderModel.Dates(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      no_of_bags_order: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      bag_status_history: OrderModel.BagStatusHistory(),

      ordering_store: OrderModel.Store(),

      b_id: Joi.number().required(),

      meta: OrderModel.BagMeta(),

      bag_update_time: Joi.number(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      shipment_id: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      entity_type: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),
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

      size: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),
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

      message: Joi.string().allow(""),

      status: Joi.number(),

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
      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      store_id: Joi.number().required(),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),
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

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

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
      logo_url: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

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

  static ProductsReasonsFilters() {
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

  static ProductsReasons() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),

      data: OrderModel.ProductsReasonsData(),
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

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      meta: Joi.any(),

      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      description: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),
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

      config: OrderModel.AffiliateConfig(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),
    });
  }

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      quantity: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      shipments: Joi.number().required(),

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      journey: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
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
      identifier: Joi.any().required(),

      amount_paid: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      company_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      store_id: Joi.number().required(),

      avl_qty: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      unit_price: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),

      items: Joi.any().required(),

      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

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
      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),
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
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
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

      phone_number: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      message: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),
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
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
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

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      alternate_email: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      geo_location: Joi.any(),

      alternate_email: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),
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
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),

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
      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

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

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
