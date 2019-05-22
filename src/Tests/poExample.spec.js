let specPage = require('../PageObjects/spec.po.js');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    specPage.init();
    
    specPage.get();
    specPage.setName('Julie');

    expect(specPage.getGreetingText()).toEqual('Hello Julie!');
  });
});