exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/TestMatchers.js'],
    // specs: ['Tests/*.js'],
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function () {
        var HtmlReporter = require('protractor-beautiful-reporter');

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './reports'
         }).getJasmine2Reporter());
        
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
