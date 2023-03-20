const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      created: Joi.boolean().required(),

      success: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      merchant_salt: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      aggregator: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),
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
      error: PaymentModel.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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

      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_issuer: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      display_priority: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      logo_url: PaymentModel.PaymentModeLogo(),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_fingerprint: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymous_enable: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),
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
      payment_options: PaymentModel.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutMoreAttributes() {
    return Joi.object({
      state: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").allow(null),

      account_type: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),
    });
  }

  static PayoutCustomer() {
    return Joi.object({
      mobile: Joi.string().allow("").allow(null),

      unique_external_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      id: Joi.number().allow(null),
    });
  }

  static PayoutAggregator() {
    return Joi.object({
      aggregator_id: Joi.number().allow(null),

      aggregator_fund_id: Joi.number().allow(null),

      payout_details_id: Joi.number().allow(null),
    });
  }

  static Payout() {
    return Joi.object({
      more_attributes: PaymentModel.PayoutMoreAttributes().required(),

      transfer_type: Joi.string().allow("").required(),

      customers: PaymentModel.PayoutCustomer().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      payouts_aggregators: Joi.array().items(PaymentModel.PayoutAggregator()),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentModel.Payout()).required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      state: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      account_no: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      success: Joi.boolean().required(),

      bank_details: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      payouts: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),
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
      data: Joi.array().items(Joi.any()).required(),

      success: Joi.boolean().required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      success: Joi.boolean().required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      id: Joi.number().required(),

      email: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      account_no: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
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

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),

      current_status: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      meta: PaymentModel.MultiTenderPaymentMeta(),

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
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      callback_url: Joi.any(),

      anonymous_cod: Joi.boolean(),

      mode_of_payment: Joi.string().allow("").required(),

      cod_charges: Joi.number(),

      cod_amount_limit: Joi.number(),

      source: Joi.string().allow("").allow(null).required(),

      methods: Joi.any().allow(null).required(),

      enabled: Joi.boolean().allow(null).required(),

      payment_selection_lock: Joi.any(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: PaymentModel.PlatformPaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),

      cod_charges: Joi.number(),

      cod_amount_limit: Joi.number(),

      methods: Joi.any().allow(null).required(),

      payment_selection_lock: Joi.any(),
    });
  }

  static CODdata() {
    return Joi.object({
      limit: Joi.number().required(),

      is_active: Joi.boolean().required(),

      usages: Joi.number().required(),

      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      user_cod_data: PaymentModel.CODdata().required(),

      success: Joi.boolean().required(),
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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcModelData() {
    return Joi.object({
      aggregator_id: Joi.number().required(),

      aggregator: Joi.string().allow("").required(),

      models: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.EdcModelData()).required(),

      success: Joi.boolean().required(),
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
      statistics: PaymentModel.StatisticsData().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      device_tag: Joi.string().allow("").allow(null),

      terminal_serial_no: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      aggregator_id: Joi.number().required(),

      edc_model: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      device_tag: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      aggregator_id: Joi.number().required(),

      aggregator_name: Joi.string().allow(""),

      store_id: Joi.number().required(),

      application_id: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      edc_device_serial_no: Joi.string().allow("").required(),

      terminal_unique_identifier: Joi.string().allow("").required(),
    });
  }

  static EdcDeviceAddResponse() {
    return Joi.object({
      data: PaymentModel.EdcDevice().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcDeviceDetailsResponse() {
    return Joi.object({
      data: PaymentModel.EdcDevice().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcUpdateRequest() {
    return Joi.object({
      device_tag: Joi.string().allow("").allow(null),

      is_active: Joi.string().allow(""),

      store_id: Joi.number(),

      aggregator_id: Joi.number(),

      edc_model: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow(""),

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
      page: PaymentModel.Page().required(),

      items: Joi.array().items(PaymentModel.EdcDevice()).required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      email: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      virtual_id: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      success: Joi.boolean().required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      customer_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
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
      data: PaymentModel.LinkStatus().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
