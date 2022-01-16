let homepage =function(){

    let firstnumber_input= element(by.model('first'));
    let secondnumber_input= element(by.model('second'));
    let gobutton= element(by.id('gobutton'));

    this.OpenURL = function(url){
        
        browser.get(url);

    };
    this.GetTittle = function(){
        browser.getTitle().then( title =>{
        console.log("This Page Title is....." +title);
            expect(title).toEqual('Super Calculator');
        });

    };
    this.GetCurrenturl=function(){
        browser.getCurrentUrl().then(url => {
        console.log("Current URL of Page is........"+url);
        });

    };
    this.FirstNumberInput=function(firstNo){

        firstnumber_input.sendKeys(firstNo);

    };
    this.secondNumberInput=function(secondNo){

        secondnumber_input.sendKeys(secondNo);

    };
    this.ClickGo=function(){
        gobutton.click();

    };

};
module.exports = new homepage();