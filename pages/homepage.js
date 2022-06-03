let homepage=function(){

    var firstnumber_input=element(by.model('first'));
    var secondnumber_input=element(by.model('second'));
    var goButton=element(by.css('[ng-click="doAddition()"]'));

    this.enterFirstNumber=function(firstNo)
    {
        firstnumber_input.sendKeys(firstNo);
    }

    this.enterSecondNumber=function(secondNo)
    {
        secondnumber_input.sendKeys(secondNo);
    }

    this.clickGo=function()
    {
        goButton.click();
    }
}
}