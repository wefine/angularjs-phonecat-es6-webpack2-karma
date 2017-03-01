// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'browserify'],


        // list of files / patterns to load in the browser
        files: [
            'src/**/*.[hH]elper.js',
            { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', watched: false },
            'tests.webpack.js'
        ],

        // list of files to exclude
        exclude: [
            "**/coverage"
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['coverage'],
            'tests.webpack.js': ['browserify','coverage','webpack', 'sourcemap'],
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html', 'coverage'],

        htmlReporter: {
            outputFile: 'karma_report.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: 'Jasmine examples test report',
            groupSuites: true,
            useCompactStyle: false,
            useLegacyStyle: true
        },

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'html' }
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // Hide webpack build information from output
        webpackMiddleware: {
            stats: 'errors-only'
        }
    })
};
