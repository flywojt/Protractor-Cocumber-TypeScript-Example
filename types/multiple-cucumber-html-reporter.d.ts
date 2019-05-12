declare module 'multiple-cucumber-html-reporter' {
  export interface MultipleCucumberHtmlReporterOptions {
    jsonDir: string;
    reportPath: string;
    openReportInBrowser?: boolean;
    metadata?: {};
    customData?: {};
    reportName?: string;
    // TODO: extend: https://github.com/wswebcreation/multiple-cucumber-html-reporter#readme
  }

  export function generate(configuration: MultipleCucumberHtmlReporterOptions): void;
}
