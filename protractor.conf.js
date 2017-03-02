//jshint strict: false

exports.config = {
    allScriptsTimeout: 5000000,

    specs: [
        './src/app/**/*.e2e.js'
    ],
    directConnect: true,

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    baseUrl: 'http://localhost:9000/#!/',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },

    capabilities: {
        'browserName': 'chrome'
    },
};
