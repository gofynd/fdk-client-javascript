const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
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

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
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
      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      discount: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      gst: OrderModel.GSTDetailsData(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      total_shipments_in_order: Joi.number().required(),

      company: Joi.any(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      prices: OrderModel.Prices(),

      sla: Joi.any(),

      application: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      shipment_created_at: Joi.number().required(),

      channel: Joi.any(),

      payment_methods: Joi.any(),

      created_at: Joi.string().allow("").required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      return_config: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.number(),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      created_at: Joi.string().allow("").allow(null),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      state_type: Joi.string().allow(""),
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
      cart_conditions: Joi.any(),

      item_criteria: OrderModel.ItemCriterias(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      coupon_effective_discount: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      cashback: Joi.number().required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      size: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),

      price_effective: Joi.number().required(),

      cod_charges: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      brand: OrderModel.OrderBrandName(),

      article: OrderModel.OrderBagArticle(),

      bag_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      entity_type: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      gst_details: OrderModel.BagGST(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      quantity: Joi.number(),

      bag_configs: OrderModel.BagConfigs(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      credit_note_url: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),
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

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_invoice: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      error_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
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
      marketplace_store_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      b2c_buyer_details: Joi.any().allow(null),

      debug_info: OrderModel.DebugInfo(),

      store_invoice_updated_date: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      bag_weight: Joi.any(),

      external: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      packaging_name: Joi.string().allow(""),

      weight: Joi.number().required(),

      same_store_available: Joi.boolean().required(),

      shipment_weight: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      lock_data: OrderModel.LockData(),

      awb_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_store_node: Joi.number(),

      due_date: Joi.string().allow(""),

      return_details: Joi.any(),

      order_type: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      assign_dp_from_sb: Joi.boolean(),

      formatted: OrderModel.Formatted(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      due_date: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      created_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      state_id: Joi.number(),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bsh_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      state_type: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

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
      phone: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),
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

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_quantity: Joi.number(),

      enable_dp_tracking: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      priority_text: Joi.string().allow("").allow(null),

      shipment_status: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      status: OrderModel.ShipmentStatusData(),

      operational_status: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      order: OrderModel.OrderDetailsData(),

      user: OrderModel.UserDataInfo(),

      delivery_details: OrderModel.UserDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      affiliate_details: OrderModel.AffiliateDetails(),

      journey_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      delivery_slot: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      invoice_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      total_bags: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      meta: OrderModel.Meta(),

      gst_details: OrderModel.GSTDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      shipment_id: Joi.string().allow("").required(),

      company_details: OrderModel.CompanyDetails(),

      picked_date: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      user_agent: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      total_items: Joi.number(),

      invoice: OrderModel.EinvoiceInfo(),

      vertical: Joi.string().allow("").allow(null),

      coupon: Joi.any(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
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

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_first_name: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      company_logo: Joi.string().allow(""),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      ordering_store: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),
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

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      tax_details: OrderModel.TaxDetails(),

      payment_methods: Joi.any(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      order: OrderModel.OrderDict(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      total_items: Joi.number(),

      value: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      meta: Joi.any(),

      order_id: Joi.string().allow(""),
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

      lane: Joi.string().allow(""),

      total_count: Joi.number(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      page: OrderModel.Page(),
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
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.Options()),

      key: Joi.string().allow("").required(),

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
      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      updated_time: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),

      results: Joi.array().items(OrderModel.PlatformTrack()),
    });
  }

  static AdvanceFilterInfo() {
    return Joi.object({
      processed: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      request_details: Joi.any(),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),
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
      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

      company_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      data: Joi.any(),

      invoice: Joi.any(),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),
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
      content_type: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      size: Joi.number(),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed: Joi.number(),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      successful: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      processing: Joi.number(),

      store_id: Joi.number(),

      file_name: Joi.string().allow(""),

      company_id: Joi.number(),

      excel_url: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),

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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      uploaded_by: Joi.string().allow(""),

      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      script_last_ran: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      logo: Joi.string().allow(""),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      pickup_location: Joi.string().allow("").allow(null),
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
      child_details: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      uid: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      esp_modified: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category_name: Joi.string().allow(""),

      gender: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      code: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      department_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      l2_category_id: Joi.number(),

      name: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      item_id: Joi.number().required(),

      l1_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
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

  static BagGSTDetails() {
    return Joi.object({
      igst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
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

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      product_return_config: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      stage: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      gst_number: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      area: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      fulfillment_channel: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      parent_store_id: Joi.number(),

      created_at: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      state: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      store_email: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      city: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      latitude: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      contact_person: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      store_address_json: OrderModel.StoreAddress(),

      name: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      longitude: Joi.number().required(),

      company_id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      brand: OrderModel.Brand().required(),

      article: OrderModel.Article().required(),

      parent_promo_bags: Joi.any(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      operational_status: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      entity_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      b_id: Joi.number().required(),

      applied_promos: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      dates: OrderModel.Dates(),

      journey_type: Joi.string().allow("").required(),

      prices: OrderModel.Prices().required(),

      bag_update_time: Joi.number(),

      identifier: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      reasons: Joi.array().items(Joi.any()),

      b_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      article_details: OrderModel.ArticleDetails(),

      no_of_bags_order: Joi.number(),

      bag_status_history: OrderModel.BagStatusHistory(),

      meta: OrderModel.BagMeta(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      line_number: Joi.number(),

      gst_details: OrderModel.BagGSTDetails().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      ordering_store: OrderModel.Store(),

      shipment_id: Joi.string().allow(""),

      qc_required: Joi.any(),

      display_name: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      quantity: Joi.number(),

      restore_promos: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      affiliate_details: OrderModel.AffiliateDetails(),
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

      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      current: Joi.number().required(),

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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      success: Joi.boolean(),

      invoice_receipt: Joi.string().allow(""),

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
      status: Joi.number(),

      message: Joi.string().allow(""),

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
      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
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

      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),
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
      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),

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

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),
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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),

      status: Joi.number(),

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

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      quantity: Joi.number().required(),

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
      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),
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
      discount: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      amount_paid: Joi.number().required(),

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      transfer_price: Joi.number().required(),

      quantity: Joi.number().required(),

      unit_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      pdf_links: OrderModel.MarketPlacePdf(),
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
      order_priority: OrderModel.OrderPriority(),

      order_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      items: Joi.any().required(),

      discount: Joi.number().required(),

      payment: Joi.any(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      shipping_address: OrderModel.OrderUser().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipment: OrderModel.ShipmentData(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      user: OrderModel.UserData().required(),

      coupon: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),
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
      secret: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
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

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
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
      message: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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
      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
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
      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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
      id: Joi.number().required(),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
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
      primary_mobile_number: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      external_customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      geo_location: Joi.any(),

      address1: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      primary_mobile_number: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      currency_info: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

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

      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      logo_url: Joi.any(),

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
      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
