const log = require('loglevel');
const packageJSON = require('../../package.json');

const PACKAGE_VERSION = getPackageVersion();

function Logger(data) {
    const { level, message, ...others } = data;

    if(level === 'TRACE') {
        log.trace(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: PACKAGE_VERSION}))
    }

    if(level === 'DEBUG') {
        log.debug(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: PACKAGE_VERSION}))
    }

    if(level === 'INFO') {
        log.info(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: PACKAGE_VERSION}))
    }

    if(level === 'WARN') {
        log.warn(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: PACKAGE_VERSION}))
    }

    if(level === 'ERROR') {
        log.error(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: PACKAGE_VERSION}))
    }
}

function setLoggerLevel(level) {
    log.setLevel(level);
}

function getDateTime() {
    return new Date().toString();
}

function getPackageVersion() {
    return packageJSON.version;
}

module.exports = {
    Logger,
    setLoggerLevel
}