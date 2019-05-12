import { SelectorType } from './selectorType';
import { element, by, ElementFinder } from 'protractor';

export function findBy(selectorType: SelectorType, selector: string) {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function() {
        let searchedElement: ElementFinder;

        switch (selectorType) {
          case SelectorType.css:
            searchedElement = element(by.css(selector));
            break;
          case SelectorType.id:
            searchedElement = element(by.id(selector));
            break;
          case SelectorType.xpath:
            searchedElement = element(by.xpath(selector));
            break;
          case SelectorType.linkText:
            searchedElement = element(by.linkText(selector));
            break;
          default:
            throw new Error(`Selector type: ${selectorType} not found !!!`);
        }

        return searchedElement;
      }
    });
  };
}
