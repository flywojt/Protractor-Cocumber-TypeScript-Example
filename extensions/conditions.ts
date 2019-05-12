import { ElementFinder, } from 'protractor';
import { NewablePage, Page } from 'pages/page';


export const elementIsVisible = async (locator: ElementFinder): Promise<boolean> => {
  return locator.isDisplayed();
}

export function pageHasLoaded<T extends Page>(page: NewablePage<T>): Promise<boolean> {
  var newPage = new page();
  return newPage.loadCondition();
}
