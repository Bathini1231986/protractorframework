describe ('demo calculator test',function(){

    it('addition test',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
       
        element(by.model('first')).sendKeys('8');

        element(by.model('second')).sendKeys('8');

        element(by.css('[ng-click="doAddition()"]')).click();
       // browser.pause(15000);
        var result=element(by.css('[class="ng-binding"]')).getText();
        console.log(result);
        //expect(result.toEqual('16'));

    });

    it('substraction test', function(){

    })
});