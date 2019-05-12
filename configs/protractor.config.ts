import { Config, browser } from 'protractor';
import { SingleReporter, MultipleReporter } from '../support';
import * as path from 'path';

require('ts-node/register');
require('tsconfig-paths/register');

const jsonReportDirectoryPath = path.join(process.cwd(), '/reports/json');
const jsonReportFilePath = `${jsonReportDirectoryPath}/cucumber_report.json`;

export let config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
    chromeOptions:{
      // args:['--headless']
    }
  },
  // browser.ignoreSynchronization:true,
  restartBrowserBetweenTests:true,
  specs: ['../../specs/features/**/*.feature'],
  getPageTimeout:50000,
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    format: `json:${jsonReportFilePath}`,
    require: ['../specs/definitions/**/*.spec.js', '../hooks/**/*.js', '../support/**/*.js'],
    tags: '@all'
  },

  onPrepare: async () => {
    browser.driver.manage().timeouts().pageLoadTimeout(10000);
    browser.manage().timeouts().implicitlyWait(10000);
    browser.ignoreSynchronization = true;
    await browser.waitForAngularEnabled(false);
    await browser
      .manage()
      .window()
      .maximize(); 

    SingleReporter.createDirectory(jsonReportDirectoryPath);
    MultipleReporter.createDirectory(jsonReportDirectoryPath);
  },

  onComplete: () => {
    SingleReporter.createHTMLReport();
    MultipleReporter.createHTMLReport();
  }
};
