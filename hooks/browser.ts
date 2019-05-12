import { After, Status, Before, HookOptions } from 'cucumber';
import { browser } from 'protractor';
import * as fs from 'fs';
import * as moment from 'moment';
import { AllPages } from 'pages';

const screenshotDirectoryPath = process.cwd() + '/reports/screenshots';
let pages = new AllPages();

Before({ tags: '@all', timeout: 10 * 1000 } as HookOptions, async () => {
  browser.driver.sleep(5000);
  browser.driver.manage().timeouts().pageLoadTimeout(90000);
  browser.manage().timeouts().implicitlyWait(90000);
  browser.ignoreSynchronization = true;
  await browser.waitForAngularEnabled(false);
  await browser
    .manage()
    .window()
    .maximize();
});


After({ timeout: 15 * 1000 } as HookOptions, async () => {
  await browser.driver.close();
});

After({ timeout: 15 * 1000 },async function(scenario) {
  const now = moment.utc().format('YYYY_MM_DD__HH_mm_ss');
  const screenshot = await browser.takeScreenshot();
  let screenshotPath: string = screenshotDirectoryPath;

  switch (scenario.result.status) {
    case Status.FAILED:
      screenshotPath += '/failed';
      break;

    default:
      return;
  }

  this.attach(screenshot, 'image/png');

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

  screenshotPath += `/${scenario.pickle.name.split(' ').join('_')}_${now}.png`;
  const stream = fs.createWriteStream(screenshotPath);

  try {
    stream.write(new Buffer(screenshot, 'base64'));
  } catch (ex) {
    console.log('Error', ex);
  } finally {
    stream.close();
    stream.destroy();
  }
});
