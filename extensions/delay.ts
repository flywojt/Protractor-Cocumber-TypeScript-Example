import { browser } from 'protractor';

export async function delay(timeout: number) {
  await browser.driver.sleep(timeout);
}
