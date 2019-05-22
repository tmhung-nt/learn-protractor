let calculationPage = require('../PageObjects/spec.po');
describe("Validating the Calculator app", () => {

    let url = 'http://www.way2automation.com/angularjs-protractor/calc/';
    let expect_text;

    beforeEach(() => {
        calculationPage.get(url);
        calculationPage.init();
        // expect_text = calculationPage.getCalculationResult();
    })

    afterEach(() => {
        browser.sleep(1000);
    })

    it("validate 1 + 1 = 2", () => {
        calculationPage.setValueFirstNumber(1);
        calculationPage.setValueSecondNumber(1);
        calculationPage.runCalculation();
        calculationPage.verifyCalculationResultIs('2')
    });

    it("validate 1 + 1 != 3", () => {
        calculationPage.setValueFirstNumber(1);
        calculationPage.setValueSecondNumber(1);
        calculationPage.runCalculation();
        calculationPage.verifyCalculationResultIs('3');
    });
});