const { createLogger, format, transports } = require('winston');

const options = {
    level: 'error',
    handleExceptions: true,
    json: true,
    colorize: true
};

const logger = createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(({ timestamp, level, message, meta }) => {
            return `${timestamp} ${level} ${message} ${meta ? JSON.stringify(meta) : ''}`;
        }),
        format.colorize()
    ),
    defaultMeta: { library: 'fdk-extension-javascript' }
});

logger.add(
    new transports.Console({
        transports: [new transports.Console(options)],
    })
)

module.exports = logger;

module.exports.safeStringify = function(jsonObj) {
    let cache = [];
    return JSON.stringify(jsonObj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            // Duplicate reference found, discard key
            if (cache.includes(value)) return ;

            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
}
