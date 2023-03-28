const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      value_of_good: Joi.number(),

      transfer_price: Joi.number(),
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
      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      status: Joi.any().required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      gst: OrderModel.GSTDetailsData(),
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
      payment_methods: Joi.any(),

      sla: Joi.any(),

      user: OrderModel.UserDataInfo(),

      prices: OrderModel.Prices(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_bags_count: Joi.number().required(),

      shipment_created_at: Joi.string().allow("").required(),

      company: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      shipment_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_shipments_in_order: Joi.number().required(),

      channel: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

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

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

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
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      version: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number().required(),

      coupon_value: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      promotion_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      refund_credit: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      transfer_price: Joi.number().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      status: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      bag_id: Joi.number(),

      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      state_id: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      article: OrderModel.OrderBagArticle(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      display_name: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      line_number: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      prices: OrderModel.Prices(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      id: Joi.number(),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
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
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      app_display_name: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      forward: Joi.boolean().allow(null),

      delivery_partner_id: Joi.number().allow(null),

      display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      store_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      state_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),
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

  static ShipmentMeta() {
    return Joi.object({
      return_affiliate_shipment_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      weight: Joi.number().required(),

      dp_id: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      external: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      lock_data: OrderModel.LockData(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_store_node: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      bag_weight: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      return_details: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      order_type: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      ewaybill_info: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      dp_options: Joi.any(),

      formatted: OrderModel.Formatted(),

      dp_name: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      user_agent: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      total_items: Joi.number(),

      meta: OrderModel.Meta(),

      shipment_status: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      lock_status: Joi.boolean(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      dp_details: OrderModel.DPDetailsData(),

      total_bags: Joi.number(),

      user: OrderModel.UserDataInfo(),

      platform_logo: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      forward_shipment_id: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      delivery_slot: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      packaging_type: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      company_details: OrderModel.CompanyDetails(),

      shipment_quantity: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      payment_methods: Joi.any(),

      gst_details: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      custom_meta: Joi.array().items(Joi.any()),

      status: OrderModel.ShipmentStatusData(),

      coupon: Joi.any(),

      invoice_id: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      billing_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      payment_mode: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      fulfilment_priority: Joi.number(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      cart_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      staff: Joi.any(),

      comment: Joi.string().allow(""),

      ordering_store: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      platform_user_details: OrderModel.PlatformUserDetails(),

      payment_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      currency_symbol: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      files: Joi.array().items(Joi.any()),
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

      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      tax_details: OrderModel.TaxDetails(),
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
      index: Joi.number(),

      text: Joi.string().allow(""),

      total_items: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      total_items: Joi.number(),

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

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      order_created_time: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      message: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),
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
      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      reason: Joi.string().allow(""),
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
      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

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
      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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

      message: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

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
      store_code: Joi.string().allow(""),

      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_name: Joi.string().allow(""),

      data: Joi.any(),

      invoice_status: Joi.string().allow(""),

      company_id: Joi.string().allow(""),
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
      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      size: Joi.number(),

      namespace: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      file_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      total: Joi.number(),

      failed: Joi.number(),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      successful: Joi.number(),

      store_id: Joi.number(),

      company_id: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      successful_shipments: Joi.array().items(Joi.any()),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

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
      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      esp_modified: Joi.any(),

      raw_meta: Joi.any(),

      a_set: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      identifiers: OrderModel.Identifier().required(),

      uid: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),

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
      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      location_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      meta: OrderModel.StoreMeta().required(),

      name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      longitude: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      s_id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      store_email: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      login_username: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      store_address_json: OrderModel.StoreAddress(),

      code: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      state: Joi.string().allow("").required(),
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
      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      department_id: Joi.number(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      attributes: OrderModel.Attributes().required(),

      slug_key: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      l1_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      brand: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      item_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      last_updated_at: Joi.string().allow(""),

      branch_url: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      modified_on: Joi.number(),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      logo: Joi.string().allow(""),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      article: OrderModel.Article().required(),

      journey_type: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      meta: OrderModel.BagMeta(),

      ordering_store: OrderModel.Store(),

      identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      restore_coupon: Joi.boolean(),

      quantity: Joi.number(),

      dates: OrderModel.Dates(),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.BagStatusHistory().required(),

      qc_required: Joi.any(),

      display_name: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      item: OrderModel.Item().required(),

      b_id: Joi.number().required(),

      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      order_integration_id: Joi.string().allow("").allow(null),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      shipment_id: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      bag_status_history: OrderModel.BagStatusHistory(),

      line_number: Joi.number(),

      operational_status: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      prices: OrderModel.Prices().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_update_time: Joi.number(),

      b_type: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      restore_promos: Joi.any(),

      reasons: Joi.array().items(Joi.any()),
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

      item_total: Joi.number().required(),

      current: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      success: Joi.boolean(),

      invoice_receipt: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_receipt: Joi.string().allow(""),
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

      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

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
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

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
      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

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
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

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
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      final_state: Joi.any(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      exception: Joi.string().allow(""),

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

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),
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

      name: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

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
      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
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
      bag_end_state: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
    });
  }

  static OrderUser() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      phone: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
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

  static ArticleDetails1() {
    return Joi.object({
      attributes: Joi.any().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),
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
      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
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
      identifier: Joi.any().required(),

      company_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      avl_qty: Joi.number().required(),

      item_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      item_size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      discount: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      quantity: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      shipping_address: OrderModel.OrderUser().required(),

      user: OrderModel.UserData().required(),

      items: Joi.any().required(),

      delivery_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      billing_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      payment: Joi.any(),

      shipment: OrderModel.ShipmentData(),

      coupon: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      payment_mode: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      order_value: Joi.number().required(),
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
      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),
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

  static PostHistoryFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

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
      brand_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      phone_number: Joi.number().required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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
      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),

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
      result: Joi.array().items(OrderModel.OrderStatusData()),

      success: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
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
      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),
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
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),

      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      address2: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),
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
      address2: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      slot: Joi.array().items(Joi.any()),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      tax_info: OrderModel.TaxInfo(),

      external_creation_date: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      billing_info: OrderModel.BillingInfo().required(),

      meta: Joi.any(),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      info: Joi.any(),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number().required(),
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
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

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
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),
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
      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
