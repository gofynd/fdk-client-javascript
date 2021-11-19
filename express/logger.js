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