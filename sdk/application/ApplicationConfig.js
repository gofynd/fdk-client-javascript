const { FDKInvalidCredentialError } = require('../common/FDKError')
const { Logger, setLoggerLevel } = require('../common/Logger');

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
        this.logLevel = _conf.logLevel || "ERROR";
        this.setLogLevel(this.logLevel);
        this.validate();
    }

    setLogLevel(level) {
        setLoggerLevel(level);
    }

    setCookie(cookie){
        this.cookie = cookie;
    }

    validate() {
        if (!this.applicationID) {
            Logger({type: 'ERROR', message: "No Application ID Present"});
            throw new FDKInvalidCredentialError("No Application ID Present");
        }
        if (!this.applicationToken) {
            Logger({level: 'ERROR', message: "No Application Token Present"});
            throw new FDKInvalidCredentialError("No Application Token Present");
        }
        if (this.applicationToken.length < 5) {
            Logger({level: 'ERROR', message: "Invalid Application Token"});
            throw new FDKInvalidCredentialError("Invalid Application Token");
        }
    }

}


module.exports = ApplicationConfig;