import { ElementFinder, browser } from 'protractor';
import { Page } from './page';
import { Urls } from 'configs';
import { elementIsVisible } from 'extensions/conditions';
import { findBy } from 'extensions/findBy';
import { SelectorType } from 'extensions/selectorType';

export class AngularHomePage extends Page {
  constructor() {
    super();
    this.url = Urls.homePage;
  }

  @findBy(SelectorType.css, '.search-result-item')
  public searchResult: ElementFinder;

  @findBy(SelectorType.css, 'input[type=\'search\']')
  public search: ElementFinder;

  public async loadCondition(): Promise<boolean> {
    return (await browser.wait(elementIsVisible(this.search), 10000)) !== undefined;
  }
  public async searchPhrase(string: string): Promise<void> {
    await browser.wait(this.search.isPresent(), 3000);
    await this.search.sendKeys(string);
  }
  public async searchResultIsPresent(): Promise<void> {
    await browser.wait(this.searchResult.isPresent(), 3000);
    await this.searchResult.isDisplayed();
  }


}
