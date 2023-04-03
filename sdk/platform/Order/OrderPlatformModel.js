const Joi = require("joi");

class OrderModel {
  static UserDataInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      coupon_value: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      price_effective: Joi.number(),
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
      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      id: Joi.number(),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),
    });
  }

  static BagUnit() {
    return Joi.object({
      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),
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
      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_status: OrderModel.ShipmentStatus(),

      sla: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      channel: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_id: Joi.string().allow(""),

      application: Joi.any(),
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

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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

  static PDFLinks() {
    return Joi.object({
      invoice_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

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

      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      dp_sort_key: Joi.string().allow(""),

      return_store_node: Joi.number(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      po_number: Joi.string().allow(""),

      weight: Joi.number().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_name: Joi.string().allow(""),

      return_details: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      return_awb_number: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      dp_options: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      debug_info: OrderModel.DebugInfo(),

      dp_id: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      external: Joi.any(),

      assign_dp_from_sb: Joi.boolean(),

      packaging_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      lock_data: OrderModel.LockData(),

      shipment_volumetric_weight: Joi.number(),

      awb_number: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      bag_weight: Joi.any(),

      formatted: OrderModel.Formatted(),

      forward_affiliate_order_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      size_level_total_qty: Joi.number().allow(null),

      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_value: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      state_id: Joi.number(),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),

      bsh_id: Joi.number(),

      bag_id: Joi.number(),

      status: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      gst_tag: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      item_name: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      discount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      transfer_price: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      total_units: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      amount_paid: Joi.number().required(),

      coupon_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      identifiers: OrderModel.Identifier().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      price_effective: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
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
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow("").allow(null),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      state_id: Joi.number(),

      delivery_partner_id: Joi.number(),

      bag_id: Joi.number(),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      current_status_id: Joi.number().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_configs: OrderModel.BagConfigs(),

      brand: OrderModel.OrderBrandName(),

      line_number: Joi.number(),

      can_cancel: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      current_status: OrderModel.CurrentStatus(),

      seller_identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      bag_id: Joi.number().required(),

      quantity: Joi.number(),

      entity_type: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),
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

      address: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      company_details: OrderModel.CompanyDetails(),

      affiliate_details: OrderModel.AffiliateDetails(),

      user: OrderModel.UserDataInfo(),

      delivery_slot: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      dp_details: OrderModel.DPDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      journey_type: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      picked_date: Joi.string().allow(""),

      coupon: Joi.any(),

      invoice_id: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.FulfillingStore(),

      total_bags: Joi.number(),

      total_items: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      priority_text: Joi.string().allow("").allow(null),

      payment_methods: Joi.any(),

      forward_shipment_id: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      packaging_type: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      status: OrderModel.ShipmentStatusData(),

      payment_mode: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      gst_details: OrderModel.GSTDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      meta: OrderModel.Meta(),

      enable_dp_tracking: Joi.boolean(),

      platform_logo: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      lock_status: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      billing_details: OrderModel.UserDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
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
      payment_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),
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
      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      staff: Joi.any(),

      files: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      comment: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      cart_id: Joi.number(),

      employee_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      order_platform: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: OrderModel.TaxDetails(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

      index: Joi.number(),

      total_items: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

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

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      order_value: Joi.number(),

      meta: Joi.any(),

      total_order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

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
      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),

      raw_status: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      identifier: Joi.string().allow(""),

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

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      invoice: Joi.any(),

      label: Joi.any(),

      invoice_status: Joi.string().allow(""),

      data: Joi.any(),
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

      tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),

      store_id: Joi.number(),

      batch_id: Joi.string().allow(""),

      total: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      failed: Joi.number(),

      successful: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      error: Joi.string().allow(""),

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

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      status: Joi.boolean(),

      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static Brand() {
    return Joi.object({
      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      start_date: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      seller_identifier: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),
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

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null).required(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      area: Joi.string().allow(""),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

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
      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      timing: Joi.array().items(Joi.any()),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static Store() {
    return Joi.object({
      brand_id: Joi.any(),

      company_id: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      store_email: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      store_active_from: Joi.string().allow("").allow(null),

      parent_store_id: Joi.number(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      contact_person: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      login_username: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      packaging_material_count: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      code: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      s_id: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      brand_id: Joi.number().required(),

      branch_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      l3_category: Joi.number(),

      l2_category_id: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      item_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      webstore_product_url: Joi.string().allow("").allow(null),

      last_updated_at: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      gender: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      l1_category_id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      sgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      affiliate_details: OrderModel.AffiliateDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      restore_promos: Joi.any(),

      brand: OrderModel.Brand().required(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      bag_update_time: Joi.number(),

      journey_type: Joi.string().allow("").required(),

      operational_status: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      parent_promo_bags: Joi.any(),

      qc_required: Joi.any(),

      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      b_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      article: OrderModel.Article().required(),

      applied_promos: Joi.array().items(Joi.any()),

      no_of_bags_order: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      dates: OrderModel.Dates(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      seller_identifier: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      article_details: OrderModel.ArticleDetails(),

      item: OrderModel.Item().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      reasons: Joi.array().items(Joi.any()),

      original_bag_list: Joi.array().items(Joi.number()),

      bag_status_history: OrderModel.BagStatusHistory(),

      restore_coupon: Joi.boolean(),

      meta: OrderModel.BagMeta(),

      b_id: Joi.number().required(),

      entity_type: Joi.string().allow(""),
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

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),

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
      set_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),
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

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
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
      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      lock_status: Joi.boolean().allow(null),
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
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      logo_url: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

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

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

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
      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),
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
      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),

      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

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
      secret: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),
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
      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

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

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      meta: Joi.any(),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),
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

      affiliate_priority_code: Joi.string().allow("").allow(null),

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
      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      unit_price: Joi.number().required(),

      company_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      sku: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      store_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      identifier: Joi.any().required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      discount: Joi.number().required(),

      user: OrderModel.UserData().required(),

      shipment: OrderModel.ShipmentData(),

      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      items: Joi.any().required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow("").allow(null),
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

  static HistoryDict() {
    return Joi.object({
      l1_detail: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      type: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

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
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
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

  static SmsDataPayload() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      message: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),

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

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),

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

  static ShippingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      amount: Joi.number().required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      priority: Joi.number(),

      location_id: Joi.number().required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),
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

      shipping_info: OrderModel.ShippingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      meta: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()),

      billing_info: OrderModel.BillingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      info: Joi.any(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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
      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),
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

      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
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

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
