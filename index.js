var fs = require('fs');
var {Builder} = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
require('geckodriver');

// const tmpdir = fs.mkdtempSync('/tmp/moment-selenium-visual-test');

// const addUserChromeProfile = function(tmpdir) {
//   const chromeDir = `${tmpdir}/chrome`;
//   fs.mkdirSync(chromeDir);

//   fs.writeFileSync(
//     `${chromeDir}/userChrome.css`,
//     '@namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"); /* only needed once */' +
//     '\r\n' +
//     'statuspanel { display: none !important; }' +
//     '\r\n' +
//     '#statuspanel { display: none !important; }'
//   );
// };

let createDriver = async function() {
  addUserChromeProfile(tmpdir);

  const firefoxOpts = new firefox.Options();
  firefoxOpts.setProfile(tmpdir);
  firefoxOpts.setPreference('focusmanager.testmode', false);
  firefoxOpts.setPreference('security.fileuri.strict_origin_policy', false);
  firefoxOpts.setPreference('webdriver.log.file', '/log/firefox_console');
  firefoxOpts.setPreference('gfx.direct2d.disabled', true);
  firefoxOpts.setPreference('dom.storage.next_gen', true);
  firefoxOpts.setPreference('layers.acceleration.disabled', true);
  firefoxOpts.setPreference('devtools.webconsole.persistlog', true);
  firefoxOpts.setPreference('app.update.auto', false);
  firefoxOpts.setPreference('app.update.enabled', false);
  firefoxOpts.setPreference('media.decoder-doctor.notifications-allowed', '');
  firefoxOpts.setPreference('browser.fullscreen.animate', false);
  firefoxOpts.setPreference('browser.fullscreen.autohide', false);
  firefoxOpts.setPreference('full-screen-api.warning.delay', 0);
  firefoxOpts.setPreference('full-screen-api.warning.timeout', 0);
  firefoxOpts.setPreference('focusmanager.testmode', false);
  firefoxOpts.setPreference('ui.caretBlinkTime', 0);
  firefoxOpts.setPreference('browser.link.open_newwindow', 1);

  firefoxOpts.setBinary('/usr/bin/firefox');
  firefoxOpts.addArguments('-no-remote');
  firefoxOpts.setLoggingPrefs({browser: 'DEBUG'});

  var page = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(firefoxOpts)
      .build();

  return page;
};

// const driver = createDriver();

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://google.com');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();