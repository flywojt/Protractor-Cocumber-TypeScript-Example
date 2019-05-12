
export class Urls {
  public static baseUrl: string = process.env.BASE_URL || 'https://angularjs.org/';
  
  public static homePage: string = `${Urls.baseUrl}/home`;
  public static loginPage: string = `${Urls.baseUrl}/`;
}