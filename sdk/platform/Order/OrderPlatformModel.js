const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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
      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),

      id: Joi.number(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      total_shipment_bags: Joi.number().required(),

      item_quantity: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),
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
      sla: Joi.any(),

      company: Joi.any(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      channel: Joi.any(),

      shipment_created_at: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      application: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_methods: Joi.any(),

      total_bags_count: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_centre: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),
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
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      page: Joi.any(),

      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      credit_note_url: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      coupon_code: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
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

  static EInvoice() {
    return Joi.object({
      error_message: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      same_store_available: Joi.boolean().required(),

      store_invoice_updated_date: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_details: Joi.any(),

      bag_weight: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      ewaybill_info: Joi.any().allow(null),

      external: Joi.any(),

      weight: Joi.number().required(),

      dp_options: Joi.any(),

      formatted: OrderModel.Formatted(),

      b2c_buyer_details: Joi.any().allow(null),

      shipment_weight: Joi.number(),

      awb_number: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      shipment_volumetric_weight: Joi.number(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      lock_data: OrderModel.LockData(),

      assign_dp_from_sb: Joi.boolean(),

      return_awb_number: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      debug_info: OrderModel.DebugInfo(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      pdf_links: OrderModel.PDFLinks(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),
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

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
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
      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      store_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      delivery_awb_number: Joi.string().allow(""),

      updated_at: Joi.number(),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      delivery_partner_id: Joi.number(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      return_config: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      coupon_value: Joi.number().required(),

      amount_paid: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      price_effective: Joi.number().required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_name: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      total_units: Joi.number().required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      latitude: Joi.number(),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      bag_configs: OrderModel.BagConfigs(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      identifier: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      financial_breakup: OrderModel.FinancialBreakup(),

      quantity: Joi.number(),

      can_return: Joi.boolean(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bsh_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      store_id: Joi.number(),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      kafka_sync: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      state_type: Joi.string().allow(""),

      state_id: Joi.number(),

      display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      platform_logo: Joi.string().allow(""),

      coupon: Joi.any(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      packaging_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      affiliate_details: OrderModel.AffiliateDetails(),

      payment_mode: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      status: OrderModel.ShipmentStatusData(),

      total_bags: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      shipment_quantity: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      invoice_id: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      dp_details: OrderModel.DPDetailsData(),

      fulfilling_store: OrderModel.FulfillingStore(),

      picked_date: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      total_items: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      company_details: OrderModel.CompanyDetails(),

      shipment_status: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      billing_details: OrderModel.UserDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.OrderBags()),

      journey_type: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      gst_details: OrderModel.GSTDetailsData(),

      meta: OrderModel.Meta(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      delivery_slot: Joi.any(),

      enable_dp_tracking: Joi.boolean(),

      invoice: OrderModel.EinvoiceInfo(),

      operational_status: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      user_agent: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),
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
      terminal_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      entity: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

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

  static OrderMeta() {
    return Joi.object({
      ordering_store: Joi.number(),

      customer_note: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      order_type: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      comment: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      cart_id: Joi.number(),
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
      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),
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
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

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

      total_order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),

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
      shipment_type: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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
      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),
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

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
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
      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),

      data: Joi.any(),

      store_code: Joi.string().allow(""),
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
      upload: OrderModel.FileUploadResponse(),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      namespace: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      total: Joi.number(),

      file_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      batch_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      store_id: Joi.number(),

      user_id: Joi.string().allow(""),

      successful: Joi.number(),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      failed: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      area: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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
      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

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
      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      product_return_config: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),
    });
  }

  static Store() {
    return Joi.object({
      code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      order_integration_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      packaging_material_count: Joi.number(),

      is_enabled_for_recon: Joi.boolean(),

      meta: OrderModel.StoreMeta().required(),

      s_id: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      pincode: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      address2: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      code: Joi.string().allow(""),

      last_updated_at: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      name: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_cancel: Joi.boolean(),

      gender: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      attributes: OrderModel.Attributes().required(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      l1_category_id: Joi.number(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      identifiers: OrderModel.Identifier().required(),

      code: Joi.string().allow(""),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      uid: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      dimensions: OrderModel.Dimensions(),
    });
  }

  static Brand() {
    return Joi.object({
      start_date: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      company: Joi.string().allow("").required(),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      created_on: Joi.number(),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      logo: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      sgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

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

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      ordering_store: OrderModel.Store(),

      item: OrderModel.Item().required(),

      applied_promos: Joi.array().items(Joi.any()),

      affiliate_details: OrderModel.AffiliateDetails(),

      restore_coupon: Joi.boolean(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      b_id: Joi.number().required(),

      reasons: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      current_status: OrderModel.BagStatusHistory().required(),

      parent_promo_bags: Joi.any(),

      original_bag_list: Joi.array().items(Joi.number()),

      order_integration_id: Joi.string().allow("").allow(null),

      line_number: Joi.number(),

      dates: OrderModel.Dates(),

      seller_identifier: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      article: OrderModel.Article().required(),

      entity_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      display_name: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      shipment_id: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      journey_type: Joi.string().allow("").required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      meta: OrderModel.BagMeta(),

      article_details: OrderModel.ArticleDetails(),

      quantity: Joi.number(),

      bag_status_history: OrderModel.BagStatusHistory(),

      qc_required: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      restore_promos: Joi.any(),

      operational_status: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

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
      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),
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
      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow(""),

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
      error: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),
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
      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

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
      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),
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
      from_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),
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
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),
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
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      identifier: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

  static ArticleDetails1() {
    return Joi.object({
      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),
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

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      address2: Joi.string().allow("").allow(null),
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
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      affiliate_meta: Joi.any().required(),

      sku: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      avl_qty: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      quantity: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      identifier: Joi.any().required(),

      discount: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      unit_price: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      coupon: Joi.string().allow("").allow(null),

      shipment: OrderModel.ShipmentData(),

      payment: Joi.any(),

      discount: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      shipping_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      items: Joi.any().required(),

      user: OrderModel.UserData().required(),

      order_value: Joi.number().required(),
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

      id: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      identifier: Joi.string().allow(""),
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
      type: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      bag_id: Joi.number(),
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
      customer_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

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
      id: Joi.number().required(),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
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
      errors: Joi.array().items(Joi.string().allow("")),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
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
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      tax: OrderModel.Tax(),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      priority: Joi.number(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      shipping_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      primary_email: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      geo_location: Joi.any(),

      landmark: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
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
      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),

      external_creation_date: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").allow(null),

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

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),
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

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
