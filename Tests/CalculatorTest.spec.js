describe("Validating the Calculator app", () => {

    let expect_text;

    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('1');
        element(by.buttonText('Go!')).click();

        expect_text = element(by.binding('latest')).getText();
    })

    afterEach(() => {
        browser.sleep(1000);
    })

    it("validate 1 + 1 = 2", () => {
        
        // expect(element(by.binding('latest')).getText()).toEqual('2');
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