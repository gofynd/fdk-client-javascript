'use strict';

class InvalidExtensionJson extends Error {
    constructor(message) {
        super(message);
    }
}

class ClusterMetaMissingEror extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = {
    InvalidExtensionJson,
    ClusterMetaMissingEror
};