exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/handle-dropdown.js'],
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function () {
        const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/',
            screenshotsFolder: 'images'
        }));
        
        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
};
