const {ApplicationConfig, ApplicationClient} = require('./sdk/application');
const {PlatformConfig, PlatformClient} = require('./sdk/platform');
const {fdkAxios} = require('./sdk/common/AxiosHelper');

module.exports = {
    ApplicationConfig: ApplicationConfig,
    ApplicationClient: ApplicationClient,
    PlatformConfig: PlatformConfig,
    PlatformClient: PlatformClient,
    FdkAxios: fdkAxios
};
