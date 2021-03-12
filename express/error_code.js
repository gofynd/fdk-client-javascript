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


module.exports = {
    FdkInvalidExtensionJson,
    FdkClusterMetaMissingEror,
    FdkSessionNotFoundError,
    FdkInvalidOAuthError
};