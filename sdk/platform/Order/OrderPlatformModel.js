const Joi = require("joi");

class OrderModel {
  static ActivityHistory() {
    return Joi.object({
      createdat: Joi.string().allow(""),
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      user: Joi.string().allow(""),
    });
  }
  static AdditionalContactDetails() {
    return Joi.object({
      number: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static AppliedFilters() {
    return Joi.object({
      deployment_stores: Joi.array().items(Joi.string().allow("")),
      dp: Joi.array().items(Joi.number()),
      from_date: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      stores: Joi.array().items(Joi.string().allow("")),
      to_date: Joi.string().allow(""),
    });
  }
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }
  static ArticleBrand() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static ArticleIdentifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }
  static ArticleMeta() {
    return Joi.object({
      service: Joi.string().allow(""),
    });
  }
  static ArticlePrice() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      transfer: Joi.number(),
    });
  }
  static BagArticle() {
    return Joi.object({
      _id: Joi.string().allow(""),
      child_details: Joi.any(),
      code: Joi.string().allow(""),
      esp_modified: Joi.boolean(),
      identifiers: OrderModel.ArticleIdentifiers(),
      is_set: Joi.boolean(),
      return_config: OrderModel.BagArticleReturnConfig(),
      seller_identifier: Joi.string().allow(""),
      set: OrderModel.Set(),
      size: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static BagArticleReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
  static BagBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static BagCurrentStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),
      state_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static BagCurrStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean(),
      enable_tracking: Joi.boolean(),
      is_active: Joi.boolean(),
      is_customer_return_allowed: Joi.boolean(),
      is_returnable: Joi.boolean(),
    });
  }
  static BagFinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_fee: Joi.string().allow(""),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      hsn_code: Joi.string().allow(""),
      identifiers: OrderModel.Identifiers(),
      item_name: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      size: Joi.string().allow(""),
      total_units: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static BagItem() {
    return Joi.object({
      attributes: OrderModel.BagItemAttributes(),
      brand: Joi.string().allow(""),
      brand_id: Joi.number(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      code: Joi.string().allow(""),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l2_category: Joi.array().items(Joi.string().allow("")),
      l3_category: Joi.number(),
      l3_category_name: Joi.string().allow(""),
      last_updated_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      size: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
    });
  }
  static BagItemAttributes() {
    return Joi.object({
      brand_name: Joi.string().allow(""),
      country_of_origin: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
    });
  }
  static BagPrices() {
    return Joi.object({
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static Bags() {
    return Joi.object({
      id: Joi.number(),
      item: OrderModel.BagItem(),
    });
  }
  static BagsDetails() {
    return Joi.object({
      article: OrderModel.BagArticle(),
      bag_status: OrderModel.BagStatus(),
      breakup_values: OrderModel.BagBreakupValues(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      current_status: OrderModel.BagCurrentStatus(),
      financial_breakup: Joi.array().items(OrderModel.BagFinancialBreakup()),
      gst_details: OrderModel.GstDetails(),
      id: Joi.number(),
      item: OrderModel.BagItem(),
      payment_methods: Joi.any(),
      prices: OrderModel.BagPrices(),
      status: OrderModel.BagCurrStatus(),
      update_time: Joi.number(),
    });
  }
  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),
      app_state_name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }
  static BagStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStatusBagStateMapper(),
      state_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static BagStatusBagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),
      app_state_name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }
  static BillingAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      company: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      province: Joi.string().allow(""),
      province_code: Joi.string().allow(""),
      zip: Joi.string().allow(""),
    });
  }
  static CanBreakRequestBody() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static CanBreakResponse() {
    return Joi.object({
      status: Joi.boolean().required(),
      valid_actions: Joi.any().required(),
    });
  }
  static Channel() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Closing() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }
  static Company() {
    return Joi.object({
      agreement_start_date: Joi.string().allow(""),
      business_type: Joi.string().allow(""),
      company_name: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      exchange_allowed: Joi.boolean(),
      exchange_within_days: Joi.number(),
      fynd_a_fit_available: Joi.boolean(),
      id: Joi.number(),
      meta: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      pan_no: Joi.string().allow(""),
      payment_procesing_charge: Joi.number(),
      return_allowed: Joi.boolean(),
      return_within_days: Joi.number(),
    });
  }
  static Customer() {
    return Joi.object({
      accepts_marketing: Joi.boolean(),
      accepts_marketing_updated_at: Joi.string().allow(""),
      admin_graphql_api_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      default_address: OrderModel.DefaultAddress(),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      id: Joi.number(),
      last_name: Joi.string().allow(""),
      last_order_id: Joi.number(),
      last_order_name: Joi.string().allow(""),
      note: Joi.string().allow(""),
      orders_count: Joi.number(),
      phone: Joi.string().allow(""),
      state: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      tax_exempt: Joi.boolean(),
      total_spent: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      verified_email: Joi.boolean(),
    });
  }
  static Damaged() {
    return Joi.object({
      count: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static DataShipmentAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }
  static DefaultAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      company: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      country_name: Joi.string().allow(""),
      customer_id: Joi.number(),
      first_name: Joi.string().allow(""),
      id: Joi.number(),
      is_default: Joi.boolean(),
      last_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      province: Joi.string().allow(""),
      province_code: Joi.string().allow(""),
      zip: Joi.string().allow(""),
    });
  }
  static Dimension() {
    return Joi.object({
      height: Joi.number(),
      is_default: Joi.boolean(),
      length: Joi.number(),
      unit: Joi.string().allow(""),
      width: Joi.number(),
    });
  }
  static Documents() {
    return Joi.object({
      gst: OrderModel.Gst(),
    });
  }
  static DpDetails() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),
    });
  }
  static FailedOrders() {
    return Joi.object({
      orders: OrderModel.FailOrder().required(),
    });
  }
  static FailOrder() {
    return Joi.object({
      _id: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      company_id: Joi.number(),
      created_at: Joi.string().allow(""),
      marketplace: Joi.string().allow(""),
      marketplace_order: OrderModel.MarketplaceOrder(),
      marketplace_order_id: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static FailOrderDateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      inventory_updated_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }
  static Filters() {
    return Joi.object({
      stage: OrderModel.Stage(),
      stages: OrderModel.Stages(),
    });
  }
  static FulfillingStoreMeta() {
    return Joi.object({
      additional_contact_details: OrderModel.AdditionalContactDetails(),
      allow_dp_assignment_from_fynd: Joi.boolean(),
      display_name: Joi.string().allow(""),
      documents: OrderModel.Documents(),
      gst_number: Joi.string().allow(""),
      product_return_config: OrderModel.ProductReturnConfig(),
      stage: Joi.string().allow(""),
      timing: OrderModel.Timing(),
    });
  }
  static FulfillingStoreStoreAddressJson() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static GetActivityStatus() {
    return Joi.object({
      activity_history: OrderModel.ActivityHistory().required(),
    });
  }
  static GetClickToCallResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
  static GetPingResponse() {
    return Joi.object({
      ping: Joi.string().allow("").required(),
    });
  }
  static GetShipmentAddressResponse() {
    return Joi.object({
      data: OrderModel.DataShipmentAddress().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static GetVoiceCallbackResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
  static Gst() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }
  static GstDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),
      gst_fee: Joi.string().allow(""),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      hsn_code: Joi.string().allow(""),
      is_default_hsn_code: Joi.boolean(),
      value_of_good: Joi.number(),
    });
  }
  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }
  static ItemsPayments() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      display_priority: Joi.number(),
      id: Joi.number(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      payment_identifier: Joi.string().allow(""),
      source: Joi.string().allow(""),
      source_nickname: Joi.string().allow(""),
    });
  }
  static ItemTotal() {
    return Joi.object({
      all: Joi.number(),
      new: Joi.number(),
      processing: Joi.number(),
      returns: Joi.number(),
    });
  }
  static LineItems() {
    return Joi.object({
      admin_graphql_api_id: Joi.string().allow(""),
      article: OrderModel.LineItemsArticle(),
      fulfillable_quantity: Joi.number(),
      fulfillment_service: Joi.string().allow(""),
      gift_card: Joi.boolean(),
      grams: Joi.number(),
      id: Joi.number(),
      name: Joi.string().allow(""),
      price: Joi.string().allow(""),
      price_set: OrderModel.PriceSet(),
      product_exists: Joi.boolean(),
      product_id: Joi.number(),
      quantity: Joi.number(),
      requires_shipping: Joi.boolean(),
      sku: Joi.string().allow(""),
      tax_lines: OrderModel.TaxLines(),
      taxable: Joi.boolean(),
      title: Joi.string().allow(""),
      total_discount: Joi.string().allow(""),
      total_discount_set: OrderModel.TotalDiscountSet(),
      variant_id: Joi.number(),
      variant_inventory_management: Joi.string().allow(""),
      variant_title: Joi.string().allow(""),
      vendor: Joi.string().allow(""),
    });
  }
  static LineItemsArticle() {
    return Joi.object({
      _id: Joi.string().allow(""),
      brand: OrderModel.ArticleBrand(),
      company: OrderModel.Company(),
      country_of_origin: Joi.string().allow(""),
      date_meta: OrderModel.FailOrderDateMeta(),
      dimension: OrderModel.Dimension(),
      fragile: Joi.boolean(),
      fynd_article_code: Joi.string().allow(""),
      fynd_item_code: Joi.string().allow(""),
      identifier: OrderModel.LineItemsArticleIdentifier(),
      is_active: Joi.boolean(),
      is_set: Joi.boolean(),
      item_id: Joi.number(),
      manufacturer: OrderModel.Manufacturer(),
      marketplace_identifiers: OrderModel.MarketplaceIdentifiers(),
      meta: OrderModel.ArticleMeta(),
      old_article_uid: Joi.string().allow(""),
      price: OrderModel.ArticlePrice(),
      quantities: OrderModel.Quantities(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: OrderModel.Store(),
      total_quantity: Joi.number(),
      track_inventory: Joi.boolean(),
      uid: Joi.string().allow(""),
      weight: OrderModel.Weight(),
    });
  }
  static LineItemsArticleIdentifier() {
    return Joi.object({
      sku_code: Joi.string().allow(""),
    });
  }
  static Manufacturer() {
    return Joi.object({
      address: Joi.string().allow(""),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }
  static MarketplaceIdentifiers() {
    return Joi.object({
      tatacliq_luxury: OrderModel.TatacliqLuxury(),
    });
  }
  static MarketplaceOrder() {
    return Joi.object({
      admin_graphql_api_id: Joi.string().allow(""),
      app_id: Joi.number(),
      billing_address: OrderModel.BillingAddress(),
      buyer_accepts_marketing: Joi.boolean(),
      confirmed: Joi.boolean(),
      contact_email: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      customer: OrderModel.Customer(),
      email: Joi.string().allow(""),
      financial_status: Joi.string().allow(""),
      gateway: Joi.string().allow(""),
      id: Joi.number(),
      line_items: OrderModel.LineItems(),
      name: Joi.string().allow(""),
      note: Joi.string().allow(""),
      number: Joi.number(),
      order_number: Joi.number(),
      order_status_url: Joi.string().allow(""),
      payment_gateway_names: Joi.array().items(Joi.any()),
      presentment_currency: Joi.string().allow(""),
      processed_at: Joi.string().allow(""),
      processing_method: Joi.string().allow(""),
      shipping_address: OrderModel.OrderShippingAddress(),
      source_name: Joi.string().allow(""),
      subtotal_price: Joi.string().allow(""),
      subtotal_price_set: OrderModel.SubtotalPriceSet(),
      tags: Joi.string().allow(""),
      taxes_included: Joi.boolean(),
      test: Joi.boolean(),
      token: Joi.string().allow(""),
      total_discounts: Joi.string().allow(""),
      total_discounts_set: OrderModel.TotalDiscountsSet(),
      total_line_items_price: Joi.string().allow(""),
      total_line_items_price_set: OrderModel.TotalLineItemsPriceSet(),
      total_price: Joi.string().allow(""),
      total_price_set: OrderModel.TotalPriceSet(),
      total_price_usd: Joi.string().allow(""),
      total_shipping_price_set: OrderModel.TotalShippingPriceSet(),
      total_tax: Joi.string().allow(""),
      total_tax_set: OrderModel.TotalTaxSet(),
      total_tip_received: Joi.string().allow(""),
      total_weight: Joi.number(),
      updated_at: Joi.string().allow(""),
      user_id: Joi.number(),
    });
  }
  static NotAvailable() {
    return Joi.object({
      count: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static Opening() {
    return Joi.object({
      hour: Joi.number(),
      minute: Joi.number(),
    });
  }
  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static OrderCommitted() {
    return Joi.object({
      count: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static OrderDetails() {
    return Joi.object({
      applied_filters: OrderModel.AppliedFilters().required(),
      filters: OrderModel.Filters().required(),
      items: Joi.array().items(OrderModel.OrderPicklistListing()).required(),
      next_order_status: Joi.any().required(),
      page: OrderModel.PlatformOrderPage().required(),
    });
  }
  static OrderDetailsItem() {
    return Joi.object({
      application: OrderModel.PlatformApplication(),
      breakup_values: OrderModel.PlatformBreakupValues(),
      channel: OrderModel.Channel(),
      created_at: Joi.string().allow(""),
      delivery_address: OrderModel.PlatformDeliveryAddress(),
      fyndstore_emp: Joi.any(),
      id: Joi.string().allow(""),
      ordering_store: Joi.any(),
      payment_methods: Joi.any(),
      payments: OrderModel.ItemsPayments(),
      shipments: OrderModel.PlatformShipmentDetails(),
      total_shipments_in_order: Joi.number(),
      user: OrderModel.PlatformOrderUserInfo(),
    });
  }
  static OrderItems() {
    return Joi.object({
      application: OrderModel.PlatformApplication(),
      channel: OrderModel.Channel(),
      created_at: Joi.string().allow(""),
      delivery_address: OrderModel.PlatformDeliveryAddress(),
      id: Joi.string().allow(""),
      shipments: OrderModel.PlatformShipment(),
      total_shipments_in_order: Joi.number(),
      user: OrderModel.PlatformOrderUserInfo(),
    });
  }
  static OrderLanesCount() {
    return Joi.object({
      stages: Joi.array().items(OrderModel.StageItem()).required(),
    });
  }
  static OrderListing() {
    return Joi.object({
      applied_filters: OrderModel.AppliedFilters().required(),
      filters: OrderModel.Filters().required(),
      items: Joi.array().items(OrderModel.OrderItems()).required(),
      next_order_status: Joi.any().required(),
      page: OrderModel.PlatformOrderPage().required(),
    });
  }
  static OrderPicklistListing() {
    return Joi.object({
      application: OrderModel.PlatformApplication(),
      breakup_values: OrderModel.PlatformBreakupValues(),
      channel: OrderModel.Channel(),
      created_at: Joi.string().allow(""),
      delivery_address: OrderModel.PlatformDeliveryAddress(),
      fyndstore_emp: Joi.any(),
      id: Joi.string().allow(""),
      ordering_store: Joi.any(),
      payment_methods: Joi.any(),
      payments: OrderModel.ItemsPayments(),
      shipments: OrderModel.PlatformShipmentDetails(),
      total_shipments_in_order: Joi.number(),
      user: OrderModel.PlatformOrderUserInfo(),
    });
  }
  static OrderShippingAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      company: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      province: Joi.string().allow(""),
      province_code: Joi.string().allow(""),
      zip: Joi.string().allow(""),
    });
  }
  static Payments() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      display_priority: Joi.number(),
      id: Joi.number(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      payment_identifier: Joi.string().allow(""),
      source: Joi.string().allow(""),
      source_nickname: Joi.string().allow(""),
    });
  }
  static PlatformApplication() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }
  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static PlatformDeliveryAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static PlatformFulfillingStore() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
      city: Joi.string().allow(""),
      code: Joi.string().allow(""),
      company_id: Joi.number(),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      fulfillment_channel: Joi.string().allow(""),
      id: Joi.number(),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_enabled_for_recon: Joi.boolean(),
      location_type: Joi.string().allow(""),
      login_username: Joi.string().allow(""),
      meta: OrderModel.FulfillingStoreMeta(),
      name: Joi.string().allow(""),
      packaging_material_count: Joi.number(),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      store_address_json: OrderModel.FulfillingStoreStoreAddressJson(),
      store_email: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static PlatformOrderDetailsPage() {
    return Joi.object({
      next: Joi.string().allow(""),
      previous: Joi.string().allow(""),
    });
  }
  static PlatformOrderPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: OrderModel.ItemTotal(),
      next: Joi.string().allow(""),
      previous: Joi.string().allow(""),
      size: Joi.number(),
      total: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PlatformOrderTrack() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
      resend_timer: Joi.number().required(),
      resend_token: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static PlatformOrderUserInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      is_anonymous_user: Joi.boolean(),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static PlatformShipment() {
    return Joi.object({
      bags: OrderModel.Bags(),
      gst: OrderModel.ShipmentGst(),
      id: Joi.string().allow(""),
      lock_status: Joi.boolean(),
      ordering_channel: Joi.string().allow(""),
      prices: OrderModel.ShipmentPrices(),
      priority: Joi.number(),
      priority_text: Joi.string().allow(""),
      status: OrderModel.PlatformShipmentStatus(),
      total_shipment_bags: Joi.number(),
    });
  }
  static PlatformShipmentDetails() {
    return Joi.object({
      auto_trigger_dp_assignment: Joi.boolean(),
      bags: OrderModel.BagsDetails(),
      brand: OrderModel.PlatformShipmentDetailsBrand(),
      breakup_values: OrderModel.ShipmentBreakupValues(),
      can_break: Joi.any(),
      comment: Joi.string().allow(""),
      company: OrderModel.Company(),
      coupon: Joi.any(),
      credit_note_id: Joi.string().allow(""),
      dates: OrderModel.ShipmentDates(),
      dp_details: OrderModel.DpDetails(),
      fulfilling_store: OrderModel.PlatformFulfillingStore(),
      gst: OrderModel.ShipmentGst(),
      id: Joi.string().allow(""),
      invoice: OrderModel.ShipmentInvoice(),
      is_fynd_coupon: Joi.boolean(),
      is_not_fynd_source: Joi.boolean(),
      lock_status: Joi.boolean(),
      order_source: Joi.string().allow(""),
      order_type: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      packaging_type: Joi.string().allow(""),
      payment_methods: Joi.any(),
      payments: OrderModel.Payments(),
      pod: Joi.any(),
      prices: OrderModel.ShipmentPrices(),
      priority: Joi.number(),
      priority_text: Joi.string().allow(""),
      promise: OrderModel.Promise(),
      status: OrderModel.PlatformShipmentDetailsStatus(),
      total_shipment_bags: Joi.number(),
      tracking_details: OrderModel.ShipmentTrackingDetails(),
    });
  }
  static PlatformShipmentDetailsBrand() {
    return Joi.object({
      brand_name: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      credit_note_allowed: Joi.boolean(),
      id: Joi.number(),
      is_virtual_invoice: Joi.boolean(),
      logo: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }
  static PlatformShipmentDetailsStatus() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),
      color_code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      current_shipment_status: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
      progress: Joi.number(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static PlatformShipmentStatus() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),
      color_code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      current_shipment_status: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
      progress: Joi.number(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static PlatformShipmentTrack() {
    return Joi.object({
      results: OrderModel.Results().required(),
    });
  }
  static PresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static PriceSet() {
    return Joi.object({
      presentment_money: OrderModel.PriceSetPresentmentMoney(),
      shop_money: OrderModel.PriceSetShopMoney(),
    });
  }
  static PriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static PriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static ProductReturnConfig() {
    return Joi.object({
      on_same_store: Joi.boolean(),
    });
  }
  static Promise() {
    return Joi.object({
      timestamp: OrderModel.Timestamp(),
    });
  }
  static Quantities() {
    return Joi.object({
      damaged: OrderModel.Damaged(),
      not_available: OrderModel.NotAvailable(),
      order_committed: OrderModel.OrderCommitted(),
      sellable: OrderModel.Sellable(),
    });
  }
  static Results() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
    });
  }
  static RtoAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      code: Joi.string().allow(""),
      company_id: Joi.number(),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      id: Joi.number(),
      location_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      store_address_json: OrderModel.StoreAddressJson(),
      store_email: Joi.string().allow(""),
    });
  }
  static Sellable() {
    return Joi.object({
      count: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static Set() {
    return Joi.object({
      quantity: Joi.number(),
      size_distribution: OrderModel.SetSizeDistribution(),
    });
  }
  static SetSizeDistribution() {
    return Joi.object({
      sizes: OrderModel.Sizes(),
    });
  }
  static ShipmentBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static ShipmentDates() {
    return Joi.object({
      due_date: Joi.string().allow(""),
    });
  }
  static ShipmentGst() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),
      gst_fee: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static ShipmentInvoice() {
    return Joi.object({
      amount_to_collect: Joi.number(),
      invoice_url: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      payment_type: Joi.string().allow(""),
      rto_address: OrderModel.RtoAddress(),
      updated_date: Joi.string().allow(""),
    });
  }
  static ShipmentPrices() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_tax_percentage: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static ShipmentReasonsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      reasons: Joi.array()
        .items(OrderModel.ShipmentResponseReasons())
        .required(),
      success: Joi.boolean().required(),
    });
  }
  static ShipmentResponseReasons() {
    return Joi.object({
      reason: Joi.string().allow(""),
      reason_id: Joi.number(),
    });
  }
  static ShipmentTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
    });
  }
  static ShipmentTrackResponse() {
    return Joi.object({
      bag_list: Joi.array()
        .items(OrderModel.ShipmentTrackResponseBagListItem())
        .required(),
      message: Joi.string().allow("").required(),
      order_value: Joi.number().required(),
    });
  }
  static ShipmentTrackResponseBagListItem() {
    return Joi.object({
      bag_id: Joi.string().allow(""),
      brand_name: Joi.string().allow(""),
      breakup_values: Joi.array().items(
        OrderModel.ShipmentTrackResponseBagListItemBreakValues()
      ),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      delivery_address: Joi.string().allow(""),
      dp_details: OrderModel.ShipmentTrackResponseBagListItemDpDetails(),
      enable_tracking: Joi.boolean(),
      fynd_cash_msg: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_try_at_home: Joi.boolean(),
      order_date: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      payment_mode_source: Joi.string().allow(""),
      price: Joi.string().allow(""),
      price_marked: Joi.string().allow(""),
      product_id: Joi.number(),
      product_image: OrderModel.ShipmentTrackResponseBagListItemsProductImage(),
      product_name: Joi.string().allow(""),
      size: Joi.string().allow(""),
      status: Joi.string().allow(""),
      statuses: Joi.array().items(
        OrderModel.ShipmentTrackResponseBagListItemStatuses()
      ),
      time_slot: Joi.string().allow(""),
    });
  }
  static ShipmentTrackResponseBagListItemBreakValues() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ShipmentTrackResponseBagListItemDpDetails() {
    return Joi.object({
      courier: Joi.string().allow(""),
      tracking_no: Joi.string().allow(""),
    });
  }
  static ShipmentTrackResponseBagListItemsProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ShipmentTrackResponseBagListItemStatuses() {
    return Joi.object({
      flow_type: Joi.string().allow(""),
      header_message: Joi.string().allow(""),
      is_delayed: Joi.string().allow(""),
      is_nps_done: Joi.boolean(),
      nps_rating: Joi.number(),
      nps_string: Joi.string().allow(""),
      progress_status: Joi.array().items(
        OrderModel.ShipmentTrackResponseBagListItemStatusesProgress()
      ),
      status_progress: Joi.number(),
      tracking_list: Joi.array().items(
        OrderModel.ShipmentTrackResponseBagListItemStatusesTrack()
      ),
    });
  }
  static ShipmentTrackResponseBagListItemStatusesProgress() {
    return Joi.object({
      state: Joi.boolean(),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static ShipmentTrackResponseBagListItemStatusesTrack() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
    });
  }
  static ShipmentUpdateRequest() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      bags: Joi.array().items(Joi.string().allow("")).required(),
      comments: Joi.string().allow("").required(),
      reason: Joi.any().required(),
    });
  }
  static ShipmentUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static ShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static Sizes() {
    return Joi.object({
      pieces: Joi.number(),
      size: Joi.string().allow(""),
    });
  }
  static Stage() {
    return Joi.object({
      filters: OrderModel.StagesFilters(),
      is_default: Joi.boolean(),
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static StageItem() {
    return Joi.object({
      count: Joi.number(),
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static Stages() {
    return Joi.object({
      filters: OrderModel.StagesFilters(),
      is_default: Joi.boolean(),
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static StagesFilters() {
    return Joi.object({
      options: OrderModel.Options(),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static Store() {
    return Joi.object({
      id: Joi.number(),
    });
  }
  static StoreAddressJson() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static SubtotalPriceSet() {
    return Joi.object({
      presentment_money: OrderModel.SubtotalPriceSetPresentmentMoney(),
      shop_money: OrderModel.SubtotalPriceSetShopMoney(),
    });
  }
  static SubtotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static SubtotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TatacliqLuxury() {
    return Joi.object({
      sku: Joi.string().allow(""),
    });
  }
  static TaxLines() {
    return Joi.object({
      price: Joi.string().allow(""),
      price_set: OrderModel.TaxLinesPriceSet(),
      rate: Joi.number(),
      title: Joi.string().allow(""),
    });
  }
  static TaxLinesPriceSet() {
    return Joi.object({
      presentment_money: OrderModel.TaxLinesPriceSetPresentmentMoney(),
      shop_money: OrderModel.TaxLinesPriceSetShopMoney(),
    });
  }
  static TaxLinesPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TaxLinesPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static Timestamp() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }
  static Timing() {
    return Joi.object({
      closing: OrderModel.Closing(),
      open: Joi.boolean(),
      opening: OrderModel.Opening(),
      weekday: Joi.string().allow(""),
    });
  }
  static TotalDiscountSet() {
    return Joi.object({
      presentment_money: OrderModel.TotalDiscountSetPresentmentMoney(),
      shop_money: OrderModel.TotalDiscountSetShopMoney(),
    });
  }
  static TotalDiscountSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalDiscountSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalDiscountsSet() {
    return Joi.object({
      presentment_money: OrderModel.PresentmentMoney(),
      shop_money: OrderModel.ShopMoney(),
    });
  }
  static TotalLineItemsPriceSet() {
    return Joi.object({
      presentment_money: OrderModel.TotalLineItemsPriceSetPresentmentMoney(),
      shop_money: OrderModel.TotalLineItemsPriceSetShopMoney(),
    });
  }
  static TotalLineItemsPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalLineItemsPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalPriceSet() {
    return Joi.object({
      presentment_money: OrderModel.TotalPriceSetPresentmentMoney(),
      shop_money: OrderModel.TotalPriceSetShopMoney(),
    });
  }
  static TotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalShippingPriceSet() {
    return Joi.object({
      presentment_money: OrderModel.TotalShippingPriceSetPresentmentMoney(),
      shop_money: OrderModel.TotalShippingPriceSetShopMoney(),
    });
  }
  static TotalShippingPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalShippingPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalTaxSet() {
    return Joi.object({
      presentment_money: OrderModel.TotalTaxSetPresentmentMoney(),
      shop_money: OrderModel.TotalTaxSetShopMoney(),
    });
  }
  static TotalTaxSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static TotalTaxSetShopMoney() {
    return Joi.object({
      amount: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }
  static UpdateOrderReprocessResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),
    });
  }
  static UpdateProcessShipmenstRequestBody() {
    return Joi.object({
      expected_status: Joi.string().allow("").required(),
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static UpdateProcessShipmenstRequestResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static UpdateShipmentAddressRequest() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      address_type: Joi.string().allow("").required(),
      area: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      landmark: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
  static UpdateShipmentAddressResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static UpdateShipmentStatusBody() {
    return Joi.object({
      force_transition: Joi.boolean().required(),
      shipments: Joi.any().required(),
      task: Joi.boolean().required(),
    });
  }
  static UpdateShipmentStatusResponse() {
    return Joi.object({
      error_shipments: Joi.array().items(Joi.string().allow("")),
      shipments: Joi.any().required(),
    });
  }
  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
}
module.exports = OrderModel;
