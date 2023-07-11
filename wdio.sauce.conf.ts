import { config } from "./wdio.shared.conf.js";
import { SauceRegions } from "@wdio/types/build/Options";

config.port = +process.env.SAUCE_PORT!;
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.SAUCE_REGION as SauceRegions;

config.hostname = process.env.SAUCE_HOSTNAME;

config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "android",
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    "appium:deviceName": "Google Pixel 6 Pro GoogleAPI Emulator",
    "appium:platformVersion": "12",
    //   'appium:orientation': 'PORTRAIT',
    "appium:automationName": "flutter",
    "appium:app": "storage:filename=app-debug.apk",
    //   // @ts-ignore
    //   'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    "appium:noReset": true,
    "appium:newCommandTimeout": 240,
    "sauce:options": {
      build: "appium-build-SLN0G",
      // name: `Appium Tests ${new Date(Date.now()).toISOString()}`,
      appiumVersion: process.env.SAUCE_APPIUM_VERSION,
    },
  },
];

export { config };
