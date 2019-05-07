
describe("Validating title of the Calculator app", () => {

    let title;

    let expectTitle = 'Protractor practice website - Calculator';
    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        title = browser.getTitle();
    })

    it("validate exact title", () => {
        title.then( text => {
            console.log('Title is: ' + text);
            expect(title).toEqual(expectTitle);
        });
        
    });
    
    it("validate title should not match", () => {
        expect(title).not.toEqual(expectTitle.toLowerCase());
    })

    it("validate partial title match", () => {
        expect(title).toMatch(expectTitle.substring(2, 5));
    });

});