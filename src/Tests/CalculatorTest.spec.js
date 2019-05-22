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
        calculationPage.verifyCalculationResultIsNOT('3');
    });

    it("validate 5 * 6 = 30", () => {
        calculationPage.setValueFirstNumber(5);
        calculationPage.setValueSecondNumber(6);
        calculationPage.setOperator('*');
        calculationPage.runCalculation();
        calculationPage.verifyCalculationResultIs('30');
    });

    it("validate 30 / 5 = 6", () => {
        calculationPage.setValueFirstNumber(30);
        calculationPage.setValueSecondNumber(5);
        calculationPage.setOperator('/');
        calculationPage.runCalculation();
        calculationPage.verifyCalculationResultIs('6');
    });
    it("validate 26 % 11 = 4", () => {
        calculationPage.setValueFirstNumber(26);
        calculationPage.setValueSecondNumber(11);
        calculationPage.setOperator('%');
        calculationPage.runCalculation();
        calculationPage.verifyCalculationResultIs('4');
    });
});