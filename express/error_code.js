'use strict';

class FdkInvalidExtensionJson extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkClusterMetaMissingEror extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkSessionNotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
class FdkInvalidOAuthError extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkInvalidHMacError extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkInvalidWebhookConfig extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkWebhookRegistrationError extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkWebhookHandleFailure extends Error {
    constructor(message) {
        super(message);
    }
}

class FdkWebhookHandlerNotFound extends Error {
    constructor(message) {
        super(message);
    }
}


module.exports = {
    FdkInvalidExtensionJson,
    FdkClusterMetaMissingEror,
    FdkSessionNotFoundError,
    FdkInvalidOAuthError,
    FdkInvalidHMacError,
    FdkInvalidWebhookConfig,
    FdkWebhookRegistrationError,
    FdkWebhookHandleFailure,
    FdkWebhookHandlerNotFound
};