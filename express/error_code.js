'use strict';

class InvalidExtensionJson extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = {
    InvalidExtensionJson
};