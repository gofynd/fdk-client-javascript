const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      created: Joi.boolean().required(),

      success: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),

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
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

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
      card_issuer: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_fingerprint: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      exp_year: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      retry_count: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      cod_limit: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      save_card: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),
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

  static Payout() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.any().required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      customers: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      more_attributes: Joi.any().required(),
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
      account_type: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      account_no: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      users: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      payouts: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      success: Joi.boolean().required(),
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
      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
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
      is_active: Joi.boolean().required(),

      comment: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      id: Joi.number().required(),
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
      payment_gateway: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: PaymentModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      source: Joi.string().allow("").allow(null).required(),

      callback_url: Joi.any(),

      mode_of_payment: Joi.string().allow("").required(),

      anonymous_cod: Joi.boolean(),

      enabled: Joi.boolean().allow(null).required(),

      cod_amount_limit: Joi.number(),

      cod_charges: Joi.number(),

      methods: Joi.any().allow(null).required(),

      payment_selection_lock: Joi.any(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: PaymentModel.PlatformPaymentOptions().required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      cod_charges: Joi.number(),

      methods: Joi.any().allow(null).required(),

      payment_selection_lock: Joi.any(),
    });
  }

  static CODdata() {
    return Joi.object({
      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      limit: Joi.number().required(),

      usages: Joi.number().required(),
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
      merchant_user_id: Joi.string().allow("").required(),

      mobileno: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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
      edc_device_serial_no: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      store_id: Joi.number().required(),

      edc_model: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").allow(null),
    });
  }

  static EdcDevice() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      terminal_serial_no: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      aggregator_id: Joi.number().required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      device_tag: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),
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
      edc_device_serial_no: Joi.string().allow(""),

      edc_model: Joi.string().allow(""),

      is_active: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      store_id: Joi.number(),

      merchant_store_pos_code: Joi.string().allow(""),

      device_tag: Joi.string().allow("").allow(null),
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
      customer_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      customer_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      device_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      success: Joi.boolean().required(),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      customer_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),
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
