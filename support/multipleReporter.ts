import * as reporter from 'multiple-cucumber-html-reporter';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';

const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');

const cucumberReporterOptions = {
  jsonDir: jsonReports,
  reportPath: htmlReports + '/multiple_cucumber_reporter/',
  reportName: 'test',
  openReportInBrowser: true
} as reporter.MultipleCucumberHtmlReporterOptions;

export class Reporter {
  public static createDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  }

  public static createHTMLReport() {
    try {
      reporter.generate(cucumberReporterOptions);
    } catch (err) {
      if (err) {
        throw new Error('Failed to save cucumber test results to json file.');
      }
    }
  }
}
