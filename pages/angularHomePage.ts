import { ElementFinder } from 'protractor';
import { findBy } from 'extensions/findBy';
import { SelectorType } from 'extensions/selectorType';

export class AngularHomePage {

  @findBy(SelectorType.linkText, 'angular.io')
  angularLink: ElementFinder;
  @findBy(SelectorType.css, 'input[type=\'search\']')
  search: ElementFinder;
}
