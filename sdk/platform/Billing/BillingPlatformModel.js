const Joi = require("joi");

class BillingModel {
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static CancelSubscriptionReq() {
    return Joi.object({
      product_suite: Joi.string().allow(""),
      subscription_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }
  static CancelSubscriptionRes() {
    return Joi.object({
      data: BillingModel.Subscription(),
      success: Joi.boolean(),
    });
  }
  static ChargeLineItem() {
    return Joi.object({
      capped_amount: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
      name: Joi.string().allow("").required(),
      price: BillingModel.EntityChargePrice().required(),
      pricing_type: Joi.string().allow("").required(),
      recurring: BillingModel.EntityChargeRecurring(),
      term: Joi.string().allow("").required(),
      trial_days: Joi.number(),
    });
  }
  static CheckValidityResponse() {
    return Joi.object({
      discount_amount: Joi.number(),
      is_valid: Joi.boolean(),
    });
  }
  static CreateOneTimeCharge() {
    return Joi.object({
      charge: BillingModel.OneTimeChargeItem().required(),
      is_test: Joi.boolean(),
      name: Joi.string().allow("").required(),
      return_url: Joi.string().allow("").required(),
    });
  }
  static CreateOneTimeChargeResponse() {
    return Joi.object({
      charge: BillingModel.OneTimeChargeEntity(),
      confirm_url: Joi.string().allow(""),
    });
  }
  static CreateSubscriptionCharge() {
    return Joi.object({
      is_test: Joi.boolean(),
      line_items: Joi.array().items(BillingModel.ChargeLineItem()).required(),
      name: Joi.string().allow("").required(),
      return_url: Joi.string().allow("").required(),
      trial_days: Joi.number(),
    });
  }
  static CreateSubscriptionResponse() {
    return Joi.object({
      confirm_url: Joi.string().allow(""),
      subscription: BillingModel.EntitySubscription(),
    });
  }
  static CurrentPeriod() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }
  static DetailedPlan() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addons: Joi.array().items(Joi.string().allow("")),
      amount: Joi.number(),
      components: Joi.array().items(BillingModel.DetailedPlanComponents()),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_trial_plan: Joi.boolean(),
      is_visible: Joi.boolean(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      recurring: BillingModel.PlanRecurring(),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      trial_period: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static DetailedPlanComponents() {
    return Joi.object({
      config: Joi.any(),
      description: Joi.string().allow(""),
      display_text: Joi.string().allow(""),
      enabled: Joi.boolean(),
      group: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      links: Joi.any(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static EntityChargePrice() {
    return Joi.object({
      amount: Joi.number().required(),
      currency_code: Joi.string().allow("").required(),
    });
  }
  static EntityChargeRecurring() {
    return Joi.object({
      interval: Joi.string().allow("").required(),
    });
  }
  static EntitySubscription() {
    return Joi.object({
      _id: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      company_id: Joi.number(),
      line_items: Joi.array().items(BillingModel.SubscriptionCharge()),
      metadata: Joi.any(),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      trial_days: Joi.number(),
      trial_period: BillingModel.SubscriptionTrialPeriod(),
    });
  }
  static InternalServerError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }
  static Invoice() {
    return Joi.object({
      invoice: BillingModel.InvoiceDetails(),
      invoice_items: Joi.array().items(BillingModel.InvoiceItems()),
    });
  }
  static InvoiceDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      attemp: Joi.number(),
      auto_advance: Joi.boolean(),
      client: BillingModel.InvoiceDetailsClient(),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      hash_identifier: Joi.string().allow(""),
      invoice_url: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      next_action_time: Joi.string().allow(""),
      number: Joi.string().allow(""),
      paid: Joi.boolean(),
      payment_method: BillingModel.InvoicePaymentMethod(),
      period: BillingModel.InvoiceDetailsPeriod(),
      pg_data: Joi.any(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      status_trail: Joi.array().items(BillingModel.InvoiceDetailsStatusTrail()),
      subscriber_id: Joi.string().allow(""),
      subscription: Joi.string().allow(""),
      subtotal: Joi.number(),
      total: Joi.number(),
    });
  }
  static InvoiceDetailsClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string().allow("")),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsPaymentMethods() {
    return Joi.object({
      data: BillingModel.InvoiceDetailsPaymentMethodsData(),
      id: Joi.number(),
      is_default: Joi.boolean(),
      pg_payment_method_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsPaymentMethodsData() {
    return Joi.object({
      brand: Joi.string().allow(""),
      checks: BillingModel.InvoiceDetailsPaymentMethodsDataChecks(),
      country: Joi.string().allow(""),
      exp_month: Joi.number(),
      exp_year: Joi.number(),
      fingerprint: Joi.string().allow(""),
      funding: Joi.string().allow(""),
      generated_from: Joi.string().allow(""),
      last4: Joi.string().allow(""),
      networks: BillingModel.InvoiceDetailsPaymentMethodsDataNetworks(),
      three_d_secure_usage: BillingModel.InvoiceDetailsPaymentMethodsDataThreeDSecureUsage(),
      wallet: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsPaymentMethodsDataChecks() {
    return Joi.object({
      address_line1_check: Joi.string().allow(""),
      address_postal_code_check: Joi.string().allow(""),
      cvc_check: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsPaymentMethodsDataNetworks() {
    return Joi.object({
      available: Joi.array().items(Joi.string().allow("")),
      preferred: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsPaymentMethodsDataThreeDSecureUsage() {
    return Joi.object({
      supported: Joi.boolean(),
    });
  }
  static InvoiceDetailsPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      timestamp: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static InvoiceItems() {
    return Joi.object({
      _id: Joi.string().allow(""),
      amount: Joi.number(),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      period: BillingModel.InvoiceItemsPeriod(),
      plan: BillingModel.InvoiceItemsPlan(),
      quantity: Joi.number(),
      type: Joi.string().allow(""),
      unit_amount: Joi.number(),
    });
  }
  static InvoiceItemsPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static InvoiceItemsPlan() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addons: Joi.array().items(Joi.string().allow("")),
      amount: Joi.number(),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_trial_plan: Joi.boolean(),
      is_visible: Joi.boolean(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      recurring: BillingModel.InvoiceItemsPlanRecurring(),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      trial_period: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static InvoiceItemsPlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }
  static InvoicePaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }
  static Invoices() {
    return Joi.object({
      data: Joi.array().items(BillingModel.InvoicesData()),
      end: Joi.number(),
      limit: Joi.number(),
      page: Joi.number(),
      start: Joi.number(),
      total: Joi.number(),
    });
  }
  static InvoicesData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      attemp: Joi.number(),
      auto_advance: Joi.boolean(),
      client: BillingModel.InvoicesDataClient(),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      hash_identifier: Joi.string().allow(""),
      invoice_items: Joi.array().items(BillingModel.InvoiceItems()),
      invoice_url: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      next_action_time: Joi.string().allow(""),
      number: Joi.string().allow(""),
      paid: Joi.boolean(),
      payment_method: BillingModel.InvoicesDataPaymentMethod(),
      period: BillingModel.InvoicesDataPeriod(),
      pg_data: Joi.any(),
      receipt_number: Joi.string().allow(""),
      statement_descriptor: Joi.string().allow(""),
      status_trail: Joi.array().items(BillingModel.InvoiceDetailsStatusTrail()),
      subscriber_id: Joi.string().allow(""),
      subscription: Joi.string().allow(""),
      subtotal: Joi.number(),
      total: Joi.number(),
    });
  }
  static InvoicesDataClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string().allow("")),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }
  static InvoicesDataPaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string().allow(""),
    });
  }
  static InvoicesDataPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static OneTimeChargeEntity() {
    return Joi.object({
      _id: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      entity_id: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      is_test: Joi.boolean(),
      meta: Joi.any(),
      metadata: Joi.any(),
      name: Joi.string().allow(""),
      price: BillingModel.EntityChargePrice(),
      pricing_type: Joi.string().allow(""),
      return_url: Joi.string().allow(""),
      status: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
    });
  }
  static OneTimeChargeItem() {
    return Joi.object({
      capped_amount: Joi.number(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
      name: Joi.string().allow("").required(),
      price: BillingModel.EntityChargePrice().required(),
      pricing_type: Joi.string().allow("").required(),
      term: Joi.string().allow(""),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static Phone() {
    return Joi.object({
      phone_country_code: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
    });
  }
  static Plan() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addons: Joi.array().items(Joi.string().allow("")),
      amount: Joi.number(),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_trial_plan: Joi.boolean(),
      is_visible: Joi.boolean(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      plan_group: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      recurring: BillingModel.PlanRecurring(),
      tag_lines: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      trial_period: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string().allow(""),
      interval_count: Joi.number(),
    });
  }
  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Subscription() {
    return Joi.object({
      _id: Joi.string().allow(""),
      cancel_at_period_end: Joi.boolean(),
      channel_type: Joi.string().allow(""),
      collection_method: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      current_period: BillingModel.SubscriptionCurrentPeriod(),
      current_status: Joi.string().allow(""),
      invoice_settings: BillingModel.SubscriptionInvoiceSettings(),
      is_active: Joi.boolean(),
      latest_invoice: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      pause_collection: BillingModel.SubscriptionPauseCollection(),
      plan_data: BillingModel.Plan(),
      plan_id: Joi.string().allow(""),
      product_suite_id: Joi.string().allow(""),
      subscriber_id: Joi.string().allow(""),
      trial: BillingModel.SubscriptionTrial(),
    });
  }
  static SubscriptionActivateReq() {
    return Joi.object({
      payment_method: Joi.string().allow(""),
      plan_id: Joi.string().allow(""),
      product_suite: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }
  static SubscriptionActivateRes() {
    return Joi.object({
      data: BillingModel.Subscription(),
      success: Joi.boolean(),
    });
  }
  static SubscriptionBillingAddress() {
    return Joi.object({
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      line1: Joi.string().allow(""),
      line2: Joi.string().allow(""),
      postal_code: Joi.string().allow(""),
      state: Joi.string().allow(""),
    });
  }
  static SubscriptionCharge() {
    return Joi.object({
      _id: Joi.string().allow(""),
      activated_on: Joi.string().allow(""),
      billing_date: Joi.string().allow(""),
      cancelled_on: Joi.string().allow(""),
      capped_amount: Joi.number(),
      current_period: BillingModel.CurrentPeriod(),
      is_test: Joi.boolean(),
      metadata: Joi.any(),
      name: Joi.string().allow(""),
      price: BillingModel.EntityChargePrice(),
      pricing_type: Joi.string().allow(""),
      recurring: BillingModel.EntityChargeRecurring(),
      status: Joi.string().allow(""),
      term: Joi.string().allow(""),
    });
  }
  static SubscriptionCurrentPeriod() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static SubscriptionCustomer() {
    return Joi.object({
      _id: Joi.string().allow(""),
      billing_address: BillingModel.SubscriptionBillingAddress(),
      created_at: Joi.string().allow(""),
      data: Joi.any(),
      email: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: BillingModel.Phone(),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }
  static SubscriptionCustomerCreate() {
    return Joi.object({
      billing_address: BillingModel.SubscriptionBillingAddress(),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: BillingModel.Phone(),
      type: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
    });
  }
  static SubscriptionInvoiceSettings() {
    return Joi.object({
      charging: Joi.boolean(),
      generation: Joi.boolean(),
    });
  }
  static SubscriptionLimit() {
    return Joi.object({
      application: BillingModel.SubscriptionLimitApplication(),
      extensions: BillingModel.SubscriptionLimitExtensions(),
      integrations: BillingModel.SubscriptionLimitIntegrations(),
      is_trial_plan: Joi.boolean(),
      marketplace: BillingModel.SubscriptionLimitMarketplace(),
      other_platform: BillingModel.SubscriptionLimitOtherPlatform(),
      products: BillingModel.SubscriptionLimitProducts(),
      team: BillingModel.SubscriptionLimitTeam(),
    });
  }
  static SubscriptionLimitApplication() {
    return Joi.object({
      enabled: Joi.boolean(),
      hard_limit: Joi.number(),
      soft_limit: Joi.number(),
    });
  }
  static SubscriptionLimitExtensions() {
    return Joi.object({
      enabled: Joi.boolean(),
      limit: Joi.number(),
    });
  }
  static SubscriptionLimitIntegrations() {
    return Joi.object({
      enabled: Joi.boolean(),
      limit: Joi.number(),
    });
  }
  static SubscriptionLimitMarketplace() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static SubscriptionLimitOtherPlatform() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static SubscriptionLimitProducts() {
    return Joi.object({
      bulk: Joi.boolean(),
      limit: Joi.number(),
    });
  }
  static SubscriptionLimitTeam() {
    return Joi.object({
      limit: Joi.number(),
    });
  }
  static SubscriptionPauseCollection() {
    return Joi.object({
      behavior: Joi.string().allow(""),
      resume_at: Joi.string().allow(""),
    });
  }
  static SubscriptionStatus() {
    return Joi.object({
      current_subscriptions: Joi.array().items(BillingModel.Subscription()),
      is_enabled: Joi.boolean(),
      latest_invoice: BillingModel.InvoicesData(),
      mandate_amount: Joi.string().allow(""),
      next_plan: BillingModel.Plan(),
      subscription: BillingModel.Subscription(),
    });
  }
  static SubscriptionTrial() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static SubscriptionTrialPeriod() {
    return Joi.object({
      end_date: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
    });
  }
  static UnauthenticatedApplication() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static UnauthenticatedUser() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}
module.exports = BillingModel;
