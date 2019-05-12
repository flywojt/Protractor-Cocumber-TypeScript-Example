import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { AngularHomePage } from 'pages';
import { async } from 'q';

let ah = new AngularHomePage();

Given('I am on AngularIo page', async () => null );

When('I type {string} in search box', async (string:string) => {
  await ah.searchPhrase(string);
});

Then('Search results shows', async string => {
  await ah.searchResultIsPresent();
});