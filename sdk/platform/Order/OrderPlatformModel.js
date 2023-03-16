const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_effective: Joi.number(),

      value_of_good: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_return: Joi.boolean(),

      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      id: Joi.number(),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_return: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      company: Joi.any(),

      user: OrderModel.UserDataInfo(),

      application: Joi.any(),

      shipment_created_at: Joi.number().required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      prices: OrderModel.Prices(),

      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      id: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),

      channel: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_methods: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

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

  static FulfillingStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
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

  static ShipmentMeta() {
    return Joi.object({
      formatted: OrderModel.Formatted(),

      awb_number: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      shipment_volumetric_weight: Joi.number(),

      marketplace_store_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      dp_options: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      weight: Joi.number().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_sort_key: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_details: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      lock_data: OrderModel.LockData(),

      store_invoice_updated_date: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      bag_weight: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      order_type: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      external: Joi.any(),

      dp_name: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      due_date: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

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
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      state_type: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.number(),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      current_status_id: Joi.number().required(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

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
      gst_fee: Joi.number().required(),

      transfer_price: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      amount_paid_roundoff: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      size: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      total_units: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_effective: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      promotion_effective_discount: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      item: OrderModel.PlatformItem(),

      seller_identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      current_status: OrderModel.CurrentStatus(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      financial_breakup: OrderModel.FinancialBreakup(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel_logo: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      state_type: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      created_at: Joi.string().allow(""),

      bsh_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      delivery_partner_id: Joi.number().allow(null),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      fulfilling_store: OrderModel.FulfillingStore(),

      shipment_quantity: Joi.number(),

      user: OrderModel.UserDataInfo(),

      picked_date: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      enable_dp_tracking: Joi.boolean(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      total_bags: Joi.number(),

      payment_mode: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      vertical: Joi.string().allow("").allow(null),

      invoice: OrderModel.EinvoiceInfo(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      delivery_slot: Joi.any(),

      invoice_id: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      prices: OrderModel.Prices(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_id: Joi.string().allow("").required(),

      fulfilment_priority: Joi.number(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      packaging_type: Joi.string().allow(""),

      coupon: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      operational_status: Joi.string().allow(""),

      total_items: Joi.number(),

      user_agent: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      platform_logo: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      delivery_details: OrderModel.UserDetailsData(),

      meta: OrderModel.Meta(),

      shipment_status: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),
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
      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      amount_paid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      staff_id: Joi.number(),

      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      platform_user_details: OrderModel.PlatformUserDetails(),

      transaction_data: OrderModel.TransactionData(),

      mongo_cart_id: Joi.number(),

      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),

      comment: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_platform: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      cart_id: Joi.number(),

      ordering_store: Joi.number(),

      extra_meta: Joi.any(),

      files: Joi.array().items(Joi.any()),

      order_tags: Joi.array().items(Joi.any()),

      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

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
      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      index: Joi.number(),
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
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      total_order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      meta: Joi.any(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),

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
      value: Joi.number().required(),

      key: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

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

      reason: Joi.string().allow(""),

      meta: Joi.any(),

      raw_status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
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

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

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
      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      identifier: Joi.string().allow(""),

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
      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),
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
      namespace: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      total: Joi.number(),

      successful: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      batch_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),
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
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Reason() {
    return Joi.object({
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

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
      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      l2_category_id: Joi.number(),

      can_cancel: Joi.boolean(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      gender: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      branch_url: Joi.string().allow("").allow(null),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      size: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      item_id: Joi.number().required(),

      brand: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      l1_category_id: Joi.number(),

      brand_id: Joi.number().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      image: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      is_default: Joi.boolean(),

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
      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      _id: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      return_config: OrderModel.ReturnConfig(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),
    });
  }

  static StoreAddress() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
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

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      documents: OrderModel.StoreDocuments(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static Store() {
    return Joi.object({
      store_email: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      login_username: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow("").allow(null),

      mall_area: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      alohomora_user_id: Joi.number(),

      location_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      packaging_material_count: Joi.number(),

      order_integration_id: Joi.string().allow(""),

      store_active_from: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      is_enabled_for_recon: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      company: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),

      created_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      logo: Joi.string().allow(""),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

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

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      current_operational_status: OrderModel.BagStatusHistory().required(),

      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      affiliate_details: OrderModel.AffiliateDetails(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      restore_coupon: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      article: OrderModel.Article().required(),

      restore_promos: Joi.any(),

      applied_promos: Joi.array().items(Joi.any()),

      current_status: OrderModel.BagStatusHistory().required(),

      display_name: Joi.string().allow(""),

      qc_required: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      identifier: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      prices: OrderModel.Prices().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      bag_status_history: OrderModel.BagStatusHistory(),

      quantity: Joi.number(),

      shipment_id: Joi.string().allow(""),

      b_id: Joi.number().required(),

      ordering_store: OrderModel.Store(),

      tags: Joi.array().items(Joi.string().allow("")),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      operational_status: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      dates: OrderModel.Dates(),

      parent_promo_bags: Joi.any(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      reasons: Joi.array().items(Joi.any()),

      journey_type: Joi.string().allow("").required(),

      b_type: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      meta: OrderModel.BagMeta(),
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

      current: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),
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
      invoice_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_receipt: Joi.string().allow(""),

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
      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),
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
      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),
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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_name: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      company_id: Joi.number(),
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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),

      data: OrderModel.ProductsReasonsData(),
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

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

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
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),
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
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      pdf_links: OrderModel.MarketPlacePdf(),

      store_id: Joi.number().required(),

      company_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      identifier: Joi.any().required(),

      hsn_code_id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      item_id: Joi.number().required(),

      unit_price: Joi.number().required(),

      avl_qty: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      coupon: Joi.string().allow("").allow(null),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      items: Joi.any().required(),

      user: OrderModel.UserData().required(),

      discount: Joi.number().required(),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      shipping_address: OrderModel.OrderUser().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      payment: Joi.any(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),
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

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

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
      errors: Joi.array().items(Joi.string().allow("")),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      order_details: OrderModel.OrderDetails().required(),
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

      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      transaction_data: Joi.any(),

      meta: Joi.any(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

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

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      title: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      geo_location: Joi.any(),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),
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

  static BillingInfo() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      meta: Joi.any(),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      billing_info: OrderModel.BillingInfo().required(),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
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
      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

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

      is_inserted: Joi.boolean(),

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

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
