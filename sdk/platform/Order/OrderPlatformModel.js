const Joi = require("joi");

class OrderModel {
  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      id: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      status: Joi.any().required(),

      item: OrderModel.PlatformItem(),

      bag_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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
      created_at: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      prices: OrderModel.Prices(),

      shipment_status: OrderModel.ShipmentStatus(),

      channel: Joi.any(),

      sla: Joi.any(),

      application: Joi.any(),

      company: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_bags_count: Joi.number().required(),

      shipment_created_at: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      payment_methods: Joi.any(),

      id: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),
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
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      quantity: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
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

      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_invoice: Joi.string().allow(""),

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
      forward_affiliate_order_id: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      dp_sort_key: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      debug_info: OrderModel.DebugInfo(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      external: Joi.any(),

      shipment_weight: Joi.number(),

      formatted: OrderModel.Formatted(),

      marketplace_store_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      dp_name: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      lock_data: OrderModel.LockData(),

      return_details: Joi.any(),

      packaging_name: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      awb_number: Joi.string().allow(""),

      bag_weight: Joi.any(),

      due_date: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_store_node: Joi.number(),

      weight: Joi.number().required(),

      return_awb_number: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      ewaybill_info: Joi.any().allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      credit_note_url: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      reasons: Joi.array().items(Joi.any()),

      delivery_partner_id: Joi.number().allow(null),

      status: Joi.string().allow("").required(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      created_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      app_display_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bsh_id: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_awb_number: Joi.string().allow(""),

      updated_at: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
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
      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
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

      promotion_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_effective_discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      total_units: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      cashback_applied: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_value: Joi.number().required(),

      refund_credit: Joi.number().required(),

      cashback: Joi.number().required(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      bag_id: Joi.number().required(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      entity_type: Joi.string().allow(""),

      line_number: Joi.number(),

      article: OrderModel.OrderBagArticle(),

      item: OrderModel.PlatformItem(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      financial_breakup: OrderModel.FinancialBreakup(),

      prices: OrderModel.Prices(),

      brand: OrderModel.OrderBrandName(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
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

  static CompanyDetails() {
    return Joi.object({
      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      company_name: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      payments: OrderModel.ShipmentPayments(),

      shipment_quantity: Joi.number(),

      dp_details: OrderModel.DPDetailsData(),

      user: OrderModel.UserDataInfo(),

      vertical: Joi.string().allow("").allow(null),

      order: OrderModel.OrderDetailsData(),

      billing_details: OrderModel.UserDetailsData(),

      operational_status: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      delivery_details: OrderModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      affiliate_details: OrderModel.AffiliateDetails(),

      coupon: Joi.any(),

      fulfilment_priority: Joi.number(),

      packaging_type: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      gst_details: OrderModel.GSTDetailsData(),

      payment_mode: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      user_agent: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      total_bags: Joi.number(),

      total_items: Joi.number(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      prices: OrderModel.Prices(),

      shipment_status: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      invoice: OrderModel.EinvoiceInfo(),

      fulfilling_store: OrderModel.FulfillingStore(),

      meta: OrderModel.Meta(),

      journey_type: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
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
      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      status: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      order_platform: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      order_tags: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      company_logo: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      customer_note: Joi.string().allow(""),

      extra_meta: Joi.any(),

      files: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      cart_id: Joi.number(),

      ordering_store: Joi.number(),

      comment: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),
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
      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),
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
      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      total_items: Joi.number(),
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

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      total_order_value: Joi.number(),

      meta: Joi.any(),
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

      total_count: Joi.number(),

      success: Joi.boolean(),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),
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
      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
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

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

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
      status: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      request_details: Joi.any(),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

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
      data: Joi.any(),

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      label: Joi.any(),

      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),
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
      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      namespace: Joi.string().allow(""),

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      excel_url: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_name: Joi.string().allow(""),

      processing: Joi.number(),

      total: Joi.number(),

      file_name: Joi.string().allow(""),

      failed: Joi.number(),

      batch_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      user_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      successful: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

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
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      display_name: Joi.string().allow(""),
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

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),
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
      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      brand_calculated_amount: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
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
      esp_modified: Joi.any(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      _id: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      size: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      code: Joi.string().allow(""),

      a_set: Joi.any().allow(null),

      raw_meta: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number().required(),

      brand_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      attributes: OrderModel.Attributes().required(),

      size: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      branch_url: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l2_category_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      l1_category_id: Joi.number(),

      meta: Joi.any(),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

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

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),
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

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      timing: Joi.array().items(Joi.any()),

      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      gst_number: Joi.string().allow(""),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static Store() {
    return Joi.object({
      location_type: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      packaging_material_count: Joi.number(),

      brand_id: Joi.any(),

      is_archived: Joi.boolean(),

      order_integration_id: Joi.string().allow(""),

      latitude: Joi.number().required(),

      is_enabled_for_recon: Joi.boolean(),

      city: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      vat_no: Joi.string().allow("").allow(null),

      parent_store_id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      longitude: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      address1: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      modified_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      pickup_location: Joi.string().allow("").allow(null),
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

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      restore_promos: Joi.any(),

      b_id: Joi.number().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      operational_status: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      b_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      bag_update_time: Joi.number(),

      dates: OrderModel.Dates(),

      affiliate_details: OrderModel.AffiliateDetails(),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      restore_coupon: Joi.boolean(),

      current_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      entity_type: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      line_number: Joi.number(),

      article: OrderModel.Article().required(),

      item: OrderModel.Item().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      parent_promo_bags: Joi.any(),

      ordering_store: OrderModel.Store(),

      applied_promos: Joi.array().items(Joi.any()),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      prices: OrderModel.Prices().required(),

      brand: OrderModel.Brand().required(),

      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      reasons: Joi.array().items(Joi.any()),

      meta: OrderModel.BagMeta(),

      journey_type: Joi.string().allow("").required(),

      qc_required: Joi.any(),
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

      size: Joi.number().required(),

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
      shipment_id: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      set_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),

      is_shipment_locked: Joi.boolean(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),

      check_response: Joi.array().items(OrderModel.CheckResponse()),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number().required(),

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

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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
      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),
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
      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      meta: Joi.any(),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

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

  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
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

  static AffiliateConfig() {
    return Joi.object({
      app: OrderModel.AffiliateAppConfig(),

      inventory: OrderModel.AffiliateInventoryConfig(),
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
      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
    });
  }

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
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
      item_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      modified_on: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      store_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      company_id: Joi.number().required(),

      unit_price: Joi.number().required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),

      attributes: Joi.any().required(),
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
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

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
      shipping_address: OrderModel.OrderUser().required(),

      coupon: Joi.string().allow("").allow(null),

      payment: Joi.any(),

      user: OrderModel.UserData().required(),

      discount: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      items: Joi.any().required(),

      delivery_charges: Joi.number().required(),
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
      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      bag_id: Joi.number(),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),
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

  static SmsDataPayload() {
    return Joi.object({
      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      errors: Joi.array().items(Joi.string().allow("")),

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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      middle_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      middle_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      geo_location: Joi.any(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address1: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
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

      charges: Joi.array().items(OrderModel.Charge()),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      billing_info: OrderModel.BillingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      meta: Joi.any(),

      currency_info: Joi.any(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

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
      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),
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

      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),
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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
