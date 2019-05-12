import { AngularHomePage } from './angularHomePage';
import { NewablePage, Page } from './page';



export { AngularHomePage, NewablePage, Page, };

export class AllPages {
  public angularHomePage: AngularHomePage;

  constructor() {
    this.angularHomePage = new AngularHomePage();
  }
}