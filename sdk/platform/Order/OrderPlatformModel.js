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
      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      size: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      code: Joi.string().allow(""),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      price_marked: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number(),

      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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
      total_bags_count: Joi.number().required(),

      channel: Joi.any(),

      application: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      prices: OrderModel.Prices(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      shipment_status: OrderModel.ShipmentStatus(),

      sla: Joi.any(),

      payment_methods: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_created_at: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      company: Joi.any(),
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

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      due_date: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),
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

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_no: Joi.number(),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      bag_weight: Joi.any(),

      ewaybill_info: Joi.any().allow(null),

      shipment_volumetric_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      due_date: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      external: Joi.any(),

      weight: Joi.number().required(),

      debug_info: OrderModel.DebugInfo(),

      shipment_weight: Joi.number(),

      marketplace_store_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      po_number: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      formatted: OrderModel.Formatted(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      dp_options: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_details: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      b2c_buyer_details: Joi.any().allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),
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

      cashback: Joi.number().required(),

      transfer_price: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      cashback_applied: Joi.number().required(),

      refund_credit: Joi.number().required(),

      cod_charges: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      brand_calculated_amount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_fee: Joi.number().required(),

      coupon_value: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      total_units: Joi.number().required(),
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
      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      state_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      store_id: Joi.number(),

      updated_at: Joi.number(),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      current_status_id: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      line_number: Joi.number(),

      display_name: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_return: Joi.boolean(),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      reasons: Joi.array().items(Joi.any()),

      bsh_id: Joi.number(),

      store_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      width: Joi.number(),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_id: Joi.number(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      address: Joi.any(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
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

  static FulfillingStore() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_images: Joi.array().items(Joi.string().allow("")),

      gst_details: OrderModel.GSTDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      delivery_details: OrderModel.UserDetailsData(),

      fulfilment_priority: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      picked_date: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      platform_logo: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      billing_details: OrderModel.UserDetailsData(),

      dp_details: OrderModel.DPDetailsData(),

      shipment_status: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      company_details: OrderModel.CompanyDetails(),

      priority_text: Joi.string().allow("").allow(null),

      order: OrderModel.OrderDetailsData(),

      invoice_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      operational_status: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      journey_type: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      user_agent: Joi.string().allow(""),

      total_items: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      payments: OrderModel.ShipmentPayments(),

      invoice: OrderModel.EinvoiceInfo(),

      shipment_quantity: Joi.number(),

      coupon: Joi.any(),

      payment_mode: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      total_bags: Joi.number(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      fulfilling_store: OrderModel.FulfillingStore(),

      delivery_slot: Joi.any(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      status: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      user: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      mongo_cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      staff: Joi.any(),

      files: Joi.array().items(Joi.any()),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      employee_id: Joi.number(),

      extra_meta: Joi.any(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      customer_note: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      company_logo: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),
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

      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),
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

      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      channel: OrderModel.PlatformChannel(),

      user_info: OrderModel.UserDataInfo(),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),

      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_created_time: Joi.string().allow(""),
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
      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

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
      text: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value: Joi.number().required(),

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
      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

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
      report_requested_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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
      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      label: Joi.any(),

      data: Joi.any(),

      invoice_status: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),
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
      method: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      namespace: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      excel_url: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      processing: Joi.number(),

      file_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      successful: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      store_id: Joi.number(),

      store_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      brand: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      branch_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      slug_key: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      l2_category_id: Joi.number(),

      brand_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      size: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      item_id: Joi.number().required(),

      code: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      logo: Joi.string().allow(""),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.number(),

      company: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code_id: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),
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

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      uid: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      code: Joi.string().allow(""),

      weight: OrderModel.Weight(),

      raw_meta: Joi.any(),

      _id: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      latitude: Joi.number().required(),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
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

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
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
      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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

      timing: Joi.array().items(Joi.any()),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      is_enabled_for_recon: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      mall_area: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      parent_store_id: Joi.number(),

      is_active: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      order_integration_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      address2: Joi.string().allow(""),

      company_id: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      latitude: Joi.number().required(),

      packaging_material_count: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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
      item: OrderModel.Item().required(),

      brand: OrderModel.Brand().required(),

      restore_promos: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      b_type: Joi.string().allow(""),

      line_number: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      shipment_id: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      bag_status_history: OrderModel.BagStatusHistory(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      meta: OrderModel.BagMeta(),

      order_integration_id: Joi.string().allow("").allow(null),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      article: OrderModel.Article().required(),

      no_of_bags_order: Joi.number(),

      ordering_store: OrderModel.Store(),

      applied_promos: Joi.array().items(Joi.any()),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      b_id: Joi.number().required(),

      restore_coupon: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      operational_status: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      current_status: OrderModel.BagStatusHistory().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      qc_required: Joi.any(),

      article_details: OrderModel.ArticleDetails(),

      identifier: Joi.string().allow(""),

      dates: OrderModel.Dates(),
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

      item_total: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      shipment_id: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

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

      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      store_id: Joi.number().required(),

      set_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),
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
      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
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

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      is_locked: Joi.boolean(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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
      platform_name: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      title: Joi.string().allow(""),

      id: Joi.number().required(),

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
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

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
      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),

      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),
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

  static ArticleDetails1() {
    return Joi.object({
      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      first_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
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
      affiliate_meta: Joi.any().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      avl_qty: Joi.number().required(),

      quantity: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static OrderInfo() {
    return Joi.object({
      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      items: Joi.any().required(),

      coupon: Joi.string().allow("").allow(null),

      order_value: Joi.number().required(),

      user: OrderModel.UserData().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      payment: Joi.any(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),
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
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

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

  static OrderConfig() {
    return Joi.object({
      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),
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

      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
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

  static HistoryDict() {
    return Joi.object({
      l3_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      createdat: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

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

  static SmsDataPayload() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),
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
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      amount: Joi.number().required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      shipping_type: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      state_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      meta: Joi.any(),

      currency_info: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
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

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

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
      is_inserted: Joi.boolean(),

      is_upserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
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
      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
