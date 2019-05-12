import { browser } from 'protractor';


export type NewablePage<T extends Page> = new () => T;

export abstract class Page {
  protected url: string;

  public constructor() { }

  public abstract loadCondition(): Promise<boolean>;

  public async navigate(): Promise<void> {
    browser.driver.get(this.url);
  }
}
