exports.config = {
    specs: [
        'src/specs/correos/*',
        'src/pop/correos/*'
    ],
    suites: {
        correos_specs : [
            './src/specs/correos/CorreosContactForm.js'
        ],
        correos_pop : [
            './src/pop/correos/PageTest.js'
        ]
    },
    // Patterns to exclude.
    exclude: [
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox',
        maxInstances: 5,
        chromeOptions: {
            args: [
                '--headless', // Ocultar navegador
                '--disable-gpu', // Desabilitar GPU
                '--window-size=1000,800' // Resolución navegador
            ]
        }
    }],
    // ===================
    // Test Configurations
    // ===================
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',
    // Enables colors for log output.
    coloredLogs: true,
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", the base url gets prepended.
    baseURLCorreos: 'https://www.correosexpress.com/web/correosexpress/consultanos',
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 1000,
    // ===================
    // Services
    // ===================
    services: ['selenium-standalone'],
    // Framework you want to run your specs with.
    // The following are supported: mocha, jasmine and cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed before running any tests.
    framework: 'mocha',
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide.html and click on "Reporters" in left column
    reporters: ['dot','junit'],
    // Some reporter require additional information which should get defined here
    reporterOptions: {
        junit: {
            outputDir: './'
        },
    },
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd'
    },
};