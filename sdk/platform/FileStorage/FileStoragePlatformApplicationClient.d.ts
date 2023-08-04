export = FileStorage;
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Segregation of different types of
     *   files(products, orders, logistics etc), Required for validating the
     *   data of the file being uploaded, decides where exactly the file will be
     *   stored inside the storage bucket.
     * @param {StartResponse} arg.body
     * @returns {Promise<CompleteResponse>} - Success response
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appCompleteUpload({ namespace, body, }?: {
        namespace: string;
        body: StartResponse;
    }): Promise<CompleteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] - Sync
     * @param {CopyFiles} arg.body
     * @returns {Promise<BulkUploadSyncMode>} - Success response
     * @summary: Copy Files
     * @description: Copy Files
     */
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: CopyFiles;
    }): Promise<BulkUploadSyncMode>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Segregation of different types of
     *   files(products, orders, logistics etc), Required for validating the
     *   data of the file being uploaded, decides where exactly the file will be
     *   stored inside the storage bucket.
     * @param {StartRequest} arg.body
     * @returns {Promise<StartResponse>} - Success response
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appStartUpload({ namespace, body, }?: {
        namespace: string;
        body: StartRequest;
    }): Promise<StartResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Segregation of different types of
     *   files(products, orders, logistics etc), Required for validating the
     *   data of the file being uploaded, decides where exactly the file will be
     *   stored inside the storage bucket.
     * @param {number} [arg.page] - Page no
     * @param {number} [arg.limit] - Limit
     * @returns {Promise<BrowseResponse>} - Success response
     * @summary: Browse Files
     * @description: Browse Files
     */
    appbrowse({ namespace, page, limit, }?: {
        namespace: string;
        page?: number;
        limit?: number;
    }): Promise<BrowseResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.pdfTypeId -
     * @param {string} arg.format -
     * @returns {Promise<Object[]>} - Success response
     * @summary: Get html template for sales channel
     * @description: Get default html template for invoice or label
     */
    getDefaultHtmlTemplate({ pdfTypeId, format }?: {
        pdfTypeId: number;
        format: string;
    }): Promise<any[]>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.pdfTypeId -
     * @returns {Promise<DummyTemplateDataItems[]>} - Success response
     * @summary: Get Dummy pdf data for invoice or label
     * @description: Get Dummy pdf data for invoice or label
     */
    getDefaultPdfData({ pdfTypeId }?: {
        pdfTypeId: number;
    }): Promise<DummyTemplateDataItems[]>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.pdfTypeId -
     * @param {string} arg.format -
     * @returns {Promise<Object[]>} - Success response
     * @summary: Default html template
     * @description: Get default html template data for invoice or label
     */
    getDefaultPdfTemplate({ pdfTypeId, format }?: {
        pdfTypeId: number;
        format: string;
    }): Promise<any[]>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<InvoiceTypesResponse[]>} - Success response
     * @summary: Get all the supported invoice pdf types
     * @description: Get all the supported invoice pdf types such as Invoice, Label, Deliver challan
     */
    getPdfTypes({}?: any): Promise<InvoiceTypesResponse[]>;
    /**
     * @param {Object} arg - Arg object.
     * @param {pdfRender} arg.body
     * @returns {Promise<string>} - Success response
     * @summary: Preview HTML template
     * @description: Rendered HTML template with dummy json data
     */
    previewTemplate({ body }?: {
        body: pdfRender;
    }): Promise<string>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id -
     * @param {pdfConfig} arg.body
     * @returns {Promise<Object>} - Success response
     * @summary: Update html template for invoice or label
     * @description: Update html template for invoice such as Invoice, Label, Deliver challan
     */
    saveHtmlTemplate({ id, body }?: {
        id: number;
        body: pdfConfig;
    }): Promise<any>;
    /**
     * @param data
     * @param {string} file_name
     * @param {string} content_type
     * @param {string} namespace
     * @param {number} size
     * @param {number} tags
     */
    upload({ data, file_name, content_type, namespace, size, tags, }?: {
        data: any;
        file_name: any;
        content_type: any;
        namespace: any;
        size: any;
        tags: any;
    }): Promise<any>;
}
