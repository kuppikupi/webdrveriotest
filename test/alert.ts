import { expect } from '@wdio/globals';
import alert from '../page-objects/alert.js';

describe('Feature: contextMenu', function () {
  before(async function () {
    await alert.open();
    (await alert.alertLink).waitForDisplayed();
  });

  it(' User should be redirected to contextMenu page', async function () {
    await alert.alertLink.click();
    await alert.box.waitForExist();
    await expect(await alert.box).toBeDisplayed();
  });
});

describe('When: User right clicks the box', function () {
  it('Then: js dialog should appear', async function () {
    await alert.box.moveTo();
    // await alert.box.click({button: "left", x: 0, y: 0, skipRelease: false});

    await alert.box.click({ button: 'right', x: 0, y: 0, skipRelease: true });
    await browser.pause(5000);
    await expect(await browser.isAlertOpen()).toBeTruthy();
    await expect(await browser.getAlertText()).toContain('You selected a context menu');
  });
});
