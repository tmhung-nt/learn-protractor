// import { browser, element } from 'protractor';

describe("Test entering into an input box", function () {
    it("executing input box test", function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("5");
        element(by.binding("latest")).getText().then(
            text => {
                console.log(text);
            }
        );
    });
});