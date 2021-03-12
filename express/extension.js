'use strict';
const validator = require('validator');
const {InvalidExtensionJson} = require("./error_code");
const urljoin = require('url-join');

class Extension {
    constructor(data) {
        this.storage = data.storage;
        this.name = data.name;
        this.prefix_path = data.prefix_path;
        
        if(!validator.isURL(data.base_url)) {
            throw new InvalidExtensionJson("Invalid base_url");
        }
        
        this.base_url = data.base_url;

        if(!data.logo.small || !data.logo.large) {
            throw new InvalidExtensionJson("Missing logo");
        }

        this.logo = data.logo;
        this.scopes = this.verifyScopes(data.scopes);

        if(!data.callbacks || ( data.callbacks && (!data.callbacks.setup || !data.callbacks.auth || !data.callbacks.install || !data.callbacks.uninstall))) {
            throw new InvalidExtensionJson("Missing some of callbacks. Please add all  `setup`, `auth`, `install` and `uninstall` callbacks.");
        }

        this.callbacks = data.callbacks;
        this.developed_by_name = data.developed_by_name;

        if(data.contact_email && validator.isEmail(data.contact_email)) {
            this.contact_email = data.contact_email;
        } else {
            this.contact_email = null;
        }
        this.access_mode = data.access_mode || "offline";
    }

    verifyScopes(scopes) {
        if(!scopes || scopes.length <= 0 ) {
            throw new InvalidExtensionJson("Invalid scopes in extension.json");
        }
        return scopes;
    }

    toJson() {
        return {
            name: this.name,
            base_url: this.base_url,
            logo: this.logo,
            scopes: this.scopes,
            developed_by_name: this.developed_by_name,
            contact_email: this.contact_email,
            callbacks: {
                setup: urljoin(this.base_url, this.prefix_path, "/setup"), 
                auth: urljoin(this.base_url, this.prefix_path, "/auth"),
                install: urljoin(this.base_url, this.prefix_path, "/install"),
                uninstall: urljoin(this.base_url, this.prefix_path, "/uninstall")
            },
            webhooks: [{
                
            }]
        };
    }

    isOnlineAccessMode() {
        return this.access_mode;
    }
    async register() {
        // TODO: add code for triggering register extension call explicitly 
    }
}

module.exports = Extension;