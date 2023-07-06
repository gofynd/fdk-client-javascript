export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
     * @name attachOrderUser
     * @summary:
     * @description:
     */
    attachOrderUser({ body }?: OrderPlatformValidator.AttachOrderUserParam): Promise<OrderPlatformModel.AttachOrderUserResponse>;
    /**
     * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary:
     * @description:
     */
    checkOrderStatus({ body }?: OrderPlatformValidator.CheckOrderStatusParam): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.Click2CallParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.Click2CallResponse>} - Success response
     * @name click2Call
     * @summary:
     * @description:
     */
    click2Call({ caller, receiver, bagId, callerId, method, }?: OrderPlatformValidator.Click2CallParam): Promise<OrderPlatformModel.Click2CallResponse>;
    /**
     * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
     * @name createOrder
     * @summary:
     * @description:
     */
    createOrder({ body }?: OrderPlatformValidator.CreateOrderParam): Promise<OrderPlatformModel.CreateOrderResponse>;
    /**
     * @param {OrderPlatformValidator.DispatchManifestParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name dispatchManifest
     * @summary:
     * @description:
     */
    dispatchManifest({ body }?: OrderPlatformValidator.DispatchManifestParam): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name downloadBulkActionTemplate
     * @summary:
     * @description:
     */
    downloadBulkActionTemplate({ templateSlug }?: OrderPlatformValidator.DownloadBulkActionTemplateParam): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.FetchCreditBalanceDetailParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>}
     *   - Success response
     *
     * @name fetchCreditBalanceDetail
     * @summary:
     * @description:
     */
    fetchCreditBalanceDetail({ body }?: OrderPlatformValidator.FetchCreditBalanceDetailParam): Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>;
    /**
     * @param {OrderPlatformValidator.FetchRefundModeConfigParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
     *   Success response
     * @name fetchRefundModeConfig
     * @summary:
     * @description:
     */
    fetchRefundModeConfig({ body }?: OrderPlatformValidator.FetchRefundModeConfigParam): Promise<OrderPlatformModel.RefundModeConfigResponsePayload>;
    /**
     * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
     *   Success response
     * @name generatePOSReceiptByOrderId
     * @summary:
     * @description:
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, }?: OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>;
    /**
     * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
     * @name getAnnouncements
     * @summary:
     * @description:
     */
    getAnnouncements({ date }?: OrderPlatformValidator.GetAnnouncementsParam): Promise<OrderPlatformModel.AnnouncementsResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagByIdParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponse>} -
     *   Success response
     * @name getBagById
     * @summary:
     * @description:
     */
    getBagById({ bagId, channelBagId, channelId }?: OrderPlatformValidator.GetBagByIdParam): Promise<OrderPlatformModel.BagDetailsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
     * @name getBags
     * @summary:
     * @description:
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, }?: OrderPlatformValidator.GetBagsParam): Promise<OrderPlatformModel.GetBagsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
     *   Success response
     * @name getBulkActionTemplate
     * @summary:
     * @description:
     */
    getBulkActionTemplate({}?: any): Promise<OrderPlatformModel.BulkActionTemplateResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary:
     * @description:
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, fromDate, toDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
     * @name getLaneConfig
     * @summary:
     * @description:
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, }?: OrderPlatformValidator.GetLaneConfigParam): Promise<OrderPlatformModel.LaneConfigResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestDetailsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
     * @name getManifestDetails
     * @summary:
     * @description:
     */
    getManifestDetails({ manifestId, status, toDate, fromDate, searchType, searchValue, dpIds, pageNo, pageSize, }?: OrderPlatformValidator.GetManifestDetailsParam): Promise<OrderPlatformModel.ManifestDetails>;
    /**
     * @param {OrderPlatformValidator.GetManifestShipmentsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
     * @name getManifestShipments
     * @summary:
     * @description:
     */
    getManifestShipments({ dpIds, stores, toDate, fromDate, dpName, salesChannels, searchType, searchValue, pageNo, pageSize, }?: OrderPlatformValidator.GetManifestShipmentsParam): Promise<OrderPlatformModel.ManifestShipmentListing>;
    /**
     * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
     * @name getManifestfilters
     * @summary:
     * @description:
     */
    getManifestfilters({ view }?: OrderPlatformValidator.GetManifestfiltersParam): Promise<OrderPlatformModel.ManifestFiltersResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
     * @name getManifests
     * @summary:
     * @description:
     */
    getManifests({ status, toDate, fromDate, searchValue, dpIds, pageNo, pageSize, }?: OrderPlatformValidator.GetManifestsParam): Promise<OrderPlatformModel.ManifestList>;
    /**
     * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
     * @name getOrderById
     * @summary:
     * @description:
     */
    getOrderById({ orderId }?: OrderPlatformValidator.GetOrderByIdParam): Promise<OrderPlatformModel.OrderDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
     * @name getOrders
     * @summary:
     * @description:
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, }?: OrderPlatformValidator.GetOrdersParam): Promise<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
     * @name getRoleBasedActions
     * @summary:
     * @description:
     */
    getRoleBasedActions({}?: any): Promise<OrderPlatformModel.GetActionsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
     * @name getShipmentById
     * @summary:
     * @description:
     */
    getShipmentById({ channelShipmentId, shipmentId }?: OrderPlatformValidator.GetShipmentByIdParam): Promise<OrderPlatformModel.ShipmentInfoResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name getShipmentHistory
     * @summary:
     * @description:
     */
    getShipmentHistory({ shipmentId, bagId }?: OrderPlatformValidator.GetShipmentHistoryParam): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
     *   Success response
     * @name getShipmentReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId, bagId, state }?: OrderPlatformValidator.GetShipmentReasonsParam): Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     *   - Success response
     *
     * @name getShipments
     * @summary:
     * @description:
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, }?: OrderPlatformValidator.GetShipmentsParam): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
     * @name getStateTransitionMap
     * @summary:
     * @description:
     */
    getStateTransitionMap({}?: any): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
     * @name getfilters
     * @summary:
     * @description:
     */
    getfilters({ view, groupEntity }?: OrderPlatformValidator.GetfiltersParam): Promise<OrderPlatformModel.FiltersResponse>;
    /**
     * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
     *   Success response
     * @name invalidateShipmentCache
     * @summary:
     * @description: Invalidate shipment Cache
     */
    invalidateShipmentCache({ body }?: OrderPlatformValidator.InvalidateShipmentCacheParam): Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>;
    /**
     * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
     * @name orderUpdate
     * @summary:
     * @description:
     */
    orderUpdate({ body }?: OrderPlatformValidator.OrderUpdateParam): Promise<OrderPlatformModel.ResponseDetail>;
    /**
     * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name postShipmentHistory
     * @summary:
     * @description:
     */
    postShipmentHistory({ body }?: OrderPlatformValidator.PostShipmentHistoryParam): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.ProcessManifestParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ProcessManifestItemResponse>} -
     *   Success response
     * @name processManifest
     * @summary:
     * @description:
     */
    processManifest({ body }?: OrderPlatformValidator.ProcessManifestParam): Promise<OrderPlatformModel.ProcessManifestItemResponse>;
    /**
     * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
     * @name reassignLocation
     * @summary:
     * @description: Reassign Location
     */
    reassignLocation({ body }?: OrderPlatformValidator.ReassignLocationParam): Promise<OrderPlatformModel.StoreReassignResponse>;
    /**
     * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name sendSmsNinja
     * @summary:
     * @description:
     */
    sendSmsNinja({ body }?: OrderPlatformValidator.SendSmsNinjaParam): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
     * @name sendUserMobileOTP
     * @summary:
     * @description:
     */
    sendUserMobileOTP({ body }?: OrderPlatformValidator.SendUserMobileOTPParam): Promise<OrderPlatformModel.SendUserMobileOtpResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
     * @name updateAddress
     * @summary:
     * @description:
     */
    updateAddress({ shipmentId, addressCategory, name, address, addressType, pincode, phone, email, landmark, city, state, country, }?: OrderPlatformValidator.UpdateAddressParam): Promise<OrderPlatformModel.BaseResponse>;
    /**
     * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>}
     *   - Success response
     *
     * @name updatePackagingDimensions
     * @summary:
     * @description:
     */
    updatePackagingDimensions({ body }?: OrderPlatformValidator.UpdatePackagingDimensionsParam): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
     *   Success response
     * @name updateShipmentLock
     * @summary:
     * @description: update shipment/bag lock and check status
     */
    updateShipmentLock({ body }?: OrderPlatformValidator.UpdateShipmentLockParam): Promise<OrderPlatformModel.UpdateShipmentLockResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentStatusParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary:
     * @description: This API is for Shipment State transition or Shipment data update or both below example is for partial state transition with data update
     */
    updateShipmentStatus({ body }?: OrderPlatformValidator.UpdateShipmentStatusParam): Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>;
    /**
     * @param {OrderPlatformValidator.UploadConsentParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name uploadConsent
     * @summary:
     * @description:
     */
    uploadConsent({ body }?: OrderPlatformValidator.UploadConsentParam): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
     * @name verifyMobileOTP
     * @summary:
     * @description:
     */
    verifyMobileOTP({ body }?: OrderPlatformValidator.VerifyMobileOTPParam): Promise<OrderPlatformModel.VerifyOtpResponse>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
