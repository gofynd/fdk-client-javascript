
class CredentialValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "CredentialValidationError"; // (2)
    }
}

const MongoIDRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i

class Credential {
    constructor(_conf, _opts) {
        this.ApplicationId = _conf.ApplicationId || "";
        this.ApplicationToken = _conf.ApplicationToken || ""; 
        this.opts = _opts || {};
        this.validate();
    }

    validate() {
        if(!this.ApplicationId) {
            throw new CredentialValidationError("No Application ID Present");
        }
        if(!this.ApplicationToken) {
            throw new CredentialValidationError("No Application Token Present");
        }
        console.log("this.ApplicationId", this.ApplicationId);
        if(!MongoIDRegExp.test(this.ApplicationId)) {
            throw new CredentialValidationError("Invalid Application ID. It should be Mongo ID");
        }
        if(this.ApplicationToken.length < 5) {
            throw new CredentialValidationError("Invalid Application Token");
        }
    }

}


module.exports = Credential;