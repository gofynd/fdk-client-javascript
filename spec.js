'use strict';

const Jasmine = require('jasmine');
const jas = new Jasmine();
const JasmineConsoleReporter = require('jasmine-console-reporter');

jas.loadConfig({
    "spec_dir": "spec",
    "spec_files": [
      "**/*.spec.js"
    ],
    "helpers": [
      "helpers/**/*.js"
    ],
    "stopSpecOnExpectationFailure": true,
    "exitOnCompletion": false,
    "random": false,
    "seed": "1234"
});

const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
    listStyle: 'indent', // "flat"|"indent"
    timeUnit: 'ms',      // "ms"|"ns"|"s"
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
    activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
    emoji: true,
    beep: true
});

jas.addReporter(reporter);

jas.execute().then((passed)=>{
    if(passed) { 
        console.log('passed');
        process.exit(0);
    }
    else {
        console.log('failed');
        process.exit(1);
    }
}).catch((err)=>{
    console.log(err);
    console.log('failed')
    process.exit(1);
});
