const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow("").required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),
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
      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),
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
      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
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
      timeout: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_flow: Joi.boolean().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_number: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      retry_count: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_type: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),
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

  static PayoutCustomer() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),

      unique_external_id: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").allow(null),

      id: Joi.number().allow(null),
    });
  }

  static PayoutMoreAttributes() {
    return Joi.object({
      branch_name: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").allow(null),

      account_type: Joi.string().allow("").allow(null),
    });
  }

  static PayoutAggregator() {
    return Joi.object({
      payout_details_id: Joi.number().allow(null),

      aggregator_fund_id: Joi.number().allow(null),

      aggregator_id: Joi.number().allow(null),
    });
  }

  static Payout() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      customers: PaymentModel.PayoutCustomer().required(),

      is_default: Joi.boolean().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      more_attributes: PaymentModel.PayoutMoreAttributes().required(),

      is_active: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(PaymentModel.PayoutAggregator()),
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
      branch_name: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      pincode: Joi.number(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      users: Joi.any().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      users: Joi.any().required(),

      payouts: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

      data: Joi.any(),

      message: Joi.string().allow("").required(),
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
      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
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
      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      id: Joi.number().required(),

      transfer_mode: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      title: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
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
      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow(""),

      payment_gateway: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: PaymentModel.MultiTenderPaymentMeta(),

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
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      source: Joi.string().allow("").allow(null).required(),

      cod_charges: Joi.number(),

      anonymous_cod: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      enabled: Joi.boolean().allow(null).required(),

      methods: Joi.any().allow(null).required(),

      callback_url: Joi.any(),

      payment_selection_lock: Joi.any(),

      mode_of_payment: Joi.string().allow("").required(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.PlatformPaymentOptions().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      cod_charges: Joi.number(),

      anonymous_cod: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      methods: Joi.any().allow(null).required(),

      payment_selection_lock: Joi.any(),
    });
  }

  static CODdata() {
    return Joi.object({
      usages: Joi.number().required(),

      limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

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

      is_active: Joi.boolean().required(),

      merchant_user_id: Joi.string().allow("").required(),
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
      aggregator: Joi.string().allow("").required(),

      models: Joi.array().items(Joi.string().allow("")).required(),

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
      inactive_device_count: Joi.number().required(),

      active_device_count: Joi.number().required(),
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
      edc_device_serial_no: Joi.string().allow("").required(),

      edc_model: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      store_id: Joi.number().required(),

      device_tag: Joi.string().allow("").allow(null),

      terminal_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      edc_device_serial_no: Joi.string().allow("").required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      edc_model: Joi.string().allow(""),

      store_id: Joi.number().required(),

      aggregator_id: Joi.number().required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      aggregator_name: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

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
      edc_device_serial_no: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow(""),

      edc_model: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      device_tag: Joi.string().allow("").allow(null),

      is_active: Joi.string().allow(""),

      store_id: Joi.number(),
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
      timeout: Joi.number().allow(null),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      upi_poll_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      polling_url: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      currency: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      aggregator_order_id: Joi.string().allow(""),

      amount: Joi.number().allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      vpa: Joi.string().allow(""),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

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

      device_id: Joi.string().allow("").allow(null),

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
