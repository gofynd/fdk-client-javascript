export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.attachOrderUser} arg - Arg object
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
     * @name attachOrderUser
     * @summary:
     * @description:
     */
    attachOrderUser({ body }?: OrderPlatformValidator.attachOrderUser): Promise<OrderPlatformModel.AttachOrderUserResponse>;
    /**
     * @param {OrderPlatformValidator.checkOrderStatus} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary:
     * @description:
     */
    checkOrderStatus({ body }?: OrderPlatformValidator.checkOrderStatus): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.click2Call} arg - Arg object
     * @returns {Promise<OrderPlatformModel.Click2CallResponse>} - Success response
     * @name click2Call
     * @summary:
     * @description:
     */
    click2Call({ caller, receiver, bagId, callerId, method, }?: OrderPlatformValidator.click2Call): Promise<OrderPlatformModel.Click2CallResponse>;
    /**
     * @param {OrderPlatformValidator.createChannelConfig} arg - Arg object
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigResponse>} -
     *   Success response
     * @name createChannelConfig
     * @summary:
     * @description: createChannelConfig
     */
    createChannelConfig({ body }?: OrderPlatformValidator.createChannelConfig): Promise<OrderPlatformModel.CreateChannelConfigResponse>;
    /**
     * @param {OrderPlatformValidator.createOrder} arg - Arg object
     * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
     * @name createOrder
     * @summary:
     * @description:
     */
    createOrder({ body }?: OrderPlatformValidator.createOrder): Promise<OrderPlatformModel.CreateOrderResponse>;
    /**
     * @param {OrderPlatformValidator.createShipmentReport} arg - Arg object
     * @returns {Promise<OrderPlatformModel.Success>} - Success response
     * @name createShipmentReport
     * @summary:
     * @description:
     */
    createShipmentReport({ fromDate, toDate }?: OrderPlatformValidator.createShipmentReport): Promise<OrderPlatformModel.Success>;
    /**
     * @param {OrderPlatformValidator.dispatchManifest} arg - Arg object
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name dispatchManifest
     * @summary:
     * @description:
     */
    dispatchManifest({ body }?: OrderPlatformValidator.dispatchManifest): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.downloadBulkActionTemplate} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name downloadBulkActionTemplate
     * @summary:
     * @description:
     */
    downloadBulkActionTemplate({ templateSlug }?: OrderPlatformValidator.downloadBulkActionTemplate): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.fetchCreditBalanceDetail} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>}
     *   - Success response
     *
     * @name fetchCreditBalanceDetail
     * @summary:
     * @description:
     */
    fetchCreditBalanceDetail({ body }?: OrderPlatformValidator.fetchCreditBalanceDetail): Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>;
    /**
     * @param {OrderPlatformValidator.fetchRefundModeConfig} arg - Arg object
     * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
     *   Success response
     * @name fetchRefundModeConfig
     * @summary:
     * @description:
     */
    fetchRefundModeConfig({ body }?: OrderPlatformValidator.fetchRefundModeConfig): Promise<OrderPlatformModel.RefundModeConfigResponsePayload>;
    /**
     * @param {OrderPlatformValidator.generatePOSReceiptByOrderId} arg - Arg object
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
     *   Success response
     * @name generatePOSReceiptByOrderId
     * @summary:
     * @description:
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, }?: OrderPlatformValidator.generatePOSReceiptByOrderId): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>;
    /**
     * @param {OrderPlatformValidator.getAnnouncements} arg - Arg object
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
     * @name getAnnouncements
     * @summary:
     * @description:
     */
    getAnnouncements({ date }?: OrderPlatformValidator.getAnnouncements): Promise<OrderPlatformModel.AnnouncementsResponse>;
    /**
     * @param {OrderPlatformValidator.getAssetByShipmentIds} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ResponseGetAssetShipment>} - Success response
     * @name getAssetByShipmentIds
     * @summary: Get Invoice or Label or Pos of a shipment
     * @description: Use this API to retrieve shipments invoice, label and pos.
     */
    getAssetByShipmentIds({ shipmentIds, invoice, expiresIn }?: OrderPlatformValidator.getAssetByShipmentIds): Promise<OrderPlatformModel.ResponseGetAssetShipment>;
    /**
     * @param {OrderPlatformValidator.getBagById} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponse>} -
     *   Success response
     * @name getBagById
     * @summary:
     * @description:
     */
    getBagById({ bagId, channelBagId, channelId }?: OrderPlatformValidator.getBagById): Promise<OrderPlatformModel.BagDetailsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.getBags} arg - Arg object
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
     * @name getBags
     * @summary:
     * @description:
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, }?: OrderPlatformValidator.getBags): Promise<OrderPlatformModel.GetBagsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.getBulkActionTemplate} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
     *   Success response
     * @name getBulkActionTemplate
     * @summary:
     * @description:
     */
    getBulkActionTemplate({}?: any): Promise<OrderPlatformModel.BulkActionTemplateResponse>;
    /**
     * @param {OrderPlatformValidator.getBulkShipmentExcelFile} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary:
     * @description:
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, fromDate, toDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, }?: OrderPlatformValidator.getBulkShipmentExcelFile): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.getChannelConfig} arg - Arg object
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigData>} - Success response
     * @name getChannelConfig
     * @summary:
     * @description: getChannelConfig
     */
    getChannelConfig({}?: any): Promise<OrderPlatformModel.CreateChannelConfigData>;
    /**
     * @param {OrderPlatformValidator.getLaneConfig} arg - Arg object
     * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
     * @name getLaneConfig
     * @summary:
     * @description:
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, }?: OrderPlatformValidator.getLaneConfig): Promise<OrderPlatformModel.LaneConfigResponse>;
    /**
     * @param {OrderPlatformValidator.getManifestDetails} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
     * @name getManifestDetails
     * @summary:
     * @description:
     */
    getManifestDetails({ manifestId, status, toDate, fromDate, searchType, searchValue, dpIds, pageNo, pageSize, }?: OrderPlatformValidator.getManifestDetails): Promise<OrderPlatformModel.ManifestDetails>;
    /**
     * @param {OrderPlatformValidator.getManifestShipments} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
     * @name getManifestShipments
     * @summary:
     * @description:
     */
    getManifestShipments({ dpIds, stores, toDate, fromDate, dpName, salesChannels, searchType, searchValue, pageNo, pageSize, }?: OrderPlatformValidator.getManifestShipments): Promise<OrderPlatformModel.ManifestShipmentListing>;
    /**
     * @param {OrderPlatformValidator.getManifestfilters} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
     * @name getManifestfilters
     * @summary:
     * @description:
     */
    getManifestfilters({ view }?: OrderPlatformValidator.getManifestfilters): Promise<OrderPlatformModel.ManifestFiltersResponse>;
    /**
     * @param {OrderPlatformValidator.getManifests} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
     * @name getManifests
     * @summary:
     * @description:
     */
    getManifests({ status, toDate, fromDate, searchValue, dpIds, pageNo, pageSize, }?: OrderPlatformValidator.getManifests): Promise<OrderPlatformModel.ManifestList>;
    /**
     * @param {OrderPlatformValidator.getMetricCount} arg - Arg object
     * @returns {Promise<OrderPlatformModel.MetricCountResponse>} - Success response
     * @name getMetricCount
     * @summary:
     * @description:
     */
    getMetricCount({ fromDate, toDate }?: OrderPlatformValidator.getMetricCount): Promise<OrderPlatformModel.MetricCountResponse>;
    /**
     * @param {OrderPlatformValidator.getOrderById} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
     * @name getOrderById
     * @summary:
     * @description:
     */
    getOrderById({ orderId }?: OrderPlatformValidator.getOrderById): Promise<OrderPlatformModel.OrderDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.getOrders} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
     * @name getOrders
     * @summary:
     * @description:
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, }?: OrderPlatformValidator.getOrders): Promise<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {OrderPlatformValidator.getReportsShipmentListing} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OmsReports>} - Success response
     * @name getReportsShipmentListing
     * @summary:
     * @description:
     */
    getReportsShipmentListing({ pageNo, pageSize }?: OrderPlatformValidator.getReportsShipmentListing): Promise<OrderPlatformModel.OmsReports>;
    /**
     * @param {OrderPlatformValidator.getRoleBasedActions} arg - Arg object
     * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
     * @name getRoleBasedActions
     * @summary:
     * @description:
     */
    getRoleBasedActions({}?: any): Promise<OrderPlatformModel.GetActionsResponse>;
    /**
     * @param {OrderPlatformValidator.getShipmentById} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
     * @name getShipmentById
     * @summary:
     * @description:
     */
    getShipmentById({ channelShipmentId, shipmentId }?: OrderPlatformValidator.getShipmentById): Promise<OrderPlatformModel.ShipmentInfoResponse>;
    /**
     * @param {OrderPlatformValidator.getShipmentHistory} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name getShipmentHistory
     * @summary:
     * @description:
     */
    getShipmentHistory({ shipmentId, bagId }?: OrderPlatformValidator.getShipmentHistory): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.getShipmentReasons} arg - Arg object
     * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
     *   Success response
     * @name getShipmentReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId, bagId, state }?: OrderPlatformValidator.getShipmentReasons): Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>;
    /**
     * @param {OrderPlatformValidator.getShipments} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     *   - Success response
     *
     * @name getShipments
     * @summary:
     * @description:
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, }?: OrderPlatformValidator.getShipments): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {OrderPlatformValidator.getStateTransitionMap} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
     * @name getStateTransitionMap
     * @summary:
     * @description:
     */
    getStateTransitionMap({}?: any): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.getfilters} arg - Arg object
     * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
     * @name getfilters
     * @summary:
     * @description:
     */
    getfilters({ view, groupEntity }?: OrderPlatformValidator.getfilters): Promise<OrderPlatformModel.FiltersResponse>;
    /**
     * @param {OrderPlatformValidator.invalidateShipmentCache} arg - Arg object
     * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
     *   Success response
     * @name invalidateShipmentCache
     * @summary:
     * @description: Invalidate shipment Cache
     */
    invalidateShipmentCache({ body }?: OrderPlatformValidator.invalidateShipmentCache): Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>;
    /**
     * @param {OrderPlatformValidator.orderUpdate} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
     * @name orderUpdate
     * @summary:
     * @description:
     */
    orderUpdate({ body }?: OrderPlatformValidator.orderUpdate): Promise<OrderPlatformModel.ResponseDetail>;
    /**
     * @param {OrderPlatformValidator.postShipmentHistory} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name postShipmentHistory
     * @summary:
     * @description:
     */
    postShipmentHistory({ body }?: OrderPlatformValidator.postShipmentHistory): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.processManifest} arg - Arg object
     * @returns {Promise<OrderPlatformModel.ProcessManifestItemResponse>} -
     *   Success response
     * @name processManifest
     * @summary:
     * @description:
     */
    processManifest({ body }?: OrderPlatformValidator.processManifest): Promise<OrderPlatformModel.ProcessManifestItemResponse>;
    /**
     * @param {OrderPlatformValidator.reassignLocation} arg - Arg object
     * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
     * @name reassignLocation
     * @summary:
     * @description: Reassign Location
     */
    reassignLocation({ body }?: OrderPlatformValidator.reassignLocation): Promise<OrderPlatformModel.StoreReassignResponse>;
    /**
     * @param {OrderPlatformValidator.sendSmsNinja} arg - Arg object
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name sendSmsNinja
     * @summary:
     * @description:
     */
    sendSmsNinja({ body }?: OrderPlatformValidator.sendSmsNinja): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.sendUserMobileOTP} arg - Arg object
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
     * @name sendUserMobileOTP
     * @summary:
     * @description:
     */
    sendUserMobileOTP({ body }?: OrderPlatformValidator.sendUserMobileOTP): Promise<OrderPlatformModel.SendUserMobileOtpResponse>;
    /**
     * @param {OrderPlatformValidator.updateAddress} arg - Arg object
     * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
     * @name updateAddress
     * @summary:
     * @description:
     */
    updateAddress({ shipmentId, addressCategory, name, address, addressType, pincode, phone, email, landmark, city, state, country, }?: OrderPlatformValidator.updateAddress): Promise<OrderPlatformModel.BaseResponse>;
    /**
     * @param {OrderPlatformValidator.updatePackagingDimensions} arg - Arg object
     * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>}
     *   - Success response
     *
     * @name updatePackagingDimensions
     * @summary:
     * @description:
     */
    updatePackagingDimensions({ body }?: OrderPlatformValidator.updatePackagingDimensions): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>;
    /**
     * @param {OrderPlatformValidator.updateShipmentLock} arg - Arg object
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
     *   Success response
     * @name updateShipmentLock
     * @summary:
     * @description: update shipment/bag lock and check status
     */
    updateShipmentLock({ body }?: OrderPlatformValidator.updateShipmentLock): Promise<OrderPlatformModel.UpdateShipmentLockResponse>;
    /**
     * @param {OrderPlatformValidator.updateShipmentStatus} arg - Arg object
     * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary:
     * @description: This API is for Shipment State transition or Shipment data update or both below example is for partial state transition with data update
     */
    updateShipmentStatus({ body }?: OrderPlatformValidator.updateShipmentStatus): Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>;
    /**
     * @param {OrderPlatformValidator.uploadConsent} arg - Arg object
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name uploadConsent
     * @summary:
     * @description:
     */
    uploadConsent({ body }?: OrderPlatformValidator.uploadConsent): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.upsertJioCode} arg - Arg object
     * @returns {Promise<OrderPlatformModel.JioCodeUpsertResponse>} - Success response
     * @name upsertJioCode
     * @summary:
     * @description:
     */
    upsertJioCode({ body }?: OrderPlatformValidator.upsertJioCode): Promise<OrderPlatformModel.JioCodeUpsertResponse>;
    /**
     * @param {OrderPlatformValidator.verifyMobileOTP} arg - Arg object
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
     * @name verifyMobileOTP
     * @summary:
     * @description:
     */
    verifyMobileOTP({ body }?: OrderPlatformValidator.verifyMobileOTP): Promise<OrderPlatformModel.VerifyOtpResponse>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
