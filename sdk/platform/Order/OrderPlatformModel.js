const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      department_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      images: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),

      ordering_channel: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

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

  static ShipmentItem() {
    return Joi.object({
      company: Joi.any(),

      payment_methods: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      shipment_id: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      sla: Joi.any(),

      channel: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      id: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      bsh_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      bag_state_mapper: OrderModel.BagStateMapper(),

      forward: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      bag_id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_value: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      state_id: Joi.number(),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      bag_id: Joi.number(),

      current_status_id: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
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

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
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

      discount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      brand_calculated_amount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      total_units: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      gst_fee: Joi.number().required(),

      refund_credit: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      value_of_good: Joi.number().required(),

      cashback: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      transfer_price: Joi.number().required(),

      size: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      coupon_value: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      price_marked: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      latitude: Joi.number(),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      identifier: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      current_status: OrderModel.CurrentStatus(),

      bag_configs: OrderModel.BagConfigs(),

      item: OrderModel.PlatformItem(),

      display_name: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      financial_breakup: OrderModel.FinancialBreakup(),

      entity_type: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      can_return: Joi.boolean(),

      article: OrderModel.OrderBagArticle(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      parent_promo_bags: Joi.any(),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),
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

  static PDFLinks() {
    return Joi.object({
      po_invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_pos: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),
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

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      return_affiliate_shipment_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      assign_dp_from_sb: Joi.boolean(),

      weight: Joi.number().required(),

      packaging_name: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      dp_options: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      ewaybill_info: Joi.any().allow(null),

      awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      shipment_weight: Joi.number(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      marketplace_store_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_details: Joi.any(),

      external: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      return_awb_number: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      b2c_buyer_details: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      bag_weight: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_store_node: Joi.number(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      pdf_links: OrderModel.PDFLinks(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_images: Joi.array().items(Joi.string().allow("")),

      user_agent: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      payments: OrderModel.ShipmentPayments(),

      custom_meta: Joi.array().items(Joi.any()),

      coupon: Joi.any(),

      order: OrderModel.OrderDetailsData(),

      shipment_quantity: Joi.number(),

      fulfilment_priority: Joi.number(),

      lock_status: Joi.boolean(),

      payment_methods: Joi.any(),

      user: OrderModel.UserDataInfo(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      total_items: Joi.number(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow("").allow(null),

      meta: OrderModel.Meta(),

      affiliate_details: OrderModel.AffiliateDetails(),

      forward_shipment_id: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      enable_dp_tracking: Joi.boolean(),

      total_bags: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      operational_status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      invoice_id: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      shipment_status: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      status: OrderModel.ShipmentStatusData(),

      company_details: OrderModel.CompanyDetails(),

      dp_details: OrderModel.DPDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),
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
      extra_meta: Joi.any(),

      transaction_data: OrderModel.TransactionData(),

      order_platform: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      staff: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      cart_id: Joi.number(),

      mongo_cart_id: Joi.number(),

      ordering_store: Joi.number(),

      order_type: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),
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
      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

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
      value: Joi.string().allow(""),

      index: Joi.number(),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
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
      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      total_order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),
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
      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      page: OrderModel.Page(),

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
      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: Joi.any(),

      updated_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      awb: Joi.string().allow(""),
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
      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),
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
      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

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
      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      label: Joi.any(),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),

      data: Joi.any(),
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
      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      size: Joi.number(),

      upload: OrderModel.FileUploadResponse(),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      excel_url: Joi.string().allow(""),

      company_id: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      store_id: Joi.number(),

      processing: Joi.number(),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      total: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      status: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      current: Joi.number(),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      l2_category_id: Joi.number(),

      brand_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      l3_category_name: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      gender: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      item_id: Joi.number().required(),

      code: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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
      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

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
      product_return_config: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      additional_contact_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),

      documents: OrderModel.StoreDocuments(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      latitude: Joi.number().required(),

      version: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      address_type: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      latitude: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      mall_name: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      company_id: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      brand_id: Joi.any(),

      fulfillment_channel: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      is_archived: Joi.boolean(),

      order_integration_id: Joi.string().allow(""),

      packaging_material_count: Joi.number(),

      store_active_from: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      alohomora_user_id: Joi.number(),

      parent_store_id: Joi.number(),

      s_id: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      phone: Joi.number().required(),

      code: Joi.string().allow(""),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      company: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      logo: Joi.string().allow(""),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),
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
      uid: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      esp_modified: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_update_time: Joi.number(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      identifier: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      restore_promos: Joi.any(),

      bag_status_history: OrderModel.BagStatusHistory(),

      quantity: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      seller_identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      item: OrderModel.Item().required(),

      display_name: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      qc_required: Joi.any(),

      article_details: OrderModel.ArticleDetails(),

      ordering_store: OrderModel.Store(),

      prices: OrderModel.Prices().required(),

      dates: OrderModel.Dates(),

      line_number: Joi.number(),

      operational_status: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      b_id: Joi.number().required(),

      restore_coupon: Joi.boolean(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      entity_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.Brand().required(),

      article: OrderModel.Article().required(),

      b_type: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      parent_promo_bags: Joi.any(),

      no_of_bags_order: Joi.number(),
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
      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),
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
      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      is_shipment_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),
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

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

      company_id: Joi.number(),

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

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
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
      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

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
      first_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
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
      transfer_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      amount_paid: Joi.number().required(),

      item_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      unit_price: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      affiliate_store_id: Joi.string().allow("").required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),

      dimension: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      items: Joi.any().required(),

      payment: Joi.any(),

      discount: Joi.number().required(),

      user: OrderModel.UserData().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      order_priority: OrderModel.OrderPriority(),

      billing_address: OrderModel.OrderUser().required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),
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

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),
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
      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),
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
      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
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

  static HistoryDict() {
    return Joi.object({
      l2_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),
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

  static SmsDataPayload() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
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
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),
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

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      alternate_email: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      alternate_email: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      external_customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
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
      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),
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
      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      currency_info: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),
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
      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      is_upserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

      is_inserted: Joi.boolean(),
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

      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
