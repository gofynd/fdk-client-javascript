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

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      cashback: Joi.number(),

      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      tax_collected_at_source: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      value_of_good: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      refund_credit: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      status: Joi.any().required(),

      item: OrderModel.PlatformItem(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),
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
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      first_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      payment_methods: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      application: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_bags_count: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      total_shipments_in_order: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      id: Joi.string().allow("").required(),

      company: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_created_at: Joi.string().allow("").required(),

      channel: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      amount_paid: Joi.number().required(),

      cashback: Joi.number().required(),

      price_effective: Joi.number().required(),

      gst_fee: Joi.number().required(),

      transfer_price: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      price_marked: Joi.number().required(),

      total_units: Joi.number().required(),

      discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      refund_credit: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      tax_collected_at_source: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      cod_charges: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),
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
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      notify_customer: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      store_id: Joi.number(),

      current_status_id: Joi.number().required(),

      created_at: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bag_id: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      entity_type: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      gst_details: OrderModel.BagGST(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      line_number: Joi.number(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      identifier: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      article: OrderModel.OrderBagArticle(),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
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

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      quantity: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_shipment_id: Joi.string().allow("").allow(null),
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

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),

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
      due_date: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      b2c_buyer_details: Joi.any().allow(null),

      awb_number: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      po_number: Joi.string().allow(""),

      return_details: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_affiliate_order_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      return_store_node: Joi.number(),

      dp_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      same_store_available: Joi.boolean().required(),

      bag_weight: Joi.any(),

      shipment_weight: Joi.number(),

      ewaybill_info: Joi.any().allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      assign_dp_from_sb: Joi.boolean(),

      weight: Joi.number().required(),

      lock_data: OrderModel.LockData(),

      store_invoice_updated_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any(),

      dp_sort_key: Joi.string().allow(""),

      external: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      po_invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      bsh_id: Joi.number(),

      delivery_partner_id: Joi.number().allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_id: Joi.number(),

      address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.OrderBags()),

      packaging_type: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      delivery_details: OrderModel.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      vertical: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number(),

      invoice_id: Joi.string().allow(""),

      payment_methods: Joi.any(),

      user_agent: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      fulfilling_store: OrderModel.FulfillingStore(),

      order: OrderModel.OrderDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      delivery_slot: Joi.any(),

      coupon: Joi.any(),

      billing_details: OrderModel.UserDetailsData(),

      total_bags: Joi.number(),

      dp_details: OrderModel.DPDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      invoice: OrderModel.InvoiceInfo(),

      priority_text: Joi.string().allow("").allow(null),

      forward_shipment_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      payments: OrderModel.ShipmentPayments(),

      picked_date: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      total_items: Joi.number(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      operational_status: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      lock_status: Joi.boolean(),

      user: OrderModel.UserDataInfo(),

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

  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),
    });
  }

  static TransactionData() {
    return Joi.object({
      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      employee_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      files: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      mongo_cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      staff: Joi.any(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      currency_symbol: Joi.string().allow(""),

      cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      ordering_store: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: OrderModel.TaxDetails(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

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
      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      index: Joi.number(),

      value: Joi.string().allow(""),
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

  static PlatformBreakupValues() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_created_time: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      payment_mode: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

      options: Joi.array().items(OrderModel.Options()),

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
      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),
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
      returned: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

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
      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

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

      company_id: Joi.string().allow(""),

      label: Joi.any(),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      data: Joi.any(),
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
      operation: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      size: Joi.number(),

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      failed: Joi.number(),

      successful: Joi.number(),

      excel_url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      total: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      processing: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      successful_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      store_name: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),
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
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),

      uploaded_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l2_category_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      gender: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      brand_id: Joi.number().required(),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      attributes: OrderModel.Attributes().required(),

      l3_category: Joi.number(),

      brand: Joi.string().allow("").required(),

      meta: Joi.any(),

      color: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      start_date: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

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
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      gst_number: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      product_return_config: Joi.any(),
    });
  }

  static Store() {
    return Joi.object({
      company_id: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      is_archived: Joi.boolean(),

      name: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      location_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      code: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      fulfillment_channel: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      store_email: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      meta: OrderModel.StoreMeta().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      pincode: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      parent_store_id: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),
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
      _id: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      a_set: Joi.any().allow(null),

      raw_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      return_config: OrderModel.ReturnConfig(),

      esp_modified: Joi.any(),

      weight: OrderModel.Weight(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      qc_required: Joi.any(),

      display_name: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      order_integration_id: Joi.string().allow("").allow(null),

      no_of_bags_order: Joi.number(),

      entity_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      b_id: Joi.number().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      gst_details: OrderModel.BagGSTDetails().required(),

      prices: OrderModel.Prices().required(),

      reasons: Joi.array().items(Joi.any()),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      quantity: Joi.number(),

      item: OrderModel.Item().required(),

      b_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      line_number: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      article_details: OrderModel.ArticleDetails(),

      bag_status_history: OrderModel.BagStatusHistory(),

      identifier: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      meta: OrderModel.BagMeta(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      ordering_store: OrderModel.Store(),

      article: OrderModel.Article().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      operational_status: Joi.string().allow(""),

      restore_promos: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      journey_type: Joi.string().allow("").required(),

      dates: OrderModel.Dates(),

      shipment_id: Joi.string().allow(""),
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
      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

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
      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

      invoice_receipt: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
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
      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),
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
      logo_url: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_id: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

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
      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
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
      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

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
      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      company_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      item_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      store_id: Joi.number().required(),

      quantity: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      item_size: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      attributes: Joi.any().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),
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

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

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
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
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
      billing_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      payment: Joi.any(),

      cod_charges: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      coupon: Joi.string().allow("").allow(null),

      order_priority: OrderModel.OrderPriority(),

      affiliate_order_id: Joi.string().allow(""),

      user: OrderModel.UserData().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      order_value: Joi.number().required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
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

  static HistoryDict() {
    return Joi.object({
      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

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

  static SmsDataPayload() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
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

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),
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
      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

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

  static BillingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

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
      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
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

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
