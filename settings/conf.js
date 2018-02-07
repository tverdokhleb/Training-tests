exports.config = {
    directConnection: true,
    framework: 'jasmine2',
    onPrepare: function() {
        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tmp/settings/spec.js'],
    //SELENIUM_PROMISE_MANAGER: false,


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        // 'browserName': 'firefox',
        // 'browserName': 'internet explorer',
        // 'ignoreProtectedModeSettings': true
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    }
}
