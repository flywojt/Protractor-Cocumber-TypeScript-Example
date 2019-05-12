import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { AngularHomePage } from 'pages';

let ah = new AngularHomePage();

Given('I will navigate to AngularJs page', async () => {
  await browser.get('https://angularjs.org/');
});

When('I clicked on header link', async () => {
  // Write code here that turns the phrase above into concrete actions

  await ah.angularLink.click();
});

When('you will navigate to angular page',{timeout: 10*1000}, async () => {
  // Write code here that turns the phrase above into concrete actions
  console.log('navigated to new page');
});

Then('you will enter {string} in search box', async string => {
  // Write code here that turns the phrase above into concrete actions
  await browser.sleep(3000);
  await ah.search.sendKeys(string);
});
