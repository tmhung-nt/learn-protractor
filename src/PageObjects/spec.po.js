let firstNumberEle,
    secondNumberEle,
    operationEle,
    goBtnEle,
    calculationResultEle;

module.exports = {
  init: () => {
    firstNumberEle = element(by.model('first'));
    secondNumberEle = element(by.model('second'));
    goBtnEle = element(by.buttonText('Go!'));
    calculationResultEle = element(by.binding('latest'));

  },
  get: (string) => {
    console.log(browser.getSession().value_.id_);
    return browser.get(string);
  },
  setValueFirstNumber: (value) => {
    return firstNumberEle.sendKeys(value);
  },
  setValueSecondNumber: (value) => {
    return secondNumberEle.sendKeys(value);
  },
  runCalculation: () => {
    return goBtnEle.click();
  },
  getCalculationResult: () => {
    return calculationResultEle.getText();
  },
  verifyCalculationResultIs: (expectedValue) => {
    calculationResultEle.getText().then(text =>{
      expect(text).toBe(expectedValue);
    });
  },
  verifyCalculationResultIsNOT: (expectedValue) => {
    calculationResultEle.getText().then(text =>{
      expect(text).not.toBe(expectedValue);
    });
  }
}