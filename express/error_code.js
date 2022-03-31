'use strict';

class FdkInvalidExtensionConfig extends Error {
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

class FdkWebhookProcessError extends Error {
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
    FdkInvalidExtensionConfig,
    FdkClusterMetaMissingEror,
    FdkSessionNotFoundError,
    FdkInvalidOAuthError,
    FdkInvalidHMacError,
    FdkInvalidWebhookConfig,
    FdkWebhookRegistrationError,
    FdkWebhookProcessError,
    FdkWebhookHandlerNotFound
};