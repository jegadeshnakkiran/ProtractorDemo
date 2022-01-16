let homepage = require('../pages/homepage');

describe('Learn Protractor automation framework',function(){

  it('Addition operation in angular calculation application',function(){

   homepage.OpenURL('http://juliemr.github.io/protractor-demo');
   homepage.GetTittle();
   homepage.GetCurrenturl();
   homepage.FirstNumberInput('10');
   homepage.secondNumberInput('20');
   homepage.ClickGo();

   browser.sleep(3000);
  
  });

});