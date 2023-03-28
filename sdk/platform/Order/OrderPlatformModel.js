const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      value_of_good: Joi.number(),

      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      ordering_channel: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      is_anonymous_user: Joi.boolean(),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      channel: Joi.any(),

      total_bags_count: Joi.number().required(),

      payment_methods: Joi.any(),

      shipment_id: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      fulfilling_centre: Joi.string().allow("").required(),

      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      id: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),
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
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      transfer_price: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      identifiers: OrderModel.Identifier().required(),

      discount: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      refund_credit: Joi.number().required(),

      amount_paid: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      size: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      total_units: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_marked: Joi.number().required(),

      cod_charges: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      status: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
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
      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

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

  static PlatformDeliveryAddress() {
    return Joi.object({
      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      financial_breakup: OrderModel.FinancialBreakup(),

      brand: OrderModel.OrderBrandName(),

      identifier: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      bag_configs: OrderModel.BagConfigs(),

      entity_type: Joi.string().allow(""),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      item: OrderModel.PlatformItem(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGST(),

      article: OrderModel.OrderBagArticle(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      app_display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      reasons: Joi.array().items(Joi.any()),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),

      bsh_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      length: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
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

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      is_priority: Joi.boolean(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
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

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      timestamp: OrderModel.ShipmentTimeStamp(),

      debug_info: OrderModel.DebugInfo(),

      return_awb_number: Joi.string().allow(""),

      external: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      marketplace_store_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      dp_id: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      assign_dp_from_sb: Joi.boolean(),

      return_details: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      awb_number: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      ewaybill_info: Joi.any().allow(null),

      lock_data: OrderModel.LockData(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      return_store_node: Joi.number(),

      packaging_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      shipment_volumetric_weight: Joi.number(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      delivery_slot: Joi.any(),

      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      total_items: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      operational_status: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      enable_dp_tracking: Joi.boolean(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      meta: OrderModel.Meta(),

      company_details: OrderModel.CompanyDetails(),

      dp_details: OrderModel.DPDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      payment_mode: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      total_bags: Joi.number(),

      shipment_status: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      coupon: Joi.any(),

      platform_logo: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      packaging_type: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      shipment_quantity: Joi.number(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      journey_type: Joi.string().allow(""),

      forward_shipment_id: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      affiliate_details: OrderModel.AffiliateDetails(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      picked_date: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      lock_status: Joi.boolean(),

      vertical: Joi.string().allow("").allow(null),

      payments: OrderModel.ShipmentPayments(),

      fulfilment_priority: Joi.number(),

      payment_methods: Joi.any(),

      delivery_details: OrderModel.UserDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),

      last_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      unique_reference_number: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      company_logo: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      files: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      transaction_data: OrderModel.TransactionData(),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),

      order_type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
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
      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),
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
      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

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

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      payment_mode: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      meta: Joi.any(),

      order_value: Joi.number(),

      total_order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      total_count: Joi.number(),

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
      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),

      text: Joi.string().allow("").required(),

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
      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
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
      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
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

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      data: Joi.any(),

      label: Joi.any(),

      store_name: Joi.string().allow(""),
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
      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      namespace: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      store_id: Joi.number(),

      company_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      status: Joi.string().allow(""),

      processing: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      display_name: Joi.string().allow(""),

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
      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      success: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      invoice_prefix: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      modified_on: Joi.number(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l2_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_cancel: Joi.boolean(),

      meta: Joi.any(),

      l1_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      slug_key: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      department_id: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      version: Joi.string().allow(""),

      pincode: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      landmark: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

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

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),
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
      documents: OrderModel.StoreDocuments(),

      timing: Joi.array().items(Joi.any()),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      vat_no: Joi.string().allow("").allow(null),

      s_id: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      location_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      company_id: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      store_email: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      is_active: Joi.boolean(),

      phone: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      brand_id: Joi.any(),

      order_integration_id: Joi.string().allow(""),

      packaging_material_count: Joi.number(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      latitude: Joi.number().required(),

      parent_store_id: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      dimensions: OrderModel.Dimensions(),

      return_config: OrderModel.ReturnConfig(),

      weight: OrderModel.Weight(),

      raw_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      a_set: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      original_bag_list: Joi.array().items(Joi.number()),

      brand: OrderModel.Brand().required(),

      operational_status: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      restore_promos: Joi.any(),

      identifier: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      b_id: Joi.number().required(),

      bag_update_time: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      meta: OrderModel.BagMeta(),

      bag_status_history: OrderModel.BagStatusHistory(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      entity_type: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      no_of_bags_order: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      parent_promo_bags: Joi.any(),

      item: OrderModel.Item().required(),

      quantity: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      qc_required: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      journey_type: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow("").allow(null),

      restore_coupon: Joi.boolean(),

      affiliate_details: OrderModel.AffiliateDetails(),

      ordering_store: OrderModel.Store(),

      article: OrderModel.Article().required(),

      prices: OrderModel.Prices().required(),

      line_number: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      display_name: Joi.string().allow(""),
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

      item_total: Joi.number().required(),

      size: Joi.number().required(),

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
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      reason_ids: Joi.array().items(Joi.number()),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),
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

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
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
      bags: Joi.array().items(OrderModel.Bags()),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      affiliate_shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),
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

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),
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

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),
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

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
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
      affiliate_store_id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      identifier: Joi.any().required(),

      hsn_code_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      discount: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      item_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      sku: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      delivery_charge: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      coupon: Joi.string().allow("").allow(null),

      order_priority: OrderModel.OrderPriority(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      order_value: Joi.number().required(),

      items: Joi.any().required(),

      payment: Joi.any(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      user: OrderModel.UserData().required(),

      billing_address: OrderModel.OrderUser().required(),

      discount: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

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
      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
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

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

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
      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),

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
      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

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
      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      user: Joi.string().allow("").required(),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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
      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      phone_number: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),
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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      alternate_mobile_number: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),
    });
  }

  static BillingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      tax_info: OrderModel.TaxInfo(),

      external_creation_date: Joi.string().allow(""),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
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
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),

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
      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

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
      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),
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
