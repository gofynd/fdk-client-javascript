export = SwaggerTest;
declare class SwaggerTest {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: test swagger
     * @description: Test swagger
     */
    testSwaggerApi({}?: any): Promise<any>;
}
