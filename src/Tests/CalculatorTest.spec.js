let calculationPage = require
describe("Validating the Calculator app", () => {

    let url = 'http://www.way2automation.com/angularjs-protractor/calc/';
    let expect_text;

    beforeEach(() => {
        // browser.get('');

        // element(by.model('first')).sendKeys('1');
        // element(by.model('second')).sendKeys('1');
        // element(by.buttonText('Go!')).click();

        // expect_text = element(by.binding('latest')).getText();
        calculationPage.init();
        calculationPage.get(url);
        expect_text = calculationPage.getCalculationResult();
    })

    afterEach(() => {
        browser.sleep(1000);
    })

    it("validate 1 + 1 = 2", () => {
        
        calculationPage.setValueFirstNumber(1);
        expect_text.then(text =>{
            expect(text).toBe('2');
        });
        
    });

    it("validate 1 + 1 != 3", () => {
        expect_text.then(text =>{
            expect(parseInt(text)).not.toBe(3);
        });        
    });
});