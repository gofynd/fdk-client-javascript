const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      created: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      merchant_salt: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      success: Joi.boolean().required(),

      aggregator: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: PaymentModel.ErrorCodeAndDescription().required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_token: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_brand: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      card_isin: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      merchant_code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      code: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      aggregator_name: Joi.string().allow("").required(),

      remaining_limit: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      save_card: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      anonymous_enable: Joi.boolean().allow(null),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentModel.RootPaymentMode())
        .required(),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_options: PaymentModel.PaymentOptions().required(),
    });
  }

  static PayoutMoreAttributes() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").allow(null),

      account_type: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").allow(null),
    });
  }

  static PayoutAggregator() {
    return Joi.object({
      aggregator_fund_id: Joi.number().allow(null),

      payout_details_id: Joi.number().allow(null),

      aggregator_id: Joi.number().allow(null),
    });
  }

  static PayoutCustomer() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").allow(null),

      id: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").allow(null),
    });
  }

  static Payout() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      more_attributes: PaymentModel.PayoutMoreAttributes().required(),

      payouts_aggregators: Joi.array().items(PaymentModel.PayoutAggregator()),

      customers: PaymentModel.PayoutCustomer().required(),

      unique_transfer_no: Joi.string().allow("").required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      items: Joi.array().items(PaymentModel.Payout()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      bank_details: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      users: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      message: Joi.string().allow("").required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      address: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      transfer_mode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      mobile: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      payment_gateway: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: PaymentModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(PaymentModel.MultiTenderPaymentMethod())
        .required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      methods: Joi.any().allow(null).required(),

      callback_url: Joi.any(),

      source: Joi.string().allow("").allow(null).required(),

      cod_charges: Joi.number(),

      mode_of_payment: Joi.string().allow("").required(),

      payment_selection_lock: Joi.any(),

      enabled: Joi.boolean().allow(null).required(),

      anonymous_cod: Joi.boolean(),

      cod_amount_limit: Joi.number(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      data: PaymentModel.PlatformPaymentOptions().required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      methods: Joi.any().allow(null).required(),

      cod_charges: Joi.number(),

      payment_selection_lock: Joi.any(),

      anonymous_cod: Joi.boolean(),

      cod_amount_limit: Joi.number(),
    });
  }

  static CODdata() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      usages: Joi.number().required(),

      limit: Joi.number().required(),

      is_active: Joi.boolean().required(),

      remaining_limit: Joi.number().required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      user_cod_data: PaymentModel.CODdata().required(),
    });
  }

  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      merchant_user_id: Joi.string().allow("").required(),

      mobileno: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static EdcModelData() {
    return Joi.object({
      models: Joi.array().items(Joi.string().allow("")).required(),

      aggregator: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),
    });
  }

  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(PaymentModel.EdcModelData()).required(),
    });
  }

  static StatisticsData() {
    return Joi.object({
      active_device_count: Joi.number().required(),

      inactive_device_count: Joi.number().required(),
    });
  }

  static EdcDeviceStatsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      statistics: PaymentModel.StatisticsData().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      edc_model: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      device_tag: Joi.string().allow("").allow(null),

      aggregator_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      edc_model: Joi.string().allow(""),

      store_id: Joi.number().required(),

      device_tag: Joi.string().allow("").required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDeviceAddResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EdcDevice().required(),
    });
  }

  static EdcDeviceDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EdcDevice().required(),
    });
  }

  static EdcUpdateRequest() {
    return Joi.object({
      edc_model: Joi.string().allow(""),

      store_id: Joi.number(),

      device_tag: Joi.string().allow("").allow(null),

      merchant_store_pos_code: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      is_active: Joi.string().allow(""),

      edc_device_serial_no: Joi.string().allow(""),
    });
  }

  static EdcDeviceUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
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

  static EdcDeviceListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      page: PaymentModel.Page().required(),

      items: Joi.array().items(PaymentModel.EdcDevice()).required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      email: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow(""),

      success: Joi.boolean().required(),

      merchant_order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      polling_url: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      status: Joi.string().allow(""),

      upi_poll_url: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      device_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      request_type: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      status: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.LinkStatus().required(),
    });
  }
}
module.exports = PaymentModel;
