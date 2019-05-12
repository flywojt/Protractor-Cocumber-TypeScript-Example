declare module "cucumber-html-reporter" {
  export interface CucumberHtmlReporterOptions {
    jsonFile: string;
    output: string;
    reportSuiteAsScenarios: boolean;
    theme: string;
  }
  
  export function generate(configuration: CucumberHtmlReporterOptions) : void;
}