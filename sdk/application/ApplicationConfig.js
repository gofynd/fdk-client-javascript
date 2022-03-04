const { FDKInvalidCredentialError } = require('../common/FDKError')
class ApplicationConfig {

    /**
     * @param  {object} _conf
     * @param  {object} [_opts]
     */
    constructor(_conf, _opts) {
        this.applicationID = _conf.applicationID || "";
        this.applicationToken = _conf.applicationToken || "";
        this.opts = _opts || {};
        this.domain = _conf.domain || 'https://api.fynd.com';
        this.validate();
    }

    setCookie(cookie){
        this.cookie = cookie;
    }

    validate() {
        if (!this.applicationID) {
            throw new FDKInvalidCredentialError("No Application ID Present");
        }
        if (!this.applicationToken) {
            throw new FDKInvalidCredentialError("No Application Token Present");
        }
        if (this.applicationToken.length < 5) {
            throw new FDKInvalidCredentialError("Invalid Application Token");
        }
    }

}


module.exports = ApplicationConfig;