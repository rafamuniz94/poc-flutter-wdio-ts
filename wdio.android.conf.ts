import { config } from "./wdio.shared.conf.js";
import path from "node:path";

config.capabilities = [
  {
    platformName: "android",
    "appium:deviceName": "pixel_4",
    // "appium:platformVersion": "12",
    // 'appium:orientation': 'PORTRAIT',
    "appium:app": path.join(process.cwd(), "./apps/android/app-debug.apk"),
    "appium:automationName": "flutter",
  },
];

export { config };
