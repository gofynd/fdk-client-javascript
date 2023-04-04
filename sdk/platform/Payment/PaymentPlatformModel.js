const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      aggregators: Joi.array().items(Joi.any()),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
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
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      exp_month: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      remaining_limit: Joi.number().allow(null),

      retry_count: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_fingerprint: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      intent_flow: Joi.boolean().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      timeout: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),
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
      account_type: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),
    });
  }

  static PayoutCustomer() {
    return Joi.object({
      mobile: Joi.string().allow("").allow(null),

      unique_external_id: Joi.string().allow("").allow(null),

      id: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),
    });
  }

  static PayoutAggregator() {
    return Joi.object({
      aggregator_fund_id: Joi.number().allow(null),

      aggregator_id: Joi.number().allow(null),

      payout_details_id: Joi.number().allow(null),
    });
  }

  static Payout() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      more_attributes: PaymentModel.PayoutMoreAttributes().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      customers: PaymentModel.PayoutCustomer().required(),

      payouts_aggregators: Joi.array().items(PaymentModel.PayoutAggregator()),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      account_no: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_external_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      payouts: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      bank_details: Joi.any().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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

      aggregator: Joi.string().allow("").required(),

      config: Joi.any().required(),
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

      message: Joi.string().allow("").required(),

      data: Joi.any(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      details: PaymentModel.BankDetailsForOTP().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      bank_name: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      payment_gateway: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      meta: PaymentModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
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
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      payment_selection_lock: Joi.any(),

      source: Joi.string().allow("").allow(null).required(),

      enabled: Joi.boolean().allow(null).required(),

      cod_charges: Joi.number(),

      mode_of_payment: Joi.string().allow("").required(),

      callback_url: Joi.any(),

      cod_amount_limit: Joi.number(),

      methods: Joi.any().allow(null).required(),

      anonymous_cod: Joi.boolean(),
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
      payment_selection_lock: Joi.any(),

      cod_charges: Joi.number(),

      cod_amount_limit: Joi.number(),

      methods: Joi.any().allow(null).required(),

      anonymous_cod: Joi.boolean(),
    });
  }

  static CODdata() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      limit: Joi.number().required(),

      usages: Joi.number().required(),

      remaining_limit: Joi.number().required(),

      is_active: Joi.boolean().required(),
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
      mobileno: Joi.string().allow("").required(),

      merchant_user_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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

      aggregator_id: Joi.number().required(),

      aggregator: Joi.string().allow("").required(),
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
      inactive_device_count: Joi.number().required(),

      active_device_count: Joi.number().required(),
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
      store_id: Joi.number().required(),

      edc_model: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      device_tag: Joi.string().allow("").allow(null),

      terminal_serial_no: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      store_id: Joi.number().required(),

      edc_model: Joi.string().allow(""),

      aggregator_id: Joi.number().required(),

      device_tag: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      terminal_serial_no: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),
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
      store_id: Joi.number(),

      edc_model: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      device_tag: Joi.string().allow("").allow(null),

      edc_device_serial_no: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      items: Joi.array().items(PaymentModel.EdcDevice()).required(),

      page: PaymentModel.Page().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      polling_url: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      virtual_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      upi_poll_url: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      request_type: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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
