const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      cashback: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_return: Joi.boolean(),

      name: Joi.string().allow(""),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_return: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      item: OrderModel.PlatformItem(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      user: OrderModel.UserDataInfo(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_id: Joi.string().allow(""),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      channel: Joi.any(),

      application: Joi.any(),

      company: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
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

      tax_collected_at_source: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      cashback: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      amount_paid: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      coupon_value: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cod_charges: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      price_effective: Joi.number().required(),

      discount: Joi.number().required(),

      total_units: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      gst_details: OrderModel.BagGST(),

      parent_promo_bags: Joi.any(),

      display_name: Joi.string().allow(""),

      line_number: Joi.number(),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      brand: OrderModel.OrderBrandName(),

      can_cancel: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      article: OrderModel.OrderBagArticle(),

      bag_id: Joi.number().required(),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      financial_breakup: OrderModel.FinancialBreakup(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),

      bag_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow("").required(),

      bsh_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      reasons: Joi.array().items(Joi.any()),

      delivery_partner_id: Joi.number().allow(null),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),
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
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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
      box_type: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_order_id: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_id: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_affiliate_order_id: Joi.string().allow(""),

      return_details: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      bag_weight: Joi.any(),

      lock_data: OrderModel.LockData(),

      dp_options: Joi.any(),

      external: Joi.any(),

      order_type: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      dp_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      due_date: Joi.string().allow(""),

      return_store_node: Joi.number(),

      packaging_name: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      return_awb_number: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      formatted: OrderModel.Formatted(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      ewaybill_info: Joi.any().allow(null),

      awb_number: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a4: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),

      order_item_id: Joi.string().allow(""),

      channel_shipment_id: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      coupon: Joi.any(),

      gst_details: OrderModel.GSTDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      invoice: OrderModel.InvoiceInfo(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      meta: OrderModel.Meta(),

      payment_methods: Joi.any(),

      total_bags: Joi.number(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      journey_type: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      forward_shipment_id: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      billing_details: OrderModel.UserDetailsData(),

      packaging_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      platform_logo: Joi.string().allow(""),

      total_items: Joi.number(),

      company_details: OrderModel.CompanyDetails(),

      payment_mode: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      picked_date: Joi.string().allow(""),

      lock_status: Joi.boolean(),

      priority_text: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      fulfilment_priority: Joi.number(),

      invoice_id: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      shipment_quantity: Joi.number(),

      vertical: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.FulfillingStore(),

      user: OrderModel.UserDataInfo(),

      status: OrderModel.ShipmentStatusData(),

      shipment_status: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
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

  static TransactionData() {
    return Joi.object({
      amount_paid: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      payment_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      mongo_cart_id: Joi.number(),

      company_logo: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      files: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      employee_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_platform: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      transaction_data: OrderModel.TransactionData(),

      staff: Joi.any(),

      extra_meta: Joi.any(),

      comment: Joi.string().allow(""),
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
      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

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
      value: Joi.string().allow(""),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

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
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      total_order_value: Joi.number(),

      meta: Joi.any(),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

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

      key: Joi.string().allow("").required(),

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

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

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
      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      s3_key: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),
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
      batch_id: Joi.string().allow("").required(),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_name: Joi.string().allow(""),

      data: Joi.any(),

      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      label: Joi.any(),
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

      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static bulkListingData() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      store_id: Joi.number(),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      successful: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),

      total: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

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

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
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
      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      success: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      igst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
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

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

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
      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      product_return_config: Joi.any(),

      gst_number: Joi.string().allow(""),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      updated_at: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      country_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      updated_at: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      store_active_from: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      latitude: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      login_username: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      country: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      longitude: Joi.number().required(),

      order_integration_id: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      s_id: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      modified_on: Joi.number(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      start_date: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      created_on: Joi.number(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l2_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      size: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      color: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      l2_category_id: Joi.number(),

      code: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      item_id: Joi.number().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      brand_id: Joi.number().required(),
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

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      identifiers: OrderModel.Identifier().required(),

      esp_modified: Joi.any(),

      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      is_set: Joi.boolean(),
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

  static BagDetailsPlatformResponse() {
    return Joi.object({
      applied_promos: Joi.array().items(Joi.any()),

      gst_details: OrderModel.BagGSTDetails().required(),

      parent_promo_bags: Joi.any(),

      dates: OrderModel.Dates(),

      bag_status_history: OrderModel.BagStatusHistory(),

      operational_status: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      display_name: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_update_time: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      line_number: Joi.number(),

      ordering_store: OrderModel.Store(),

      journey_type: Joi.string().allow("").required(),

      article_details: OrderModel.ArticleDetails(),

      qc_required: Joi.any(),

      brand: OrderModel.Brand().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_id: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      entity_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      b_type: Joi.string().allow(""),

      restore_promos: Joi.any(),

      b_id: Joi.number().required(),

      item: OrderModel.Item().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      article: OrderModel.Article().required(),

      prices: OrderModel.Prices().required(),

      no_of_bags_order: Joi.number(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      quantity: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),
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
      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_id: Joi.string().allow(""),

      payment_receipt: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),
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

      shipment_id: Joi.string().allow(""),

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

      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

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
      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
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

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),
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
      created_at: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      id: Joi.number().required(),

      company_id: Joi.number(),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

      line_number: Joi.number(),

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
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

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
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      final_state: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
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
      country: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),
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
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
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
      price_effective: Joi.number().required(),

      identifier: Joi.any().required(),

      store_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      transfer_price: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      company_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      price_marked: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      item_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      unit_price: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      shipping_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      discount: Joi.number().required(),

      payment: Joi.any(),

      shipment: OrderModel.ShipmentData(),

      user: OrderModel.UserData().required(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow("").allow(null),

      billing_address: OrderModel.OrderUser().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
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

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      secret: Joi.string().allow("").required(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),
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
      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

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

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
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
      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

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
      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      order_details: OrderModel.OrderDetails().required(),

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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

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

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),

      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      geo_location: Joi.any(),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      billing_info: OrderModel.BillingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),
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

      refund_by: Joi.string().allow(""),

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

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

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

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
