const Joi = require("joi");

class OrderModel {
  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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
      refund_credit: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_value: Joi.number(),

      cashback: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      department_id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),
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

  static BagUnit() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      item_quantity: Joi.number().required(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      total_shipment_bags: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      user: OrderModel.UserDataInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_created_at: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      company: Joi.any(),

      application: Joi.any(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      created_at: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      id: Joi.string().allow("").required(),

      sla: Joi.any(),

      channel: Joi.any(),

      total_bags_count: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_methods: Joi.any(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
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

  static OrderDetailsData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      tax_details: Joi.any(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bag_id: Joi.number(),

      current_status_id: Joi.number().required(),

      status: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      updated_at: Joi.number(),

      delivery_partner_id: Joi.number(),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

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
      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      size: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      total_units: Joi.number().required(),

      value_of_good: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      refund_credit: Joi.number().required(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      cod_charges: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      coupon_value: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      item_name: Joi.string().allow("").required(),
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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
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

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      prices: OrderModel.Prices(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      financial_breakup: OrderModel.FinancialBreakup(),

      seller_identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      bag_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      line_number: Joi.number(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      is_default: Joi.boolean(),

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

  static EInvoice() {
    return Joi.object({
      signed_qr_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
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
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      forward_affiliate_shipment_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      packaging_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      dp_name: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      forward_affiliate_order_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      return_affiliate_order_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      b2c_buyer_details: Joi.any().allow(null),

      external: Joi.any(),

      formatted: OrderModel.Formatted(),

      box_type: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      marketplace_store_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_details: Joi.any(),

      weight: Joi.number().required(),

      ewaybill_info: Joi.any().allow(null),

      bag_weight: Joi.any(),

      same_store_available: Joi.boolean().required(),

      awb_number: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      debug_info: OrderModel.DebugInfo(),

      dp_sort_key: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      bsh_id: Joi.number(),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      state_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.OrderBags()),

      invoice_id: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow("").required(),

      fulfilment_priority: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      packaging_type: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      invoice: OrderModel.EinvoiceInfo(),

      user: OrderModel.UserDataInfo(),

      custom_meta: Joi.array().items(Joi.any()),

      payments: OrderModel.ShipmentPayments(),

      total_bags: Joi.number(),

      total_items: Joi.number(),

      user_agent: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      payment_mode: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      shipment_quantity: Joi.number(),

      operational_status: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      affiliate_details: OrderModel.AffiliateDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      company_details: OrderModel.CompanyDetails(),

      fulfilling_store: OrderModel.FulfillingStore(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      delivery_details: OrderModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      status: OrderModel.ShipmentStatusData(),

      platform_logo: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      coupon: Joi.any(),

      shipment_status: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),
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
      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      staff_id: Joi.number(),

      last_name: Joi.string().allow(""),

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
      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      employee_id: Joi.number(),

      extra_meta: Joi.any(),

      mongo_cart_id: Joi.number(),

      cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      ordering_store: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      files: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      staff: Joi.any(),
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

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      payment_methods: Joi.any(),
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

      total_items: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
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
      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      user_info: OrderModel.UserDataInfo(),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      message: Joi.string().allow(""),

      page: OrderModel.Page(),

      success: Joi.boolean(),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),
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

      value: Joi.number().required(),

      key: Joi.string().allow("").required(),

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
      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

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
      processed: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

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
      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

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

      label: Joi.any(),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      data: Joi.any(),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),
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

      operation: Joi.string().allow(""),

      size: Joi.number(),

      namespace: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      method: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      processing_shipments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),

      total: Joi.number(),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      file_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      store_code: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      successful: Joi.number(),

      user_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      processing: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      store_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      uploaded_on: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l2_category_id: Joi.number(),

      meta: Joi.any(),

      brand: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      can_return: Joi.boolean(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      webstore_product_url: Joi.string().allow("").allow(null),

      attributes: OrderModel.Attributes().required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l1_category_id: Joi.number(),

      item_id: Joi.number().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      company: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      script_last_ran: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      logo: Joi.string().allow(""),
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
      gst_tag: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      created_at: Joi.string().allow("").required(),
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

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),
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
      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static Store() {
    return Joi.object({
      order_integration_id: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      parent_store_id: Joi.number(),

      is_archived: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      login_username: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      updated_at: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      brand_id: Joi.any(),

      address1: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.number().required(),

      is_enabled_for_recon: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),
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
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      size: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      uid: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow("").allow(null),

      item: OrderModel.Item().required(),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      article_details: OrderModel.ArticleDetails(),

      brand: OrderModel.Brand().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      current_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      prices: OrderModel.Prices().required(),

      bag_update_time: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.any(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      operational_status: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      ordering_store: OrderModel.Store(),

      no_of_bags_order: Joi.number(),

      restore_coupon: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      article: OrderModel.Article().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      b_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      b_type: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      line_number: Joi.number(),

      restore_promos: Joi.any(),

      bag_status_history: OrderModel.BagStatusHistory(),
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

      size: Joi.number().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),
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
      invoice_receipt: Joi.string().allow(""),

      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

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

      error: Joi.string().allow(""),

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
      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

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

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),
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
      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      lock_status: Joi.boolean().allow(null),

      affiliate_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),
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
      from_datetime: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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
      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      shipments: Joi.number().required(),

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),

      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),
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

      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),
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

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      amount_paid: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      discount: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      identifier: Joi.any().required(),
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

      cod_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: OrderModel.OrderUser().required(),

      order_value: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      items: Joi.any().required(),

      user: OrderModel.UserData().required(),

      discount: Joi.number().required(),

      payment: Joi.any(),

      coupon: Joi.string().allow("").allow(null),

      shipping_address: OrderModel.OrderUser().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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

  static OrderConfig() {
    return Joi.object({
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      create_user: Joi.boolean(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderModel.OrderInfo().required(),

      order_config: OrderModel.OrderConfig().required(),

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

      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
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
      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

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

  static HistoryDict() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
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
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      id: Joi.number().required(),

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
      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      customer_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      gender: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      customer_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      currency_info: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),
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

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      acknowledged: Joi.boolean(),

      is_inserted: Joi.boolean(),

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
      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
