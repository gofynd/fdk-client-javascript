const ngrok = require('ngrok');
(async function () {
    let url = await ngrok.connect(5070);
    console.log(url);

    async function exitHandler(options, exitCode) {
        try {
            await ngrok.disconnect();
        } catch (error) {

        } finally {
            process.exit();
        }
    }

    process.on('exit', exitHandler.bind(null, {
        cleanup: true
    }));

    //catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, {
        exit: true
    }));

    // catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler.bind(null, {
        exit: true
    }));
    process.on('SIGUSR2', exitHandler.bind(null, {
        exit: true
    }));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, {
        exit: true
    }));

})();